import React from "react";
import "./about.css";
import Html from "../assets/HTML5_Badge.svg";
import CSS from "../assets/css-3.svg";
import JS from "../assets/javascript.svg";
import RC from "../assets/react.svg";
import Boot from '../assets/bootstrap.png'
import Tw from '../assets/file-type-tailwind-icon-lg.png'
import C from "../assets/icons8-c-programming.svg";
import Cpp from "../assets/icons8-c++.svg";
import Sql from "../assets/Daco_4788452.png";


const about = () => {
  return (
    <section id="about">
      <span className="aboutTitle">My Skills and Expertise : </span>
      <span className="aboutDesc">
        Proficient in HTML, CSS and Bootstrap for design, JavaScript and React for dynamic
        web applications, and skilled in C, C++, and SQL
      </span>

      <div className="aboutBars">
        <div className="aboutBar">
          <img src={Html} alt="" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>HTML</h2>
            <p>HyperText Markup Language</p>
          </div>
        </div>

        <div className="aboutBar">
          <img src={CSS} alt="" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>CSS</h2>
            <p>Cascading Style Sheet</p>
          </div>
        </div>

        <div className="aboutBar">
          <img src={JS} alt="" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>JavaScript</h2>
            <p>Versatile, Dynamic, Client-Side Scripting Language</p>
          </div>
        </div>

        <div className="aboutBar">
          <img src={RC} alt="" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>React</h2>
            <p>
              Component-based library for building interactive user interfaces
            </p>
          </div>
        </div>
        
        <div className="aboutBar">
          <img src={Boot} alt="" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>Bootstrap</h2>
            <p>
            A framework for creating responsive, mobile-first web designs quickly
            </p>
          </div>
        </div>

        <div className="aboutBar">
          <img src={Tw} alt="" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>Tailwind</h2>
            <p>
            A utility-first framework for rapid, customizable design
            </p>
          </div>
        </div>
        
        <div className="aboutBar">
          <img src={C} alt="" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>Proficient in C Programming</h2>
            <p>Powerful, low-level language for system programming</p>
          </div>
        </div>
        
        <div className="aboutBar">
          <img src={Cpp} alt="" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>Proficient in C++ Programming</h2>
            <p>
              Versatile language for high-performance, object-oriented
              programming
            </p>
          </div>
        </div>
        
        <div className="aboutBar">
          <img src={Sql} alt="" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>SQL</h2>
            <p>Language for managing and querying relational databases</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default about;