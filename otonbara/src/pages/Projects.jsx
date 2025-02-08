import '../style.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Soteria from '../assets/soteria-eye-clinic.png'
import JackSuites from '../assets/jack-suites.png'
import CraftedComfort from '../assets/crafted-comfort.png'
import SkillMatch from '../assets/Skillmatch.png'
import TrackPro from '../assets/TrackPro.png'
import Portfolio from '../assets/portfolio-website1.0.png'
import ComingSoon from '../assets/coming-soon.JPG'
import HTMLImg from '../assets/html5-01-svgrepo-com.svg';
import CSSImg from '../assets/css3-01-svgrepo-com.svg';
import JSImg from '../assets/javascript-155-svgrepo-com.svg';
import TailwindImg from '../assets/tailwind-svgrepo-com.svg';
import BootstrapImg from '../assets/bootstrap-fill-svgrepo-com.svg';
import ReactImg from '../assets/react-svgrepo-com.svg';
import DjangoImg from '../assets/django-svgrepo-com.svg';
import FirebaseImg from '../assets/firebase-svgrepo-com.svg';
import GitHubImg from '../assets/github-142-svgrepo-com.svg';

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
            title: 'SOTERIA EYE CLINIC WEBSITE REDESIGN',
            description: 'A website redesign for a local eye clinic in Lagos, Nigeria',
            technologies: [HTMLImg, CSSImg, JSImg, GitHubImg],
            imageUrl: Soteria,
            liveLink: 'https://soteria-eye-clinic-website.vercel.app/'
        },

        {
            title: 'JACK SUITES',
            description: 'A hotel booking website for a fictional hotel',
            technologies: [ReactImg, TailwindImg],
            imageUrl: JackSuites,
            liveLink: 'https://jack-suites.vercel.app/'
        },

        {
            title: 'CRAFTED COMFORT',
            description: 'An e-commerce website for a fictional furniture store',
            technologies: [HTMLImg, CSSImg, JSImg],
            imageUrl: CraftedComfort,
            liveLink: 'https://otonbara.github.io/crafted_comfort/'
        },

        {
            title: 'SKILLMATCH',
            description: 'A platform for connecting skilled professionals with potential clients',
            technologies: [ReactImg, TailwindImg, FirebaseImg, DjangoImg],
            imageUrl: SkillMatch,
            liveLink: 'https://skillmatch-nine.vercel.app/'
        },

        {
            title: 'TRACKPRO',
            description: 'A platform for tracking and sending parcels',
            technologies: [HTMLImg, CSSImg, BootstrapImg],
            imageUrl: TrackPro,
            liveLink: 'https://otonbara.github.io/logistics_web_project/'
        },

        {
            title: 'MY FIRST PORTFOLIO WEBSITE',
            description: 'My first portfolio website built with HTML, CSS and JavaScript',
            technologies: [HTMLImg, CSSImg, JSImg],
            imageUrl: Portfolio,
            liveLink: 'https://otonbara.github.io/portfolio_website/'
        },

        {
            title: 'MORE PROJECTS COMING SOON....😉😜',
            description: 'I am currently working on more projects. Check back soon for updates',
            technologies: [],
            imageUrl: ComingSoon,
            liveLink: '#'
        }
    ];

    return (
        <>
            <section className='projects' id='projects'>
                <h2>STUFFS I HAVE WORKED ON</h2>
                <Carousel 
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    infinite={true}
                    pauseOnHover={true}
                    showDots={true}
                    arrows={false}>

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
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">LIVE LINK</a>
                            </div>
                        </div>
                    ))} 
                </Carousel>
            </section>
        </>
    );
};

export default Projects;