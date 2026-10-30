// Pinned official distribution. Content remains visible if the CDN is unavailable.
// The browser fetches these only once; the food photography is entirely local.
function loadScript(src:string){return new Promise<void>((resolve,reject)=>{const script=document.createElement('script');script.src=src;script.async=true;script.onload=()=>resolve();script.onerror=()=>reject(new Error('Animation library unavailable'));document.head.append(script);});}
export async function loadGSAP(){try{await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js');await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js');window.dispatchEvent(new Event('gsap-ready'));}catch{document.documentElement.dataset.gsap='unavailable';}}
