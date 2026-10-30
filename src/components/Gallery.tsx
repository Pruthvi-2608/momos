import {useState,useRef,useEffect} from 'react';
import {AnimatePresence,motion} from 'motion/react';
import {ArrowLeft,ArrowRight,ArrowUpRight,X} from 'lucide-react';
import {photos,brand} from '../data/content';
import {FoodPhoto,SectionLabel,Instagram} from './ui';
const gallery=[photos[3],photos[5],photos[4],photos[1],photos[2],photos[6],photos[7],photos[8]];
export default function Gallery(){
 const [selected,setSelected]=useState<number|null>(null);const dialog=useRef<HTMLDivElement>(null);const opener=useRef<HTMLElement|null>(null);const isOpen=selected!==null;
 useEffect(()=>{
  if(!isOpen)return;
  const old=document.body.style.overflow;document.body.style.overflow='hidden';dialog.current?.querySelector<HTMLButtonElement>('[data-close]')?.focus();
  const keyboard=(e:KeyboardEvent)=>{
   if(e.key==='Escape')setSelected(null);
   if(e.key==='ArrowRight')setSelected(x=>x===null?null:(x+1)%gallery.length);
   if(e.key==='ArrowLeft')setSelected(x=>x===null?null:(x-1+gallery.length)%gallery.length);
   if(e.key==='Tab'){
    const items=dialog.current?.querySelectorAll<HTMLElement>('button,a[href]');if(!items?.length)return;
    if(e.shiftKey&&document.activeElement===items[0]){e.preventDefault();items[items.length-1].focus();}
    else if(!e.shiftKey&&document.activeElement===items[items.length-1]){e.preventDefault();items[0].focus();}
   }
  };document.addEventListener('keydown',keyboard);
  return()=>{document.body.style.overflow=old;document.removeEventListener('keydown',keyboard);opener.current?.focus();};
 },[isOpen]);
 return <section id="moments" className="gallery-section section-pad" data-scene="gallery" data-ambient><span id="gallery" className="anchor-alias" aria-hidden="true"/><div className="container"><div className="section-top" data-reveal="lines"><div><SectionLabel>04 / FROM OUR LITTLE CORNER</SectionLabel><h2>Little moments.<br/><em>Big cravings.</em></h2></div><div className="gallery-intro"><p>A few little glimpses of food,<br/>friends, and everything in between.</p><a className="text-link" href={brand.instagram} target="_blank" rel="noreferrer"><Instagram size={17}/> @momosandstuff_ <ArrowUpRight size={16}/></a></div></div><div className="gallery-grid">{gallery.map((p,i)=><motion.button key={p.id} data-reveal="wipe" className={`gallery-tile tile-${i}`} onClick={e=>{opener.current=e.currentTarget;setSelected(i);}} whileTap={{scale:.98}} aria-label={`View photo: ${p.label}`}><div className="gallery-depth" data-parallax data-distance={i%3===0?'28':i%3===1?'-24':'0'}><FoodPhoto photo={p}/></div><span className="gallery-caption">{p.label}<ArrowUpRight size={20}/></span></motion.button>)}</div></div>
 <AnimatePresence>{selected!==null&&<motion.div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo gallery" ref={dialog} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.25}} onClick={e=>{if(e.target===e.currentTarget)setSelected(null);}}><button data-close className="lightbox-close round-button" aria-label="Close photo" onClick={()=>setSelected(null)}><X/></button><button className="round-button lightbox-prev" aria-label="Previous photo" onClick={()=>setSelected((selected-1+gallery.length)%gallery.length)}><ArrowLeft/></button><figure><motion.img key={gallery[selected].id} src={`/assets/instagram/${gallery[selected].id}-1600.jpg`} alt={gallery[selected].alt} initial={{scale:.95,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:.35}}/><figcaption aria-live="polite">{gallery[selected].label} <span>{selected+1} / {gallery.length}</span>{gallery[selected].instagramUrl&&<a className="lightbox-source" href={gallery[selected].instagramUrl} target="_blank" rel="noreferrer">View original Instagram post ↗</a>}</figcaption></figure><button className="round-button lightbox-next" aria-label="Next photo" onClick={()=>setSelected((selected+1)%gallery.length)}><ArrowRight/></button></motion.div>}</AnimatePresence>
 </section>;
}
