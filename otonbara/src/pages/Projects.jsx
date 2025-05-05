/* eslint-disable react/prop-types */
import '../style.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CarBuddy from '../assets/carbuddy.png'
import RG from '../assets/rugged-gentleman.png'
import Soteria from '../assets/soteria-eye-clinic.png'
import JackSuites from '../assets/jack-suites.png'
import CraftedComfort from '../assets/crafted-comfort.png'
import SkillMatch from '../assets/Skillmatch.png'
import TrackPro from '../assets/TrackPro.png'
import Portfolio from '../assets/portfolio-website1.0.png'
import HTMLImg from '../assets/html5-01-svgrepo-com.svg';
import CSSImg from '../assets/css3-01-svgrepo-com.svg';
import JSImg from '../assets/javascript-155-svgrepo-com.svg';
import TSImg from '../assets/typescript-svgrepo-com.svg';
import TailwindImg from '../assets/tailwind-svgrepo-com.svg';
import BootstrapImg from '../assets/bootstrap-fill-svgrepo-com.svg';
import ReactImg from '../assets/react-svgrepo-com.svg';
import NextImg from '../assets/nextjs-fill-svgrepo-com.svg';
import DjangoImg from '../assets/django-svgrepo-com.svg';
import FirebaseImg from '../assets/firebase-svgrepo-com.svg';
import GitHubImg from '../assets/github-142-svgrepo-com.svg';
import { FaGlobe,FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Projects = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const projects = [
        {
            title: 'CARBUDDY',
            description: 'A user-friendly car rental platform designed to simplify vehicle bookings for users',
            technologies: [ReactImg, TSImg, TailwindImg],
            imageUrl: CarBuddy,
            liveLink: 'https://carbuddy-rose.vercel.app/',
            githubLink: 'https://github.com/Otonbara/CarBuddy'
        },
        {
            title: 'RUGGED GENTLEMAN',
            description: 'A fashion e-commerce website for a fictional male clothing store',
            technologies: [NextImg, TSImg, TailwindImg],
            imageUrl: RG,
            liveLink: 'https://rugged-gentleman.vercel.app/',
            githubLink: 'https://github.com/Otonbara/Rugged_Gentleman'
        },

        {
            title: 'JACK SUITES',
            description: 'A hotel booking website for a fictional hotel',
            technologies: [ReactImg, TailwindImg],
            imageUrl: JackSuites,
            liveLink: 'https://jack-suites.vercel.app/',
            githubLink: 'https://github.com/Otonbara/jack_suites'
        },

        {
            title: 'CRAFTED COMFORT',
            description: 'An e-commerce website for a fictional furniture store',
            technologies: [HTMLImg, CSSImg, JSImg],
            imageUrl: CraftedComfort,
            liveLink: 'https://otonbara.github.io/crafted_comfort/',
            githubLink: 'https://github.com/Otonbara/crafted_comfort'
        },

        {
            title: 'SOTERIA EYE CLINIC WEBSITE REDESIGN',
            description: 'A website redesign for a local eye clinic in Lagos, Nigeria',
            technologies: [HTMLImg, CSSImg, JSImg, GitHubImg],
            imageUrl: Soteria,
            liveLink: 'https://soteria-eye-clinic-website.vercel.app/',
            githubLink: 'https://github.com/Otonbara/SoteriaEyeClinic-Website'
        },

        {
            title: 'SKILLMATCH',
            description: 'A platform for connecting skilled professionals with potential clients',
            technologies: [ReactImg, TailwindImg, FirebaseImg, DjangoImg],
            imageUrl: SkillMatch,
            liveLink: 'https://skillmatch-nine.vercel.app/',
            githubLink: 'https://github.com/Otonbara/Fullstack'
        },

        {
            title: 'TRACKPRO',
            description: 'A platform for tracking and sending parcels',
            technologies: [HTMLImg, CSSImg, BootstrapImg],
            imageUrl: TrackPro,
            liveLink: 'https://otonbara.github.io/logistics_web_project/',
            githubLink: 'https://github.com/Otonbara/logistics_web_project'
        },

        {
            title: 'MY FIRST PORTFOLIO WEBSITE',
            description: 'My first portfolio website built with HTML, CSS and JavaScript',
            technologies: [HTMLImg, CSSImg, JSImg],
            imageUrl: Portfolio,
            liveLink: 'https://otonbara.github.io/portfolio_website/',
            githubLink: 'https://github.com/Otonbara/portfolio_website'
        },
    ];

    const CustomLeftArrow = ({ onClick }) => (
        <button className="custom-left-arrow" onClick={onClick}>
            <FaArrowLeft />
        </button>
    );

    const CustomRightArrow = ({ onClick }) => (
        <button className="custom-right-arrow" onClick={onClick}>
            <FaArrowRight />
        </button>
    );

    return (
        <>
            <section className='projects' id='projects'>
                <h2>STUFFS I HAVE WORKED ON</h2>
                <Carousel 
                    responsive={responsive}
                    infinite={true}
                    pauseOnHover={true}
                    showDots={true}
                    customLeftArrow={<CustomLeftArrow />}
                    customRightArrow={<CustomRightArrow />}>

                    {projects.map((project, index) => (
                        <div className='project-card' key={index}>
                            <img src={project.imageUrl} alt={project.title} className='project-image' />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className='project-technologies'>
                                {project.technologies.map((tech, index) => (
                                    <img src={tech} alt={`Technology ${index + 1}`} key ={index} />
                                ))}
                            </div>
                            <div className="project-link">
                                <div className="live-link">
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer"><FaGlobe/></a>
                                </div>
                                <div className="github-link">
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer"><img src={GitHubImg} /></a>
                                </div>
                            </div>
                        </div>
                    ))} 
                </Carousel>
            </section>
        </>
    );
};

export default Projects;