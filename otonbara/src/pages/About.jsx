import '../style.css'
import CV from '../assets/CV2.pdf'
import { FaDownload } from 'react-icons/fa'
import GitHubIMG from '../assets/github-142-svgrepo-com.svg'
import LinkedInIMG from '../assets/linkedin-161-svgrepo-com.svg'
import XIMG from '../assets/X_logo_2023.svg'
import AWSCertIMG from '../assets/aws-cloud-practitioner.svg'
import { FaLaptop } from 'react-icons/fa'
import { FaFigma } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaFirefoxBrowser } from 'react-icons/fa'
import { FaChartLine } from 'react-icons/fa'
import { FaMobile } from 'react-icons/fa'
import { FaDoorOpen } from 'react-icons/fa'
import HTMLImg from '../assets/html5-01-svgrepo-com.svg';
import CSSImg from '../assets/css3-01-svgrepo-com.svg';
import JSImg from '../assets/javascript-155-svgrepo-com.svg';
import TailwindImg from '../assets/tailwind-svgrepo-com.svg';
import BootstrapImg from '../assets/bootstrap-fill-svgrepo-com.svg';
import ReactImg from '../assets/react-svgrepo-com.svg';
import PythonImg from '../assets/python-127-svgrepo-com.svg';
import DjangoImg from '../assets/django-svgrepo-com.svg';
import FirebaseImg from '../assets/firebase-svgrepo-com.svg';
import GitImg from '../assets/git-svgrepo-com.svg';
import GitHubImg from '../assets/github-142-svgrepo-com.svg';
import AWSImg from '../assets/aws-svgrepo-com.svg';

const About = () => {
    return (
        <>
            <section id='about' className='about'>
                <div className='about-content'>
                    <h2>GET TO KNOW ME</h2>
                    <p>
                        Oh, so you made it this far, that means you are impressed by what you have seen so far.
                        Well, I am glad you are. I am Otonbara Alfred Okolai a web developer based in Lagos, Nigeria
                        (I am also a civil engineer if you need professional advice on that, okay!😉), I have suitable Knowledge
                        on front-end development, and cloud computing. I aspire to be really good at my craft and also clairvoyant to
                        bring your wildest ideas and imaginations into reality. And I am probably also the chillest guy you will ever meet
                        or work with. So grab a coffee, popcorn, beer, or whatever you like and let us get to exploring more of this page together......
                    </p>
                </div>
                <div className="resume">
                    <a href={CV} target='blank'>GRAB MY CV <FaDownload/></a>
                </div>
                <div className="social-links">
                    <ul>
                        <li className='social-link'><a href="https://www.linkedin.com/in/otonbaraokolai" target='blank'><img src={LinkedInIMG} alt="LinkedIn"/></a></li>
                        <li className='social-link'><a href="https://github.com/Otonbara" target='blank'><img src={GitHubIMG} alt="GitHub"/></a></li>
                        <li className='social-link'><a href="https://twitter.com/otonbarao" target='blank'><img src={XIMG} alt="X"/></a></li>
                        <li className='social-link'><a href="https://www.credly.com/badges/8799d5ec-e18e-46b1-884f-bed76dbaa227/public_url" target='blank'><img src={AWSCertIMG} alt="AWS Certificate"/></a></li>
                    </ul>
                </div>
            </section>
            
            {/* SERVICES */}
            <section id='services' className='services'>
                <h2>SNEAK PEEK OF WHAT I OFFER</h2>
                <div className="service-cards">
                    <div className="service-card">
                        <h3>RESPONSIVE WEB DESIGN <FaLaptop/></h3>
                        <p>Creating websites that work on all devices and screen sizes.</p>
                    </div>
                    <div className="service-card">
                        <h3>USER INTERFACE (UI) DESIGN <FaFigma/></h3>
                        <p>Creating websites that are visually appealing and easy to use.</p>
                    </div>
                    <div className="service-card">
                        <h3>FRONT-END FRAMEWORK <FaReact/></h3>
                        <p>Utilizing frameworks like React and Next.</p>
                    </div>
                    <div className="service-card">
                        <h3>CROSS-BROWSER COMPATIBILITY <FaFirefoxBrowser/></h3>
                        <p>Ensuring websites work on all browsers.</p>
                    </div>
                    <div className="service-card">
                        <h3>PERFORMANCE OPTIMIZATION <FaChartLine/></h3>
                        <p>Optimizing websites for speed and performance.</p>
                    </div>
                    <div className="service-card">
                        <h3>INTERACTIVE ELEMENTS <FaMobile/></h3>
                        <p>Creating interactive elements like forms and animations using JavaScript.</p>
                    </div>
                    <div className="service-card">
                        <h3>ACCESSIBILITY <FaDoorOpen/></h3>
                        <p>Ensuring websites are accessible to all users.</p>
                    </div>
                    <div className="service-card">
                        <h3>CODE REFACTORING AND MAINTENANCE <FaCode/></h3>
                        <p>Refactoring and maintaining code to keep it clean and efficient.</p>
                    </div>
                </div>
            </section>

            {/* TECH STACK */}
            <section id='tech-stack' className='tech-stack'>
                <h2>TECH STACK</h2>
                <div className="tech-stack-cards">
                    <div className="tech-stack-card">
                        <h3>HTML</h3>
                        <div className="tech-stack-card-image">
                            <img src={HTMLImg} alt="HTML" />
                        </div>
                    </div>
                    <div className="tech-stack-card">
                        <h3>CSS</h3>
                        <div className="tech-stack-card-image">
                            <img src={CSSImg} alt="CSS" />
                        </div>
                    </div>
                    <div className="tech-stack-card">
                        <h3>JAVASCRIPT</h3>
                        <div className="tech-stack-card-image">
                            <img src={JSImg} alt="JS" />
                        </div>
                    </div>
                    <div className="tech-stack-card">
                        <h3>REACT</h3>
                        <div className="tech-stack-card-image">
                            <img src={ReactImg} alt="React" />
                        </div>
                    </div>
                    <div className="tech-stack-card">
                        <h3>PYTHON</h3>
                        <div className="tech-stack-card-image">
                            <img src={PythonImg} alt="Python" />
                        </div>
                    </div>
                    <div className="tech-stack-card">
                        <h3>DJANGO</h3>
                        <div className="tech-stack-card-image">
                            <img src={DjangoImg} alt="Django" />
                        </div>
                    </div>
                    <div className="tech-stack-card">
                        <h3>TAILWIND CSS</h3>
                        <div className="tech-stack-card-image">
                            <img src={TailwindImg} alt="Tailwind" />
                        </div>
                    </div>
                    <div className="tech-stack-card">
                        <h3>BOOTSTRAP CSS</h3>
                        <div className="tech-stack-card-image">
                            <img src={BootstrapImg} alt="Bootstrap" />
                        </div>
                    </div>
                    <div className="tech-stack-card">
                        <h3>GIT</h3>
                        <div className="tech-stack-card-image">
                            <img src={GitImg} alt="Git" />
                        </div>
                    </div>
                    <div className="tech-stack-card">
                        <h3>GITHUB</h3>
                        <div className="tech-stack-card-image">
                            <img src={GitHubImg} alt="GitHub" />
                        </div>
                    </div>
                    <div className="tech-stack-card">
                        <h3>AWS</h3>
                        <div className="tech-stack-card-image">
                            <img src={AWSImg} alt="AWS" />
                        </div>
                    </div>
                    <div className="tech-stack-card">
                        <h3>FIREBASE</h3>
                        <div className="tech-stack-card-image">
                            <img src={FirebaseImg} alt="Firebase" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;