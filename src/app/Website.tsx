import {MotionConfig} from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroParallax from '../components/HeroParallax';
import SignatureShowcase from '../components/SignatureShowcase';
import SikkimStory from '../components/SikkimStory';
import MenuBook from '../components/menu/MenuBook';
import Gallery from '../components/Gallery';
import Manifesto from '../components/Manifesto';
import VisitSection from '../components/VisitSection';
import Arrival from '../components/Arrival';
import {SectionLabel} from '../components/ui';
import {usePageMotion} from '../hooks/usePageMotion';
export default function Website(){const root=usePageMotion();return <MotionConfig reducedMotion="user"><div ref={root} data-engine="native"><a className="skip-link" href="#main">Skip to content</a><div id="header-sentinel"/><Header/><Arrival/><main id="main">
 <HeroParallax/>
 <div className="signature-strip" data-ambient tabIndex={0} aria-label="Momos. Good mood. A little bit of Sikkim."><p className="sr-only">Momos. Good mood. A little bit of Sikkim.</p><div className="marquee ambient" aria-hidden="true">{[0,1].map(n=><div key={n}>MOMOS <span>✧</span> GOOD MOOD <span>✧</span> A LITTLE BIT OF SIKKIM <span>✧</span> LITTLE PARCELS, BIG COMFORT <span>✧</span></div>)}</div></div>
 <SignatureShowcase/><SikkimStory/>
 <section id="menu" className="menu-section section-pad" data-scene="menu" data-ambient><div className="container menu-layout"><div className="menu-intro" data-reveal="lines"><SectionLabel>03 / THE LITTLE BOOK</SectionLabel><h2>Turn a page.<br/>Find your<br/>{' '}<em>favourite.</em></h2><p>A little book of good things.<br/>Take your time. Follow your cravings.</p><svg className="menu-drawn-arrow" viewBox="0 0 220 100" aria-hidden="true"><path data-draw pathLength="1" d="M10 25C120-30 200 14 151 49s-35-5-6-10 38 16 48 32m-25-10 26 13 3-27"/></svg></div><MenuBook/></div></section>
 <Gallery/><Manifesto/><VisitSection/>
 </main><Footer/></div></MotionConfig>;}
