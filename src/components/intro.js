import React from 'react'
import './intro.css';
import { Link } from 'react-scroll';
import Hireme from '../assets/hireme.png'
import reactLogo from '../assets/react.svg'

function intro() {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className="introName">Aryan</span>
            <br/> Web Developer</span>
            <p className='introPara'>
              I am a passionate web developer specializing in creating dynamic,
              <br/>
              user-friendly  websites with a focus on innovation and functionality.
            </p>
            <Link>
               <button className='btn2'>
                <img src={Hireme} alt='Img' className='btnImg2'/>
                Hire Me
               </button>
            </Link>
        </div>  
        <img src={reactLogo} alt='React Logo' className='logo2' />
    </section>
  );
};

export default intro