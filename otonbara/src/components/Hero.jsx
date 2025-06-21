import './Hero.css';
import CV from '../assets/TECH RESUME.pdf'
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import { useState } from 'react';
import HeroImg from '../assets/MAIN_SHITnobgBW.png';
import HTMLImg from '../assets/html5-01-svgrepo-com.svg';
import CSSImg from '../assets/css3-01-svgrepo-com.svg';
import JSImg from '../assets/javascript-155-svgrepo-com.svg';
import TSImg from '../assets/typescript-svgrepo-com.svg';
import TailwindImg from '../assets/tailwind-svgrepo-com.svg';
import BootstrapImg from '../assets/bootstrap-fill-svgrepo-com.svg';
import ReactImg from '../assets/react-svgrepo-com.svg';
import NextImg from '../assets/nextjs-fill-svgrepo-com.svg';
import PythonImg from '../assets/python-127-svgrepo-com.svg';
import DjangoImg from '../assets/django-svgrepo-com.svg';
import NodeImg from '../assets/nodejs01-svgrepo-com.svg';
import GitImg from '../assets/git-svgrepo-com.svg';
import GitHubImg from '../assets/github-142-svgrepo-com.svg';
import SlackImg from '../assets/slack-svgrepo-com.svg';
import AWSImg from '../assets/aws-svgrepo-com.svg';
import KubernetesImg from '../assets/kubernetes-svgrepo-com.svg';
import DockerImg from '../assets/docker-svgrepo-com.svg';
import VSCodeImg from '../assets/vscode-fill-svgrepo-com.svg';
import SketchUpImg from '../assets/sketchup-svgrepo-com.svg';
import AutoDeskImg from '../assets/autodesk-svgrepo-com.svg';
import Marquee from 'react-fast-marquee';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const controls = useAnimation();
    const {ref, inView} = useInView({ triggerOnce: true});

    if (inView) {
        controls.start("visible");
    }

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <section className='hero'>
            <nav className='navbar'>
                <div className='logo'>OTONBARA.</div>
                <div className="hamburger" onClick={toggleNav}>
                    <FaBars/>
                </div>
                {isNavOpen && (
                    <div className="close-btn" onClick={toggleNav}>
                        <FaTimes/>
                    </div>
                )}
                <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
                    <li><a href='#' onClick={toggleNav}>HOME</a></li>
                    <li><a href='#about' onClick={toggleNav}>ABOUT</a></li>
                    <li><a href='#projects' onClick={toggleNav}>PROJECTS</a></li>
                    <li><a href='#contact' onClick={toggleNav}>CONTACT ME</a></li>
                    {/* <li className="close-btn" onClick={toggleNav}><FaTimes/></li> */}
                    <li className='email-btn-container'>
                        <a href="mailto:alfredokolai@gmail.com">
                            <button className='email-btn'>EMAIL ME</button>
                        </a>
                    </li>
                </ul>
            </nav>

            <motion.div 
                className='hero-content'
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 50},
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 }}
                }}
            >
                <div className='text-overlay'>
                    <h1 className='title'>
                        <span className='outline'>OKOLAI OTONBARA ALFRED</span> <br />
                        <span>WEB DEVELOPER</span>
                    </h1>
                    <p>based in Lagos, Nigeria.</p>
                </div>

                <Marquee className='marquee-wrapper marquee-content' id='marquee-wrapper' gradient={false} speed={50} pauseOnHover={true}>
                    <img src={HTMLImg} alt="HTML" className='marquee-img' />
                    <img src={CSSImg} alt="CSS" className='marquee-img' />
                    <img src={JSImg} alt="JavaScript" className='marquee-img' />
                    <img src={TSImg} alt="TypeScript" className='marquee-img' />
                    <img src={TailwindImg} alt="Tailwind" className='marquee-img' />
                    <img src={BootstrapImg} alt="Bootstrap" className='marquee-img' />
                    <img src={ReactImg} alt="React" className='marquee-img' />
                    <img src={NextImg} alt="Next" className='marquee-img' />
                    <img src={PythonImg} alt="Python" className='marquee-img' />
                    <img src={NodeImg} alt="NodeJS" className='marquee-img' />
                    <img src={DjangoImg} alt="Django" className='marquee-img' />
                    <img src={GitImg} alt="Git" className='marquee-img' />
                    <img src={GitHubImg} alt="GitHub" className='marquee-img' />
                    <img src={SlackImg} alt="Slack" className='marquee-img' />
                    <img src={AWSImg} alt="AWS" className='marquee-img' />
                    <img src={KubernetesImg} alt="Kubernetes" className='marquee-img' />
                    <img src={DockerImg} alt="Docker" className='marquee-img' />
                    <img src={VSCodeImg} alt="VSCode" className='marquee-img' />
                    <img src={SketchUpImg} alt="SketchUp" className='marquee-img' />
                    <img src={AutoDeskImg} alt="AutoDesk" className='marquee-img' />
                </Marquee>  

                <motion.div 
                    className='image-container'
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 }}
                    }}
                >
                    <div className='gradient'></div>
                    <img src={HeroImg} alt="Otonbara" className='hero-img'/>
                </motion.div>

                <div className="resume">
                    <a href={CV} target='blank'>GRAB MY CV <FaDownload/></a>
                </div>

            </motion.div>
        </section>
    );
};

export default Hero;
