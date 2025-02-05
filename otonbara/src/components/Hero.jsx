import './Hero.css';
import HeroImg from '../assets/MAIN_SHITnobgBW.png';

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

                <div className='image-container'>
                    <div className='gradient'></div>
                    <img src={HeroImg} alt="Otonbara" className='hero-img'/>
                </div>

                <div className='button'>
                    <button className='btn filled' onClick={handleScroll}>
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;