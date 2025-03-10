import '../style.css'
import { FaLaptop, FaFigma, FaCode, FaReact, FaFirefoxBrowser, FaChartLine, FaMobile } from 'react-icons/fa'
import GitHubIMG from '../assets/github-142-svgrepo-com.svg'
import LinkedInIMG from '../assets/linkedin-161-svgrepo-com.svg'
import AWSCertIMG from '../assets/aws-cloud-practitioner.svg'
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
import BehanceIMG from '../assets/behance-svgrepo-com.svg';
import TSImg from '../assets/typescript-svgrepo-com.svg'
import NextImg from '../assets/nextjs-fill-svgrepo-com.svg'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const aboutControls = useAnimation();
    const experienceControls = useAnimation();
    const servicesControls = useAnimation();
    const techStackControls = useAnimation();

    const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
    const { ref: experienceRef, inView: experienceInView } = useInView({ triggerOnce: true });
    const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true });
    const { ref: techStackRef, inView: techStackInView } = useInView({ triggerOnce: true });

    if (aboutInView) {
        aboutControls.start("visible");
    }

    if (experienceInView) {
        experienceControls.start("visible");
    }

    if (servicesInView) {
        servicesControls.start("visible");
    }

    if (techStackInView) {
        techStackControls.start("visible");
    }

    return (
        <>
            <motion.section 
                id='about' 
                className='about'
                ref={aboutRef}
                initial="hidden"
                animate={aboutControls}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
            >
                <div className='about-content'>
                    <h2>GET TO KNOW ME</h2>
                    <div className="p-text">
                        <p>
                            I am Otonbara Alfred Okolai a web developer based in Lagos, Nigeria, I have suitable Knowledge
                            on front-end development, and cloud computing. I aspire to be really good at my craft and also clairvoyant to
                            bring your wildest ideas and imaginations into reality.
                        </p>
                    </div>
                </div>

                <div className="social-links">
                    <ul>
                        <li className='social-link'><a href="https://www.linkedin.com/in/otonbaraokolai" target='blank'><img src={LinkedInIMG} alt="LinkedIn"/></a></li>
                        <li className='social-link'><a href="https://github.com/Otonbara" target='blank'><img src={GitHubIMG} alt="GitHub"/></a></li>
                        <li className='social-link'><a href="https://www.behance.net/otonbaraokolai" target='blank'><img src={BehanceIMG} alt="Behance"/></a></li>
                        <li className='social-link'><a href="https://www.credly.com/badges/8799d5ec-e18e-46b1-884f-bed76dbaa227/public_url" target='blank'><img src={AWSCertIMG} alt="AWS Certificate"/></a></li>
                    </ul>
                </div>
            </motion.section>

            <motion.section 
                id='experience' 
                className='experience'
                ref={experienceRef}
                initial="hidden"
                animate={experienceControls}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                }}
            >
                <h2>WORK EXPERIENCE</h2>
                <div className="experience-cards">
                    <div className="experience-card">
                        <h3>FRONT-END DEVELOPER (VOLUNTEERING) - GREENSTAND</h3>
                        <p>Oct 2024 - Dec 2024</p>
                        <p>
                            I assisted with the development of their treetracker website,
                            by refactoring some codes.
                        </p>
                    </div>
                </div>
            </motion.section>
            
            <motion.section 
                id='services' 
                className='services'
                ref={servicesRef}
                initial="hidden"
                animate={servicesControls}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
            >
                <h2>WHAT I OFFER:</h2>
                <div className="service-cards">
                    {[
                        { title: 'RESPONSIVE WEB DESIGN', icon: <FaLaptop/>, description: 'Creating websites that work on all devices and screen sizes.' },
                        { title: 'USER INTERFACE (UI) DESIGN', icon: <FaFigma/>, description: 'Creating websites that are visually appealing and easy to use.' },
                        { title: 'FRONT-END FRAMEWORK', icon: <FaReact/>, description: 'Utilizing frameworks like React and Next.' },
                        { title: 'CROSS-BROWSER COMPATIBILITY', icon: <FaFirefoxBrowser/>, description: 'Ensuring websites work on all browsers.' },
                        { title: 'PERFORMANCE OPTIMIZATION', icon: <FaChartLine/>, description: 'Optimizing websites for speed and performance.' },
                        { title: 'INTERACTIVE ELEMENTS', icon: <FaMobile/>, description: 'Creating interactive elements like forms and animations using JavaScript.' },
                        { title: 'CODE REFACTORING AND MAINTENANCE', icon: <FaCode/>, description: 'Refactoring and maintaining code to keep it clean and efficient.' }
                    ].map((service, index) => (
                        <motion.div 
                            className="service-card"
                            key={index}
                            initial="hidden"
                            animate={servicesControls}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } }
                            }}
                        >
                            <h3>{service.title} {service.icon}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <motion.section 
                id='tech-stack' 
                className='tech-stack'
                ref={techStackRef}
                initial="hidden"
                animate={techStackControls}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
            >
                <h2>TECH STACK</h2>
                <div className="tech-stack-cards">
                    {[
                        { title: 'HTML', img: HTMLImg },
                        { title: 'CSS', img: CSSImg },
                        { title: 'JavaScript', img: JSImg },
                        { title: 'TypeScript', img: TSImg},
                        { title: 'React', img: ReactImg },
                        { title: 'Next', img: NextImg},
                        { title: 'Python', img: PythonImg },
                        { title: 'Django', img: DjangoImg },
                        { title: 'Tailwind CSS', img: TailwindImg },
                        { title: 'Bootstrap CSS', img: BootstrapImg },
                        { title: 'Git', img: GitImg },
                        { title: 'GitHub', img: GitHubImg },
                        { title: 'AWS', img: AWSImg },
                        { title: 'Firebase', img: FirebaseImg }
                    ].map((tech, index) => (
                        <motion.div 
                            className="tech-stack-card"
                            key={index}
                            initial="hidden"
                            animate={techStackControls}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } }
                            }}
                        >
                            <h3>{tech.title}</h3>
                            <div className="tech-stack-card-image">
                                <img src={tech.img} alt={tech.title} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </>
    );
};

export default About;