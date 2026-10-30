export default function MountainLayers({variant='hero'}:{variant?:'hero'|'story'|'visit'}){
 return <div className={`mountain-layers mountains-${variant}`} aria-hidden="true">
  <svg className="mountain-plane plane-far" data-parallax data-distance={variant==='hero'?85:variant==='visit'?18:70} data-scrub="1.2" viewBox="0 0 1600 500" preserveAspectRatio="none"><path d="M0 290 130 170 260 220 420 60 570 210 740 130 910 240 1100 95 1290 230 1450 125 1600 200V500H0Z"/></svg>
  <svg className="mountain-plane plane-mid" data-parallax data-distance={variant==='hero'?170:variant==='visit'?-28:-110} data-scrub="1" viewBox="0 0 1600 500" preserveAspectRatio="none"><path d="M0 330Q130 150 300 280L510 190 690 325Q850 145 1040 260L1250 190 1450 290 1600 220V500H0Z"/></svg>
  <svg className="mountain-plane plane-near" data-parallax data-distance={variant==='hero'?270:variant==='visit'?40:150} data-scrub=".8" viewBox="0 0 1600 500" preserveAspectRatio="none"><path d="M0 380Q180 210 390 350T780 315Q980 205 1180 345T1600 310V500H0Z"/></svg>
 </div>;
}

