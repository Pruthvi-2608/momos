import {ArrowDown,ArrowUpRight} from 'lucide-react';
import {photo} from '../data/content';
import {ButtonLink,FoodPhoto,Star,Steam} from './ui';
import MountainLayers from './MountainLayers';
export default function HeroParallax(){return <section id="home" className="hero cinematic-hero" data-scene="hero" data-ambient>
 <div className="hero-sky" data-parallax data-distance="25" aria-hidden="true"/>
 <div className="hero-cloud cloud-one ambient" aria-hidden="true"/><div className="hero-cloud cloud-two ambient" aria-hidden="true"/>
 <MountainLayers/>
 <div className="container hero-grid">
  <div className="hero-text" data-parallax data-distance="-35"><div className="eyebrow" data-eyebrow><span className="little-dot"/> SIKKIM-INSPIRED · MOMO-LOVING</div>
   <h1 aria-label="A little cloud of comfort."><span className="hero-line"><span>A little</span></span><span className="hero-line"><span>cloud of</span></span><span className="hero-line"><span><em>comfort.</em></span></span></h1>
   <p className="hero-copy">Good food. Mountain mood. Momo love.<br/>A cozy corner for all your little cravings.</p>
   <div className="hero-actions"><ButtonLink href="#menu">Explore our menu</ButtonLink><a className="story-link" href="#story">Our little story <ArrowUpRight size={18}/></a></div>
   <a href="#featured" className="scroll-cue"><span className="ambient"><ArrowDown size={15}/></span><span>SCROLL TO DISCOVER</span><span className="scroll-track" aria-hidden="true"/></a>
  </div>
  <div className="hero-visual" data-parallax data-distance="-75" data-scale="1.05"><div className="hero-arrival"><div className="food-halo" aria-hidden="true"/><div className="hero-photo-frame"><FoodPhoto photo={photo('momos')} priority/></div><div className="hero-caption"><span>FROM THE HILLS TO YOUR PLATE</span><span>A little comfort. A lot of joy.</span></div><div className="joy-sticker ambient">a little<br/><em>bite of joy</em><span>♡</span></div><Star className="hero-star"/><Steam/><span className="photo-note">made for momo moments ↗</span></div></div>
 </div><span className="hero-location">SIKKIM ROOTS / SILVASSA & VAPI</span>
 </section>;}
