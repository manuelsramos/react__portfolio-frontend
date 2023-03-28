import React from 'react'
import { MdOutlineMail, MdOutlineWhatsapp } from 'react-icons/md'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_miftnan', 'template_5srrouh', form.current, 'NgquVCsH-wP4wCVoe')
        e.target.reset()
    };

    return (
        <section id='contact' data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1200">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <a href="mailto:manuelsramos93@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <MdOutlineWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <a href="http://api.whatsapp.com/send?phone=5491173685232" target="_blank" rel="noopener noreferrer">Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="text" name='email' placeholder='Email Addres' required />
                    <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact