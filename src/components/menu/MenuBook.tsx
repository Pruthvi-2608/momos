import {useRef,useState,useEffect} from 'react';
import {motion,useReducedMotion} from 'motion/react';
import {ArrowLeft,ArrowRight,BookOpen,RotateCcw} from 'lucide-react';
import {categories,brand} from '../../data/content';
import Page,{menuPageCount} from './MenuPage';
import {motionTokens} from '../../lib/motion';
type BookState='closed'|'opening'|'open'|'turning'|'closing';
const total=menuPageCount;
export default function MenuBook(){
 const reduced=useReducedMotion();const [desktop,setDesktop]=useState(()=>window.innerWidth>=1024);
 const [page,setPage]=useState(-1);const [turn,setTurn]=useState<{from:number;to:number;direction:1|-1}|null>(null);const [state,setState]=useState<BookState>('closed');
 const locked=useRef(false);const pointer=useRef<{x:number;y:number}|null>(null);const suppressClick=useRef(false);
 useEffect(()=>{const mq=matchMedia('(min-width:1024px)');const change=()=>{setDesktop(mq.matches);};mq.addEventListener('change',change);return()=>mq.removeEventListener('change',change);},[]);
 const current=desktop&&page>=0?page-page%2:page;const step=desktop?2:1;const last=desktop?total-2:total-1;
 const finish=()=>{if(!turn)return;setPage(turn.to);setState(turn.to<0?'closed':'open');setTurn(null);locked.current=false;};
 const begin=(to:number,direction:1|-1)=>{
  if(locked.current)return;
  if(to===current)return;
  if(reduced){setPage(to);setState(to<0?'closed':'open');return;}
  locked.current=true;setState(current<0?'opening':to<0?'closing':'turning');setTurn({from:current,to,direction});
 };
 const go=(direction:1|-1)=>begin(direction===1?(current<0?0:Math.min(current+step,last)):(current<=0?-1:current-step),direction);
 const beneath=turn?.to??current;
 return <div className="menu-experience">
  <nav className="book-categories" aria-label="Menu categories"><button aria-pressed={current===0||current===1} disabled={!!turn} onClick={()=>begin(0,current<0?1:-1)}>The index</button>{categories.map((category,i)=><button key={category.title} aria-pressed={current>=2+i*2&&current<4+i*2} disabled={!!turn} onClick={()=>begin(2+i*2,current<2+i*2?1:-1)}>{category.title}</button>)}</nav>
  <div className={`book-stage ${current<0&&!turn?'is-closed':''}`} tabIndex={0} aria-label="Interactive menu book. Use left and right arrow keys to turn pages." data-state={state} data-reveal="book" onKeyDown={e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();go(e.key==='ArrowRight'?1:-1);}}} onPointerDown={e=>{suppressClick.current=false;pointer.current={x:e.clientX,y:e.clientY};}} onPointerUp={e=>{if(!pointer.current)return;const dx=e.clientX-pointer.current.x;const dy=e.clientY-pointer.current.y;pointer.current=null;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.4){suppressClick.current=true;go(dx<0?1:-1);}}} onClickCapture={e=>{if(suppressClick.current){e.preventDefault();e.stopPropagation();suppressClick.current=false;}}} onPointerCancel={()=>{pointer.current=null;}}>
   <div className={`book-base ${beneath<0?'cover-base':''}`} aria-hidden="true">{beneath<0?<Page index={-1}/>:desktop?<><Page index={beneath}/><Page index={beneath+1}/></>:<Page index={beneath}/>}</div>
   {turn&&<motion.div className={`turning-leaf ${desktop?'desktop-leaf':''} ${turn.direction===-1?'backward':''}`} aria-hidden="true" initial={{rotateY:0}} animate={{rotateY:turn.direction===1?-180:180}} transition={{duration:motionTokens.flip,ease:[.4,0,.2,1]}} onAnimationComplete={finish}>
     <div className="leaf-front"><Page index={turn.from<0?-1:desktop?turn.from+(turn.direction===1?1:0):turn.from}/></div>
     <div className="leaf-back"><Page index={turn.to<0?-1:desktop?turn.to+(turn.direction===1?0:1):turn.to}/></div>
     <motion.div className="leaf-crease" initial={{opacity:0}} animate={{opacity:[0,.42,0]}} transition={{duration:motionTokens.flip,times:[0,.5,1]}}/>
   </motion.div>}
   {!turn&&current>=0&&<><button className="page-corner corner-right" aria-label="Turn next page" disabled={current>=last} onClick={()=>go(1)}><ArrowRight size={17}/></button>{current>0&&<button className="page-corner corner-left" aria-label="Turn previous page" onClick={()=>go(-1)}><ArrowLeft size={17}/></button>}</>}
  </div>
  <div className="book-controls"><button className="round-button" aria-label="Previous page" disabled={!!turn||current<0} onClick={()=>go(-1)}><ArrowLeft size={19}/></button><span className="book-status" aria-live="polite">{current<0?'A LITTLE COMFORT, BOUND TOGETHER':`PAGE ${String(current+1).padStart(2,'0')}${desktop?`–${String(current+2).padStart(2,'0')}`:''} / ${String(total).padStart(2,'0')}`}</span><button className={current<0?'button open-book':'round-button'} disabled={!!turn||current>=last} aria-label={current<0?'Open the book':'Next page'} onClick={()=>go(1)}>{current<0?<>Open the book <BookOpen size={18}/></>:<ArrowRight size={19}/>}</button></div>
  <p className="book-hint">{current<0?'Your next favorite bite is a page away.':'Drag a page corner, swipe, or use the arrows.'}</p>
  {current>=0&&<button className="text-link close-book" aria-label="Close menu" disabled={!!turn} onClick={()=>begin(-1,-1)}><RotateCcw size={14}/> Close menu</button>}
  <details className="accessible-menu"><summary><BookOpen size={16}/> View accessible text menu <span>+</span></summary><div className="accessible-content"><p>This is a selection of dishes mentioned in our Instagram posts. Please ask the café for the full menu, current availability and prices.</p>{categories.map(c=><section key={c.title}><h3>{c.title}</h3><ul>{c.items.map(d=><li key={d.name}><strong>{d.name}</strong><p>{d.description}</p>{d.price&&<span>{d.price}</span>}</li>)}</ul></section>)}<a className="text-link" href={brand.instagram} target="_blank" rel="noreferrer">Say hello on Instagram ↗</a></div></details>
 </div>;
}


