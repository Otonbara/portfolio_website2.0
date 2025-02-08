/* eslint-disable react/no-unescaped-entities */
import '../style.css'
import { FaEnvelope, FaPhone } from 'react-icons/fa'


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
                    <a href="tel:+2348137081350"><FaPhone/></a>
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