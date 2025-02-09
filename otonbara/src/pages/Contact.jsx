/* eslint-disable react/no-unescaped-entities */
import '../style.css'
import { FaEnvelope } from 'react-icons/fa'
import GitHubIMG from '../assets/github-142-svgrepo-com.svg'
import LinkedInIMG from '../assets/linkedin-161-svgrepo-com.svg'

const Contact = () => {
    return (
        <>
            <section className='contact' id='contact'>
                <div className="text-overlay">
                    <h2>LET'S MEET</h2>
                    <p>
                        Kindly click on the icons below and let's get to work!
                    </p>
                </div>
                <div className="contact-links">
                    <a href="mailto:alfredokolai@gmail.com"><FaEnvelope/></a>
                    <a href="https://www.linkedin.com/in/otonbaraokolai" target='blank'><img src={LinkedInIMG} alt="LinkedIn"/></a>
                    <a href="https://github.com/Otonbara" target='blank'><img src={GitHubIMG} alt="GitHub"/></a>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2025 Otonbara Alfred Okolai. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Contact;