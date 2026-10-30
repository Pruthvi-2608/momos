import {createServer} from 'node:http';
import {spawn} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';
const resultDir=path.resolve('test-results');fs.mkdirSync(resultDir,{recursive:true});
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.jpg':'image/jpeg','.json':'application/json'};
const server=createServer((req,res)=>{let filename=path.resolve('dist','.'+decodeURIComponent(req.url.split('?')[0]));if(!filename.startsWith(path.resolve('dist')+path.sep)&&filename!==path.resolve('dist')){res.writeHead(403);res.end();return;}if(!path.extname(filename))filename=path.resolve('dist/index.html');try{res.setHeader('Content-Type',mime[path.extname(filename)]||'application/octet-stream');res.end(fs.readFileSync(filename));}catch{res.writeHead(404);res.end();}});
await new Promise((resolve,reject)=>{server.once('error',reject);server.listen(0,'127.0.0.1',resolve);});
const port=server.address().port;
const profile=fs.mkdtempSync(path.join(os.tmpdir(),'momos-browser-qa-'));
const chrome=spawn(process.env.CHROME_BIN||'C:/Program Files/Google/Chrome/Application/chrome.exe',['--headless=new','--remote-debugging-port=0',`--user-data-dir=${profile}`,'--no-first-run','--disable-extensions','--disable-gpu','--no-sandbox','--enable-logging=stderr','about:blank'],{stdio:['ignore','ignore','pipe'],windowsHide:true});
let serial=0;const pending=new Map(),exceptions=[],badAssets=[];
const endpoint=await new Promise((resolve,reject)=>{
 let log='';let poll;
 const stop=()=>{clearTimeout(timer);clearInterval(poll);};
 const success=value=>{stop();resolve(value);};
 const fail=error=>{stop();reject(error);};
 const timer=setTimeout(()=>fail(new Error('Chrome did not expose a debugging endpoint: '+log.slice(-2000))),45000);
 poll=setInterval(()=>{try{const [debugPort,debugPath]=fs.readFileSync(path.join(profile,'DevToolsActivePort'),'utf8').trim().split(/\r?\n/);if(debugPort&&debugPath)success(`ws://127.0.0.1:${debugPort}${debugPath}`);}catch{/* browser is still initializing */}},200);
 chrome.stderr.on('data',chunk=>{log+=chunk.toString();const match=log.match(/DevTools listening on (ws:\/\/[^\s]+)/);if(match)success(match[1]);});
 chrome.on('error',fail);chrome.on('exit',code=>fail(new Error('Chrome exited: '+code+' '+log.slice(-2000))));
}).catch(error=>{chrome.kill();server.close();fs.writeFileSync(path.join(resultDir,'browser-startup-error.txt'),error.message);throw error;});
const socket=new WebSocket(endpoint);await new Promise((resolve,reject)=>{socket.addEventListener('open',resolve,{once:true});socket.addEventListener('error',reject,{once:true});});
socket.addEventListener('message',event=>{const message=JSON.parse(event.data);if(message.id&&pending.has(message.id)){const {resolve,reject,timer}=pending.get(message.id);clearTimeout(timer);pending.delete(message.id);if(message.error)reject(new Error(JSON.stringify(message.error)));else resolve(message.result);}if(message.method==='Runtime.exceptionThrown')exceptions.push(message.params.exceptionDetails);if(message.method==='Network.responseReceived'&&message.params.response.url.startsWith(`http://127.0.0.1:${port}`)&&message.params.response.status>=400)badAssets.push(message.params.response);});
function send(method,params={},sessionId){return new Promise((resolve,reject)=>{const id=++serial;const timer=setTimeout(()=>{pending.delete(id);reject(new Error('CDP timeout: '+method));},30000);pending.set(id,{resolve,reject,timer});socket.send(JSON.stringify({id,method,params,...(sessionId?{sessionId}:{})}));});}
let session;
const evaluate=async expression=>{const value=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true},session);if(value.exceptionDetails)throw new Error(JSON.stringify(value.exceptionDetails));return value.result.value;};
const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function until(expression){for(let n=0;n<45;n++){if(await evaluate(expression))return;await pause(100);}throw new Error('Timed out waiting for '+expression);}
async function bookCapture(name){const clip=await evaluate("(()=>{const r=document.querySelector('.book-stage').getBoundingClientRect();return {x:r.x+scrollX,y:r.y+scrollY,width:r.width,height:r.height+130,scale:1}})()");const {data}=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip},session);fs.writeFileSync(path.join(resultDir,name),Buffer.from(data,'base64'));}
const report=[];
async function inspectReference(){
 const requestedUrl='https://pin.it/675C66RwP';const evidence={requestedUrl,date:new Date().toISOString()};
 try{const navigation=await send('Page.navigate',{url:requestedUrl},session);evidence.navigationError=navigation.errorText||null;
  if(!navigation.errorText){await pause(2500);Object.assign(evidence,await evaluate("({url:location.href,title:document.title,canonical:document.querySelector('link[rel=canonical]')?.href||null,ogImage:document.querySelector('meta[property=\"og:image\"]')?.content||null,text:document.body?.innerText.slice(0,1200)||''})"));if(evidence.ogImage&&/pinterest\./.test(evidence.url)){const shot=await send('Page.captureScreenshot',{format:'png'},session);fs.writeFileSync(path.join(resultDir,'pinterest-browser-capture.png'),Buffer.from(shot.data,'base64'));}}
 }catch(error){evidence.inspectionError=error.message;}
 fs.writeFileSync(path.join(resultDir,'reference-browser-evidence.json'),JSON.stringify(evidence,null,2));console.log('REFERENCE_BROWSER_EVIDENCE',JSON.stringify(evidence));
}
try{
 const {targetId}=await send('Target.createTarget',{url:'about:blank'});({sessionId:session}=await send('Target.attachToTarget',{targetId,flatten:true}));
 await send('Page.enable',{},session);await send('Runtime.enable',{},session);await send('Network.enable',{},session);
 if(process.env.INSPECT_REFERENCE==='1')await inspectReference();
 await send('Page.navigate',{url:`http://127.0.0.1:${port}`},session);
 await until("!!document.querySelector('.book-stage')");
 await pause(1400);
 for(const width of [320,360,375,390,768,1024,1440,1920]){
  const height=width<768?844:900;
  await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false},session);await pause(200);
  console.log('Checking viewport',width);
  await evaluate("(async()=>{scrollTo(0,0);const imgs=[...document.images].filter(i=>i.getClientRects().length);imgs.forEach(i=>i.loading='eager');await Promise.race([Promise.all(imgs.map(i=>i.decode().catch(()=>{}))),new Promise(r=>setTimeout(r,10000))]);})()");await pause(250);
  const check=await evaluate(`({width:innerWidth,scroll:document.documentElement.scrollWidth,h1:document.querySelectorAll('h1').length,broken:[...document.images].filter(i=>i.complete&&!i.naturalWidth).map(i=>i.src)})`);
  assert.ok(check.scroll<=width,JSON.stringify(check));assert.equal(check.h1,1);assert.deepEqual(check.broken,[]);
  const full=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true},session);fs.writeFileSync(path.join(resultDir,`${width}-full.png`),Buffer.from(full.data,'base64'));
  const {data}=await send('Page.captureScreenshot',{format:'png',clip:{x:0,y:0,width,height,scale:1}},session);fs.writeFileSync(path.join(resultDir,`${width}.png`),Buffer.from(data,'base64'));report.push({responsive:check});
 }
 await send('Emulation.setDeviceMetricsOverride',{width:1440,height:900,deviceScaleFactor:1,mobile:false},session);
 await evaluate('scrollTo(0,300)');await pause(1400);
 const depth=await evaluate("({far:parseFloat(document.querySelector('.mountains-hero .plane-far').style.getPropertyValue('--depth-y')),mid:parseFloat(document.querySelector('.mountains-hero .plane-mid').style.getPropertyValue('--depth-y')),near:parseFloat(document.querySelector('.mountains-hero .plane-near').style.getPropertyValue('--depth-y')),food:parseFloat(document.querySelector('.hero-visual').style.getPropertyValue('--depth-y')),engine:document.querySelector('[data-engine]').dataset.engine})");
 assert.ok(depth.far>0&&depth.mid>depth.far&&depth.near>depth.mid&&depth.food<0,JSON.stringify(depth));report.push({parallax:depth});
 await evaluate('scrollTo(0,0)');await pause(100);
 const firstTitle=await evaluate("document.querySelector('.signature-description h3').textContent");await evaluate("document.querySelector('[aria-label=\"Next featured photo\"]').click()");await until(`document.querySelector('.signature-description h3').textContent!==${JSON.stringify(firstTitle)}`);report.push({showcase:'PASS: selecting a real image updates its description'});
 assert.equal(await evaluate("['home','story','menu','moments','visit'].every(id=>!!document.getElementById(id))&&!!document.querySelector('.manifesto')"),true);
 await evaluate("document.querySelector('[aria-label=\"Open the book\"]').click()");await until("document.querySelector('.book-stage').dataset.state==='open'");
 assert.match(await evaluate("document.querySelector('.book-status').textContent"),/01–02/);
 assert.equal(await evaluate("[...document.querySelectorAll('.book-base .paper-page')].every(p=>[...p.children].every(c=>c.getBoundingClientRect().bottom<=p.getBoundingClientRect().bottom+1))"),true,'Desktop menu content must fit its page');
 await bookCapture('book-desktop.png');
 await send('Emulation.setDeviceMetricsOverride',{width:720,height:450,deviceScaleFactor:2,mobile:false},session);await pause(200);
 assert.equal(await evaluate("document.documentElement.scrollWidth<=innerWidth&&document.querySelector('.book-stage').offsetWidth<=innerWidth"),true,'200% zoom-equivalent layout must fit');
 await send('Emulation.setDeviceMetricsOverride',{width:844,height:390,deviceScaleFactor:1,mobile:true},session);await pause(200);
 assert.equal(await evaluate("document.documentElement.scrollWidth<=innerWidth"),true,'Landscape must not overflow');
 await send('Emulation.setDeviceMetricsOverride',{width:1440,height:900,deviceScaleFactor:1,mobile:false},session);await pause(200);
 report.push({additionalLayouts:'PASS: 720 CSS px at 2x scale (200% zoom-equivalent) and 844×390 landscape'});
 await evaluate("document.querySelector('[aria-label=\"Next page\"]').click();document.querySelector('[aria-label=\"Next page\"]').click()");await until("document.querySelector('.book-stage').dataset.state==='open'");
 assert.match(await evaluate("document.querySelector('.book-status').textContent"),/03–04/);
 await evaluate("document.querySelector('.book-stage').dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowRight',bubbles:true}))");await until("document.querySelector('.book-stage').dataset.state==='open'");
 assert.match(await evaluate("document.querySelector('.book-status').textContent"),/05–06/);
 await evaluate("document.querySelector('.book-categories button:last-child').click()");await until("document.querySelector('.book-stage').dataset.state==='open'");
 assert.match(await evaluate("document.querySelector('.book-status').textContent"),/07–08/);
 await evaluate("document.querySelector('[aria-label=\"Next page\"]').click()");await until("document.querySelector('.book-stage').dataset.state==='open'");
 assert.equal(await evaluate("document.querySelector('[aria-label=\"Next page\"]').disabled"),true);
 await evaluate("document.querySelector('[aria-label=\"Previous page\"]').click()");await until("document.querySelector('.book-stage').dataset.state==='open'");
 await evaluate("document.querySelector('.book-categories button:nth-child(3)').click()");await until("document.querySelector('.book-stage').dataset.state==='open'");
 await send('Emulation.setDeviceMetricsOverride',{width:360,height:900,deviceScaleFactor:1,mobile:true},session);await pause(100);
 assert.match(await evaluate("document.querySelector('.book-status').textContent"),/05 \/ 10/);
 await evaluate("document.querySelector('.book-stage').dispatchEvent(new PointerEvent('pointerdown',{clientX:280,clientY:150,pointerType:'touch',bubbles:true}));document.querySelector('.book-stage').dispatchEvent(new PointerEvent('pointerup',{clientX:100,clientY:155,pointerType:'touch',bubbles:true}))");await until("document.querySelector('.book-stage').dataset.state==='open'");
 assert.match(await evaluate("document.querySelector('.book-status').textContent"),/06 \/ 10/);
 assert.equal(await evaluate("[...document.querySelectorAll('.book-base .paper-page')].every(p=>[...p.children].every(c=>c.getBoundingClientRect().bottom<=p.getBoundingClientRect().bottom+1))"),true,'Mobile menu content must fit its page');
 await bookCapture('book-mobile.png');
 await evaluate("document.querySelector('[aria-label=\"Close menu\"]').click()");await until("document.querySelector('.book-stage').dataset.state==='closed'");
 await evaluate("document.querySelector('[aria-label=\"Open the book\"]').click()");await until("document.querySelector('.book-stage').dataset.state==='open'");
 report.push({book:'PASS: cover, index, category jumps, back cover, rapid input lock, next/previous, keyboard, end disabled, resize, mobile swipe, close and reopen'});
 await evaluate("document.querySelector('.gallery-tile').focus();document.querySelector('.gallery-tile').click()");await until("!!document.querySelector('[role=dialog]')");
 await evaluate("document.querySelector('[aria-label=\"Next photo\"]').click()");assert.match(await evaluate("document.querySelector('.lightbox figcaption').textContent"),/2 \/ 8/);
 await evaluate("document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}))");await until("!document.querySelector('[role=dialog]')");assert.equal(await evaluate("document.activeElement.classList.contains('gallery-tile')"),true);
 report.push({gallery:'PASS: opens, navigation, Escape, focus restoration'});
 await evaluate("document.querySelector('.mobile-toggle').click()");await until("!!document.querySelector('#mobile-nav')");await evaluate("document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}))");await until("!document.querySelector('#mobile-nav')");
 await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]},session);await pause(100);
 await evaluate("document.querySelector('[aria-label=\"Next page\"]').click()");assert.equal(await evaluate("document.querySelector('.book-stage').dataset.state"),'open');
 assert.equal(await evaluate("getComputedStyle(document.querySelector('.marquee')).animationName"),'none');
 report.push({reducedMotion:'PASS: instant page navigation and stopped ambient loops'});
 assert.equal(await evaluate("getComputedStyle(document.querySelector('.mountains-hero .plane-far')).getPropertyValue('--depth-y').trim()"),'0px');
 if(process.env.CHECK_DEV==='1'){
  await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'no-preference'}]},session);
  await send('Page.navigate',{url:'http://127.0.0.1:5173/'},session);await until("!!document.querySelector('.book-stage')");
  await evaluate("sessionStorage.removeItem('momos-arrival-v3')");await send('Network.setCacheDisabled',{cacheDisabled:true},session);await send('Page.reload',{},session);await pause(1800);
  await until("!!document.querySelector('.book-stage')&&!document.querySelector('.arrival')");report.push({development:'PASS: React Strict Mode startup and non-blocking intro'});
 }
 assert.deepEqual(exceptions,[]);assert.deepEqual(badAssets,[]);report.push({runtime:'PASS: no JS exceptions or local asset failures',gsap:await evaluate("typeof window.gsap==='object'?'loaded':document.documentElement.dataset.gsap||'loading'")});
 fs.writeFileSync(path.join(resultDir,'report.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
}finally{socket.close();chrome.kill();await new Promise(resolve=>server.close(resolve));}
