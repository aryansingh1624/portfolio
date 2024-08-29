import React from 'react'
import './project.css';
import Banner from '../assets/project.jpg'

function project() {
  return (
    <section id="project">
        <h2 className='projectTitle'>My Projects</h2>
        <span className='projectDesc'>Here are my projects :</span>

        <div className="project-item">
            <div className='item-details'>
               <p className='P1'>Project-1</p>
               <p className='P2'>TechStack: HTML and CSS</p>
            </div>
            <a href='#' ><img src={Banner} alt='project' className='projectImg' /></a>
        </div>

        <div className="project-item">
            <div className='item-details'>
               <p className='P1'>Project-2</p>
               <p className='P2'>TechStack: HTML, CSS and JavaScript</p>
            </div>
            <a href='#' ><img src={Banner} alt='project' className='projectImg' /></a>
        </div>

        <div className="project-item">
            <div className='item-details'>
               <p className='P1'>Project-3</p>
               <p className='P2'>TechStack: HTML, CSS, JavaScript, React</p>
            </div>
            <a href='#' ><img src={Banner} alt='project' className='projectImg' /></a>
        </div>

    </section>
  )
}

export default project