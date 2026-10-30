import {brand,categories,photo} from '../../data/content';
import {FoodPhoto,Steam} from '../ui';
export const menuPageCount=4+categories.length*2;
function Cover({back=false}:{back?:boolean}){return <div className="book-cover"><div className="cover-border"><span className="eyebrow">{back?'A LITTLE COMFORT FROM THE HILLS':'THE MENU'}</span><img src={brand.logo} alt="" width="88" height="88" draggable={false}/><h3>{back?<>See you<br/><em>soon.</em></>:<>Momos<br/>& <em>Stuff.</em></>}</h3><div className="cover-rule"/><p>{back?'Good food. Good company. Very good mood.':'The Little Book of Cravings'}</p><span className="eyebrow">{back?'@MOMOSANDSTUFF_':'SIKKIM ROOTS · LITTLE JOYS'}</span><Steam/></div></div>;}
export default function MenuPage({index}:{index:number}){
 if(index<0||index===menuPageCount-1)return <Cover back={index>=0}/>;
 const category=index>=2&&index<menuPageCount-2?categories[Math.floor((index-2)/2)]:undefined;
 const imageId=index===1?'momos':index===menuPageCount-2?'friends':category?.photo;
 const isPhoto=index===1||index===menuPageCount-2||index>=2&&index%2===0;
 return <article className={`paper-page ${isPhoto?'photo-page':index===0?'index-page':'dish-page'}`}><div className="page-top"><span>MOMOS & STUFF</span><span>THE LITTLE BOOK</span></div>
  {index===0?<><span className="eyebrow">WELCOME TO THE GOOD STUFF</span><h3>A little book.<br/><em>A lot to love.</em></h3><p>Follow your cravings.<br/>Take your time.</p><ol className="book-index">{categories.map((c,i)=><li key={c.title}><span>{c.title}</span><span>{String(3+i*2).padStart(2,'0')}</span></li>)}</ol><p className="menu-note">A selection from our Instagram.<br/>Ask us for the full menu and today’s prices.</p></>:
   isPhoto?<><FoodPhoto photo={photo(imageId!)}/><div className="page-photo-title"><span className="eyebrow">{category?`CHAPTER ${String(Math.floor((index-2)/2)+1).padStart(2,'0')}`:'LITTLE MOMENTS, BIG COMFORT'}</span><h3>{category?.title||(index===1?'Your next little joy.':'Better together.')}</h3><p>{category?.subtitle||(index===1?'Good food. Mountain mood. Momo love.':'Bring your people. Make a moment of it.')}</p></div></>:
   <><span className="eyebrow">SOMETHING GOOD AWAITS</span><h3>{category!.title}</h3><div className="menu-items">{category!.items.map((dish,i)=><div key={dish.name}><div className="dish-heading"><h4><span className="dish-number">0{i+1}</span>{dish.name}</h4><span>✧</span></div><p>{dish.description}</p>{dish.price&&<strong>{dish.price}</strong>}</div>)}</div><p className="menu-note">A taste of our Instagram discoveries.<br/>Ask us for today’s availability & prices.</p></>}
  <div className="page-bottom"><span>A little comfort from the hills.</span><span>{String(index+1).padStart(2,'0')}</span></div>
 </article>;
}
