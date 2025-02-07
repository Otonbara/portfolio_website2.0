import '../style.css'
import { FaArrowDown, FaEnvelope, FaPhone } from 'react-icons/fa'


const Contact = () => {
    return (
        <>
            <section className='contact' id='contact'>
                <div className="text-overlay">
                    <h2>I AM IMPRESSED REALLY 👏🏾</h2>
                    <p>
                        You actually made it this far, that is very impressive.
                        Hope you enjoyed your stay on my page (I know you loved it, you do not need to say it).
                        So this is where we say goodbye but before that, I want to say thank you for taking your precious time to read my page.
                        I hope you have great day ahead and I hope you have a great life ahead.
                        You can reach me by clicking these links below <FaArrowDown />
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