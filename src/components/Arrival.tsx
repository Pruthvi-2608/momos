import {useEffect,useRef,useState} from 'react';
import {AnimatePresence,motion,useReducedMotion} from 'motion/react';
import {brand} from '../data/content';
export default function Arrival(){const reduced=useReducedMotion();const [visible,setVisible]=useState(false);const started=useRef(false);
 useEffect(()=>{if(reduced){setVisible(false);return;}if(!started.current){try{if(sessionStorage.getItem('momos-arrival-v3')){setVisible(false);return;}sessionStorage.setItem('momos-arrival-v3','1');}catch{/* storage is optional */}started.current=true;}
 const image=document.querySelector<HTMLImageElement>('.hero-photo-frame img');if(image?.complete&&image.naturalWidth){setVisible(false);return;}
 setVisible(true);const timer=window.setTimeout(()=>setVisible(false),200);return()=>clearTimeout(timer);
 },[reduced]);
 return <AnimatePresence>{visible&&<motion.div className="arrival" aria-hidden="true" exit={{opacity:0,transition:{duration:.65,ease:[.22,1,.36,1]}}}><div className="arrival-panel"/><div className="arrival-panel"/><motion.div initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.5}} className="arrival-mark"><img src={brand.logo} width="80" height="80" alt=""/><span>A LITTLE COMFORT FROM THE HILLS</span></motion.div></motion.div>}</AnimatePresence>;
}
