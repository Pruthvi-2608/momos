"""Download only public image URLs from the supplied CSV; never execute scrape data."""
import csv, json, hashlib, shutil, urllib.request, concurrent.futures
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'media-source'
OUT.mkdir(exist_ok=True)
brand = ROOT / 'public/assets/brand'
brand.mkdir(parents=True, exist_ok=True)
shutil.copyfile(ROOT / 'logo.jpg', brand / 'logo.jpg')
rows = list(csv.DictReader(next(ROOT.glob('dataset*.csv')).open(encoding='utf-8-sig')))
jobs = []
for i, row in enumerate(rows):
    urls = [row.get('displayUrl','')]
    urls += [row.get(f'childPosts/{n}/displayUrl','') for n in range(5)]
    for j, url in enumerate(dict.fromkeys(filter(None, urls))):
        jobs.append((i,j,url,row))

def download(job):
    i,j,url,row = job
    target = OUT / f'post-{i:02d}-{j}.jpg'
    record = {'id':f'post-{i:02d}-{j}','postId':row['id'],'postUrl':row['url'],'caption':row['caption'],'alt':row['alt'],'owner':row['ownerUsername'],'file':target.name}
    try:
        if not target.exists():
            if not url.startswith('https://') or not ('cdninstagram.com/' in url or 'fbcdn.net/' in url):
                raise ValueError('Unexpected image host')
            request = urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'})
            with urllib.request.urlopen(request,timeout=20) as response:
                if not response.headers.get('Content-Type','').startswith('image/'):
                    raise ValueError('Response is not an image')
                data=response.read(15_000_001)
                if len(data)>15_000_000: raise ValueError('Image exceeds limit')
                target.write_bytes(data)
        record['sha256']=hashlib.sha256(target.read_bytes()).hexdigest()
        record['ok']=True
    except Exception as error:
        record['ok']=False
        record['error']=str(error)
    return record

with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
    records=list(pool.map(download,jobs))
(OUT/'records.json').write_text(json.dumps(records,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'posts':len(rows),'imageReferences':len(jobs),'downloaded':sum(x['ok'] for x in records),'failed':sum(not x['ok'] for x in records)}))
