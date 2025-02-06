import './Hero.css';
import HeroImg from '../assets/MAIN_SHITnobgBW.png';
import HTMLImg from '../assets/html5-01-svgrepo-com.svg';
import CSSImg from '../assets/css3-01-svgrepo-com.svg';
import JSImg from '../assets/javascript-155-svgrepo-com.svg';
import TailwindImg from '../assets/tailwind-svgrepo-com.svg';
import BootstrapImg from '../assets/bootstrap-fill-svgrepo-com.svg';
import ReactImg from '../assets/react-svgrepo-com.svg';
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

const Hero = () => {
    const handleScroll = () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className='hero'>
            <nav className='navbar'>
                <div className='logo'>OTONBARA.</div>
                <ul className='nav-links'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Projects</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
                <button className='email-btn'>Email Me</button>
            </nav>

            <div className='hero-content'>
                <div className='text-overlay'>
                    <h1 className='title'>
                        <span className='outline'>WEB DEVELOPER</span>
                    </h1>
                    <p>based in Lagos, Nigeria.</p>
                </div>

                <Marquee className='marquee-wrapper' id='marquee-wrapper' gradient={false} speed={50} pauseOnHover={true}>
                    <img src={HTMLImg} alt="HTML" className='marquee-img' />
                    <img src={CSSImg} alt="CSS" className='marquee-img' />
                    <img src={JSImg} alt="JS" className='marquee-img' />
                    <img src={TailwindImg} alt="Tailwind" className='marquee-img' />
                    <img src={BootstrapImg} alt="Bootstrap" className='marquee-img' />
                    <img src={ReactImg} alt="React" className='marquee-img' />
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

                <div className='image-container'>
                    <div className='gradient'></div>
                    <img src={HeroImg} alt="Otonbara" className='hero-img'/>
                </div>

                <div className='button'>
                    <button className='btn filled' onClick={handleScroll}>
                        Learn More
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            fill="currentColor" 
                            className="bi bi-arrow-down" 
                            viewBox="0 0 16 16">
                                <path 
                                    fillRule="evenodd" 
                                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;