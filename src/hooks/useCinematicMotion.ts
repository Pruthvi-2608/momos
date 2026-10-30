import {useEffect,useRef} from 'react';
import {useReducedMotion} from 'motion/react';
type Vars=Record<string,unknown>;
type Timeline={from:(target:unknown,vars:Vars,position?:number|string)=>Timeline};
type GSAPRuntime={registerPlugin:(plugin:unknown)=>void;context:(fn:()=>void,root:unknown)=>{revert:()=>void};timeline:(vars?:Vars)=>Timeline;from:(target:unknown,vars:Vars)=>void;fromTo:(target:unknown,from:Vars,to:Vars)=>void};
declare global{interface Window{gsap?:GSAPRuntime;ScrollTrigger?:{refresh:()=>void}}}
const clamp=(n:number)=>Math.max(0,Math.min(1,n));
export function usePageMotion(){
 const root=useRef<HTMLDivElement>(null);const reduced=useReducedMotion();
 useEffect(()=>{
  const element=root.current;if(!element)return;
  element.dataset.engine=reduced?'reduced':'native';
  const scenes=Array.from(element.querySelectorAll<HTMLElement>('[data-scene]'));
  const layers=Array.from(element.querySelectorAll<HTMLElement>('[data-parallax]'));
  const ambient=Array.from(element.querySelectorAll<HTMLElement>('[data-ambient]'));
  const visible=new Set<Element>();let frame=0;let gsapContext:{revert:()=>void}|undefined;let engineStarted=false;
  const syncAmbient=()=>ambient.forEach(node=>node.classList.toggle('motion-active',visible.has(node)&&!document.hidden&&!document.querySelector('#mobile-nav,.lightbox')&&!reduced));
  const update=()=>{
   frame=0;if(reduced||engineStarted||document.hidden)return;
   const mobile=innerWidth<768;
   const geometry=new Map(scenes.map(scene=>[scene,scene.getBoundingClientRect()]));
   for(const layer of layers){
    const scene=layer.closest<HTMLElement>('[data-scene]');if(!scene)continue;const rect=geometry.get(scene);if(!rect||rect.bottom<0||rect.top>innerHeight)continue;
    const isHero=scene.dataset.scene==='hero';const progress=isHero?clamp(-rect.top/rect.height):clamp((innerHeight-rect.top)/(innerHeight+rect.height));
    let distance=Number(layer.dataset.distance||0);
    if(mobile){distance=isHero&&layer.classList.contains('hero-visual')?-18:0;}
    const y=isHero?progress*distance:(progress-.5)*distance;
    layer.style.setProperty('--depth-y',`${y.toFixed(2)}px`);
    const scale=mobile?1:1+(Number(layer.dataset.scale||1)-1)*progress;
    layer.style.setProperty('--depth-scale',String(scale));
   }
   const hero=element.querySelector<HTMLElement>('.hero');if(hero){const p=clamp(-hero.getBoundingClientRect().top/hero.offsetHeight);element.style.setProperty('--scroll-progress',String(p));}
  };
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(update);};
  const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){visible.add(entry.target);entry.target.classList.add('is-revealed');}else visible.delete(entry.target);}syncAmbient();schedule();},{threshold:.08});
  new Set([...ambient,...element.querySelectorAll('[data-reveal]')]).forEach(node=>observer.observe(node));
  const visibility=()=>{syncAmbient();if(document.hidden&&frame){cancelAnimationFrame(frame);frame=0;}else schedule();};
  const overlayObserver=new MutationObserver(syncAmbient);overlayObserver.observe(element,{childList:true,subtree:true});
  const startGSAP=()=>{
   if(engineStarted||reduced||!window.gsap||!window.ScrollTrigger)return;
   const g=window.gsap;engineStarted=true;element.dataset.engine='gsap';
   try{g.registerPlugin(window.ScrollTrigger);gsapContext=g.context(()=>{
    if(performance.now()<1800)g.timeline({defaults:{ease:'power3.out'}})
     .from('.site-header',{opacity:0,y:-24,duration:.65},0)
     .from('.hero-sky',{opacity:0,filter:'blur(6px)',duration:.6},0)
     .from('.hero .mountain-plane',{opacity:0,'--arrival-y':'45px',duration:.95,stagger:.1},.15)
     .from('.hero-arrival',{opacity:0,y:56,scale:.89,rotation:-4,duration:1.15},.35)
     .from('[data-eyebrow]',{opacity:0,y:18,duration:.65},.45)
     .from('.hero-line>span',{yPercent:110,duration:1,stagger:.1},.5)
     .from('.hero-copy,.hero-actions,.scroll-cue',{opacity:0,y:20,duration:.6,stagger:.1},1.15);
    element.querySelectorAll<HTMLElement>('[data-reveal]').forEach(node=>{
     const kind=node.dataset.reveal;
     if(kind==='book')return;
     const trigger={trigger:node,start:'top 88%',once:true};
     if(kind==='wipe')g.from(node,{opacity:0,clipPath:'inset(12% 0% 0% 0% round 22px)',scale:.97,duration:1.15,ease:'power3.out',scrollTrigger:trigger});
     else if(kind==='stagger')g.from(node.children,{opacity:0,y:28,duration:.8,stagger:node.classList.contains('manifesto-lines')?.2:.12,ease:'power3.out',scrollTrigger:trigger});
     else g.from(node,{opacity:0,y:kind==='lines'?42:24,duration:kind==='lines'?1:.8,ease:'power3.out',scrollTrigger:trigger});
    });
    layers.forEach(layer=>{
     const scene=layer.closest<HTMLElement>('[data-scene]');if(!scene)return;
     const isHero=scene.dataset.scene==='hero';let distance=Number(layer.dataset.distance||0);if(innerWidth<768)distance=isHero&&layer.classList.contains('hero-visual')?-18:0;
     if(!distance)return;
     g.fromTo(layer,{'--depth-y':`${isHero?0:-distance/2}px`},{'--depth-y':`${isHero?distance:distance/2}px`,ease:'none',scrollTrigger:{trigger:scene,start:isHero?'top top':'top bottom',end:isHero?'bottom top':'bottom top',scrub:Number(layer.dataset.scrub||1)}});
     if(layer.dataset.scale&&innerWidth>=768)g.fromTo(layer,{'--depth-scale':1},{'--depth-scale':Number(layer.dataset.scale),ease:'none',scrollTrigger:{trigger:scene,start:'top bottom',end:'bottom top',scrub:1}});
    });
    const hero=element.querySelector('#home');if(hero)g.fromTo(element,{'--scroll-progress':0},{'--scroll-progress':1,ease:'none',scrollTrigger:{trigger:hero,start:'top top',end:'bottom top',scrub:.7}});
    g.from('.book-stage',{y:75,rotateX:10,scale:.9,duration:1.2,ease:'power3.out',scrollTrigger:{trigger:'.book-stage',start:'top 88%',once:true}});
    element.querySelectorAll('[data-draw]').forEach(path=>g.fromTo(path,{strokeDashoffset:1},{strokeDashoffset:0,duration:1.5,ease:'power2.out',scrollTrigger:{trigger:path,start:'top 90%',once:true}}));
   },element);window.ScrollTrigger.refresh();}
   catch{gsapContext?.revert();engineStarted=false;element.dataset.engine='native';schedule();}
  };
  let previousMobile=innerWidth<768;
  const resize=()=>{const now=innerWidth<768;const changed=now!==previousMobile;previousMobile=now;if(changed&&engineStarted){gsapContext?.revert();engineStarted=false;startGSAP();}schedule();};
  window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',resize);window.addEventListener('gsap-ready',startGSAP);document.addEventListener('visibilitychange',visibility);
  startGSAP();schedule();
  const refresh=()=>window.ScrollTrigger?.refresh();document.fonts.ready.then(refresh);element.querySelectorAll('img').forEach(img=>img.addEventListener('load',refresh,{once:true}));
  return()=>{observer.disconnect();overlayObserver.disconnect();gsapContext?.revert();if(frame)cancelAnimationFrame(frame);window.removeEventListener('scroll',schedule);window.removeEventListener('resize',resize);window.removeEventListener('gsap-ready',startGSAP);document.removeEventListener('visibilitychange',visibility);element.querySelectorAll('img').forEach(img=>img.removeEventListener('load',refresh));layers.forEach(layer=>{layer.style.removeProperty('--depth-y');layer.style.removeProperty('--depth-scale');});};
 },[reduced]);return root;
}
