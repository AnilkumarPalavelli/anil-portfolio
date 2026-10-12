import React,{useState,useEffect} from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Menu,
  X,
  Play,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Camera,
  Code2,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  MousePointer2,
  Volume2
} from 'lucide-react';
import {createRoot} from 'react-dom/client';
import {motion,AnimatePresence} from 'framer-motion';
import './style.css';
const sections=['Home','About','Skills','Experience','Projects','Education','Contact'];
const skills=[['Py','Python','Programming'],['CV','OpenCV','Vision'],['ML','Machine Learning','AI'],['DL','Deep Learning','AI'],['AI','Generative AI','AI'],['NP','NumPy','Data'],['PD','Pandas','Data'],['IQ','Image Quality','Vision'],['OD','Object Detection','Vision'],['TR','Object Tracking','Vision'],['FF','FFmpeg','Tools'],['AZ','Azure','Cloud'],['DB','Cosmos DB','Data'],['C+','C++','Programming'],['JS','JavaScript','Programming'],['HT','HTML / CSS','Frontend'],['RC','React','Frontend'],['OP','Orbbec SDK','Vision'],['GT','Git','Tools'],['AW','AWS','Cloud'],['SQL','SQL','Data'],['TK','Tkinter','Tools'],['TF','TensorFlow','AI'],['SK','scikit-image','Vision']];
const jobs=[{company:'Walmart / Sam’s Club',role:'Computer Vision / Camera Team',date:'Current',detail:'Camera deployment validation, image quality analysis, field-of-view optimization and real-world retail vision systems.',index:'01'},{company:'Silver Bay Consulting',role:'Software Engineer',date:'Feb – Sep 2024',detail:'Built retail video analytics solutions involving object detection, tracking, OCR and data pipelines.',index:'02'},{company:'Wipro',role:'Software Engineer',date:'Feb – Jul 2022',detail:'Worked on Java and Spring Boot microservices, REST APIs, databases and cloud deployments.',index:'03'}];
const projects=[{num:'01',category:'COMPUTER VISION',title:'Object Detection & Tracking',desc:'Retail-focused detection and tracking pipelines for video analytics.',tags:['Python','OpenCV','Deep Learning'],art:'detection'},{num:'02',category:'IMAGE PROCESSING',title:'Camera Image Quality Analysis',desc:'Automated camera quality assessment using no-reference and semi-reference metrics.',tags:['Python','OpenCV','NIQE'],art:'camera'},{num:'03',category:'DEPTH VISION',title:'Depth Camera Data Collection',desc:'3D depth capture and validation workflows using Orbbec cameras.',tags:['C++','Orbbec SDK','Python'],art:'depth'},{num:'04',category:'WEB DEVELOPMENT',title:'Office Parking Reservation',desc:'A role-based parking slot reservation application with admin and employee workflows.',tags:['ASP.NET','C#','SQL'],art:'parking'}];
const fade={initial:{opacity:0,y:22},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.1},transition:{duration:.65}};
function Header(){const[open,setOpen]=useState(false);return <header className="header"><a className="logo" href="#home" onClick={()=>setOpen(false)}>AK<span className="logo-dot">.</span><span className="logo-name">Anil Kumar</span></a><nav className={open?'nav nav-open':'nav'}>{sections.map(s=><a key={s} href={'#'+s.toLowerCase()} onClick={()=>setOpen(false)}>{s}</a>)}</nav><a href="#contact" className="header-contact">Let's connect <ArrowUpRight size={15}/></a><button className="mobile-toggle" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></header>}
function App(){const[flipped,setFlipped]=useState(false),[intro,setIntro]=useState(false),[slide,setSlide]=useState(0),[filter,setFilter]=useState('All');const categories=['All','Vision','AI','Data','Programming','Frontend','Cloud','Tools'];const filtered=filter==='All'?skills:skills.filter(s=>s[2]===filter);return <><Header/><main><section className="hero" id="home"><div className="hero-copy"><div className="eyebrow"><span className="live-dot"/> AVAILABLE FOR OPPORTUNITIES</div><h1>Hi, I'm<br/><span>Anil Kumar<span className="blue-dot">.</span></span></h1><p className="hero-role">COMPUTER VISION <span>&</span> AI ENGINEER</p><p className="hero-desc">I build intelligent systems that see, understand, and solve real-world problems — from computer vision to scalable software.</p><div className="hero-buttons"><button className="btn btn-white" onClick={()=>setIntro(true)}><Play size={15} fill="currentColor"/> My introduction</button><a className="btn btn-outline" href="#projects">Explore my work <ArrowDown size={17}/></a></div><div className="hero-social"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn (replace with your profile)"><Linkedin/></a><a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub (replace with your profile)"><Github/></a><a href="#contact" aria-label="Contact"><Mail/></a></div></div><div className="hero-visual"><div className="hero-rings"/><div className="photo-frame"><img src="/anil-portrait.jpg" alt="Anil wearing a blue suit"/></div><div className="photo-label">THE HUMAN BEHIND THE CODE <span>↗</span></div><div className="hand-note">Turning real-world<br/>problems into<br/><b>intelligent solutions.</b><span>↙</span></div></div><div className="hero-side"><span>01 — INTRO</span><span>SCROLL TO EXPLORE ↓</span></div></section>
<section className="about section-dark" id="about"><motion.div {...fade} className="section-heading"><span className="kicker">01 / A LITTLE ABOUT ME</span><h2>More than just <em>code.</em></h2></motion.div><div className="about-grid"><motion.p {...fade} className="about-statement">Curious by nature.<br/>Engineer by profession.<br/><span>Problem solver by choice.</span></motion.p><motion.div {...fade} className="about-right"><p>I'm a software engineer specializing in computer vision, image quality, video analytics and AI-driven applications. I enjoy taking complex technical challenges and turning them into practical solutions.</p><p>My work spans camera deployment and validation, object detection and tracking, data processing and backend engineering.</p><div className="location"><MapPin size={16}/> Based in Dallas, Texas</div></motion.div></div><div className="id-area"><div className="id-intro"><span className="kicker">THE DIGITAL ID</span><h3>Nice to meet you.<br/><em>Flip the card.</em></h3><p>Tap or click the card to discover what's on the other side.</p><MousePointer2 size={25}/></div><button className={'flip-scene '+(flipped?'is-flipped':'')} onClick={()=>setFlipped(!flipped)} aria-label="Flip profile card"><div className="flip-card"><div className="id-front"><div className="id-top"><span>AK / PROFILE</span><span>↗ 001</span></div><div className="id-picture"><img src="/anil-portrait.jpg" alt="Anil profile"/></div><h4>Anil Kumar</h4><p>Computer Vision & AI Engineer</p><div className="id-bottom"><span>LOCATION<br/><b>Dallas, TX</b></span><span>STATUS<br/><b>Building the future</b></span></div><span className="id-flip">↻ TAP TO FLIP</span></div><div className="id-back"><span>AK / BEHIND THE SCENES</span><h4>What drives me?</h4><p>Making technology useful in the real world.</p><div className="id-back-tags"><span>Computer Vision</span><span>AI / ML</span><span>Software Engineering</span><span>Always Learning</span></div><span className="id-flip">↻ TAP TO FLIP BACK</span></div></div></button></div></section>
<section className="skills-section" id="skills"><div className="skills-intro"><span className="kicker">02 / MY TOOLBOX</span><h2>Periodic<br/>Table of<br/><em>Skills.</em></h2><p>A different way to explore the technologies and tools I work with.</p><div className="skills-hint">↗ Select a category to explore</div></div><div className="skills-main"><div className="skill-filters">{categories.map(c=><button key={c} className={filter===c?'active':''} onClick={()=>setFilter(c)}>{c}</button>)}</div><div className="periodic-grid">{filtered.map((s,i)=><motion.div layout key={s[0]} className="element" tabIndex={0} title={s[1]+' · '+s[2]} whileHover={{y:-5,scale:1.04}}><span className="element-num">{String(skills.indexOf(s)+1).padStart(2,'0')}</span><strong>{s[0]}</strong><span className="element-name">{s[1]}</span><span className="element-category">{s[2]}</span></motion.div>)}</div></div></section>
<section className="experience section-dark" id="experience"><div className="section-heading"><span className="kicker">03 / MY JOURNEY</span><h2>Experience <em>timeline.</em></h2><p>Every chapter has shaped how I think and build.</p></div><div className="timeline"><div className="timeline-line"/>{jobs.map((j,i)=><motion.div {...fade} key={j.company} className="job"><div className="job-dot"/><div className="job-meta"><span>{j.index} / {j.date}</span></div><div className="job-card"><div className="job-head"><h3>{j.company}</h3><ArrowUpRight size={20}/></div><div className="job-role">{j.role}</div><p>{j.detail}</p></div></motion.div>)}</div></section>
<section className="projects-section" id="projects"><div className="projects-header"><div><span className="kicker">04 / FEATURED WORK</span><h2>Real-world<br/><em>impact.</em></h2></div><div className="project-controls"><button onClick={()=>setSlide(Math.max(0,slide-1))} disabled={slide===0} aria-label="Previous projects"><ChevronLeft/></button><button onClick={()=>setSlide(Math.min(projects.length-1,slide+1))} disabled={slide===projects.length-1} aria-label="Next projects"><ChevronRight/></button></div></div><div className="projects-viewport"><div className="projects-track" style={{transform:`translateX(-${slide*322}px)`}}>{projects.map(p=><article className="project-card" key={p.num}><div className={'project-art '+p.art}><span className="project-art-index">{p.num} / PROJECT</span>{p.art==='detection'?<><div className="target t1">PERSON <span>98%</span></div><div className="target t2">OBJECT <span>94%</span></div><div className="target t3">TRACKING</div></>:p.art==='camera'?<><Camera size={110} strokeWidth={.8}/><span className="art-overlay">FOCUS · SHARPNESS · QUALITY</span></>:p.art==='depth'?<><div className="depth-cloud">◌ ◌ ◌<br/>◌ ◉ ◌<br/>◌ ◌ ◌</div><span className="art-overlay">DEPTH / 3D POINT CLOUD</span></>:<><div className="parking-lines">P&nbsp; P&nbsp; P</div><span className="art-overlay">RESERVE · MANAGE · PARK</span></>}</div><div className="project-body"><span className="project-category">{p.category}</span><h3>{p.title}</h3><p>{p.desc}</p><div className="project-tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div></article>)}</div></div><p className="project-footnote">Selected work and technical projects · Detailed case studies can be added later.</p></section>
<section className="education section-dark" id="education"><div><span className="kicker">05 / ACADEMIC FOUNDATION</span><h2>Always<br/><em>learning.</em></h2></div><div className="education-cards"><div className="edu-card"><GraduationCap/><span>MASTER'S DEGREE</span><h3>Applied Computer Science</h3><p>Northwest Missouri State University</p></div><div className="edu-card"><GraduationCap/><span>BACHELOR'S DEGREE</span><h3>Electrical & Electronics Engineering</h3><p>Engineering foundation</p></div><div className="edu-card"><GraduationCap/><span>CONTINUING EDUCATION</span><h3>Artificial Intelligence</h3><p>Ongoing doctoral studies</p></div></div></section>

<section className="contact-section" id="contact">
  <span className="kicker">06 / LET'S CONNECT</span>

  <h2>
    Have an idea?
    <br />
    <em>Let's make it real.</em>
  </h2>

  <p>
    Open to meaningful conversations, interesting projects,
    and opportunities in Computer Vision, AI, and Software Engineering.
  </p>

  <a
    href="palavellianilkumar42@gmail.com"
    className="contact-cta"
  >
    Say hello <ArrowUpRight size={26} />
  </a>

  <div className="contact-socials">
    <a
      href="https://github.com/AnilkumarPalavelli"
      target="_blank"
      rel="noopener noreferrer"
      className="github-link"
      aria-label="Visit Anil's GitHub profile"
    >
      <Github size={22} />
      <span>GitHub</span>
      <ArrowUpRight size={16} />
    </a>

    <a
      href="https://www.linkedin.com/in/anilpalavelli/"
      target="_blank"
      rel="noopener noreferrer"
      className="github-link"
      aria-label="Visit Anil's LinkedIn profile"
    >
      <Linkedin size={22} />
      <span>LinkedIn</span>
      <ArrowUpRight size={16} />
    </a>
  </div>

  <div className="contact-note">
    Let's connect and build something meaningful together.
  </div>
</section>

</main>

<footer>
  <span>© {new Date().getFullYear()} Anil Kumar</span>
  <span>DESIGNED TO BE DIFFERENT.</span>
  <a href="#home">BACK TO TOP ↑</a>
</footer>

<AnimatePresence>
  {intro && (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIntro(false)}
    >
      <motion.div
        className="intro-modal"
        initial={{ scale: 0.92, y: 25 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.92, y: 25 }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Introduction"
      >
        <button
          className="modal-close"
          onClick={() => setIntro(false)}
          aria-label="Close"
        >
          <X />
        </button>

        <span className="kicker">A QUICK INTRODUCTION</span>

        <h2>
          Hi, I'm <em>Anil.</em>
        </h2>

        <p>
          I'm a Computer Vision and AI Engineer who loves building
          practical technology. From improving camera systems to
          developing intelligent video analytics, I focus on
          creating solutions that make a difference.
        </p>

        <div className="intro-status">
          <Volume2 size={16} />
          Animated introduction · Video can be added later
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
</>
}

createRoot(document.getElementById("root")).render(<App />);

