import React from 'react'
import { useRef } from 'react'; 
import emailjs from '@emailjs/browser';
import "./contact.css";
import LeetCode from '../assets/leetcode.svg'
import Gfg from '../assets/gfg.png'
import Linkdin from '../assets/linkedin.svg'
import Github from '../assets/github.svg'
import Instagram from '../assets/instagram.svg'
import Facebook from '../assets/facebook.svg'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_b6xnfpl', 'template_i1fslob', form.current, {
        publicKey: 'gudifXT2qENJ-TZBC',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
    );
  };

  return (
    <section id='contact'>

        <div id='code'>
            <h1 className='codeTitle'>Coding Platforms</h1>
            <p className='codeDesk'>Problem-Solver Enthusiast with Proven Skills in LeetCode and GFG</p>
            <div className='CodeImgs'>
                <a href='https://leetcode.com/u/Aryan_Singh_Rathore/'><img src={LeetCode} alt='LeetCode' className='codeImg' /> </a>
                <a href='https://www.geeksforgeeks.org/user/aryansrar8df/'><img src={Gfg} alt='Gfg' className='codeImg' /> </a>
            </div>
        </div>

        <div id='social'>
            <h1 className='socialTitle'>Socials</h1>
            <p className='socialDesk'>Here you can connect with me on my social media</p>
            <div className='socialImgs'>
                <a href='https://www.linkedin.com/in/aryan-singh-rathore-298ba5301/'><img src={Linkdin} alt='Linkdin' className='socialImg' /> </a>
                <a href='https://github.com/aryansingh1624'><img src={Github} alt='Github' className='socialImg' /> </a>
                <a href='https://www.instagram.com/aryan.rathore_6/?hl=en'><img src={Instagram} alt='Instagram' className='socialImg' /> </a>
                <a href='https://www.facebook.com/profile.php?id=61565322294783'><img src={Facebook} alt='Facebook' className='socialImg' /> </a>
            </div>
        </div>

        <div id="contactPage">
            <h1 className='contactTitle'>Contact</h1>
            <span className='contactDesc'>Feel free to contact me</span>

            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name="from_name" required />
                <input type="email" className="email" placeholder="Your E-Mail" name="your_email" required />
                <textarea className="msg" rows="5" placeholder="Your Message" name="message" required></textarea>
                <button type="submit" value="Send" className="submitBtn" onClick={() => {alert("Form Submitted Successfully!")}}>Submit</button>
            </form>
        </div>
    </section>
  );
};

export default Contact;