import React,{useState} from "react";
import {  NavLink } from "react-router-dom";
import dev4 from "../components/images/dev4.png";
import tiers from "../components/images/tiers.png";
import horizontalui from "../components/images/horizontalui.png";
import gamedesign from "../components/images/gamedesign.png";
import rightthing from "../components/images/rightthing.png";
import approw from "../components/images/approw.png";
import sardarrow from "../components/images/sardarrow.png";
import sardios from "../components/images/sardios.png";
import fluterrow from "../components/images/flutterrow.png";
import iconic from "../components/images/iconic.png";
import reactsard from "../components/images/reactsard.png";
import parrot from "../components/images/parrot.png";
import angularrow from "../components/images/angularrow.png";
import jsreact from "../components/images/jsreact.png";
import vues from "../components/images/vues.png";
import express from "../components/images/express.png";
import typescript from "../components/images/typescript.png";
import htmls from "../components/images/htmls.png";
import nodearrow from "../components/images/nodearrow.png";
import laraarrow from "../components/images/laraarrow.png";
import golanga from "../components/images/golanga.png";
import python from "../components/images/python.png";
import phparrow from "../components/images/phparrow.png";
import sa from "../components/images/sa.png";
import arrowsa from "../components/images/arrowsa.png";
import drible from '../components/images/drible.png';
import behnce from '../components/images/behnce.png';
import github from '../components/images/github.png';
import NoPath from '../components/images/NoPath.png';
import dashboard from '../components/images/dashboard.png';
import log from "../components/images/log.png";
const HireTeam = ({mode}) => {
  const [index,setIndex] = useState(1);
  const css = {
    opacity:"1"
  }
 
  const secondCss = {
    opacity:"0.6"
  }

  const time = (e) =>{
   e.preventDefault();
   setIndex(1);
   for (var prop in secondCss) {
     document.getElementById("camp").style[prop] = secondCss[prop];
   }
   for (var prop in secondCss) {
     document.getElementById("tamp").style[prop] = secondCss[prop];
   }
   for (var prop in css) {
     document.getElementById("barier").style[prop] = css[prop];
   }
  }

  const hired = (e) =>{
    e.preventDefault();
    setIndex(2);
    for (var prop in css) {
     document.getElementById("camp").style[prop] = css[prop];
   }
   for (var prop in secondCss) {
     document.getElementById("barier").style[prop] = secondCss[prop];
   }
   for (var prop in secondCss) {
     document.getElementById("tamp").style[prop] = secondCss[prop];
   }
  }

  const fix = (e) =>{
    e.preventDefault();
    setIndex(3);
    for (var prop in css) {
     document.getElementById("tamp").style[prop] = css[prop];
   }
   for (var prop in secondCss) {
     document.getElementById("barier").style[prop] = secondCss[prop];
   }
   for (var prop in secondCss) {
     document.getElementById("camp").style[prop] = secondCss[prop];
   }
  }

  const hireTema ={
    backgroundColor: mode === "dark" ? "#0A0F16" : "#ffffff"
  }

  const hireTema1 = {
    filter: mode === "dark" ? "invert(0)" : "invert(1)"
  }

  const hireTema2 = {
    color: mode === "dark" ? "#ffffff" : "#000000"
  }
  return (
    <div style={hireTema} className="hire-team">
      <div className="hire-developers">
        <h1 style={hireTema2}>Hire</h1>
        <img style={hireTema1} className="hire-img" src={dev4} alt="" />
      </div>
      <div className="ui-ux">
        <div className="ui-ux-first">
          <div className="tir-ui">
            <h2>
              Hire Ul/UX <br /> Designers
            </h2>
            <img  src={tiers} alt="" />
          </div>
          <div className="group-ui">
            <img src={horizontalui} alt="" />
          </div>
        </div>
        <div className="hire-game-dev">
          <div className="game-d">
            <img src={gamedesign} alt="" />
          </div>
          <div className="game-cons">
            <h2>
              Hire Game <br /> Developers
            </h2>
            <img src={tiers} alt="" />
          </div>
        </div>
      </div>
      <div className="hire-mobile-app-dev">
        <div className="hire-things">
          <div className="hire-mobile-app">
            <h2>Hire Mobile App Developers</h2>
            <button>
              HIRE NOW <img src={rightthing} alt="" />
            </button>
          </div>
          <div className="hire-card">
            <div className="hire-sard">
              <div className="hire-fard">
                <img className="first-sard-im" src={sardios} alt="" />
                <h2>
                  Hire iOS <br /> Developers
                </h2>
                <img className="second-sard-im" src={sardarrow} alt="" />
              </div>
            </div>
            <div className="hire-sard">
              <div className="hire-fard">
                <img className="first-sard-im" src={approw} alt="" />
                <h2>
                  Hire Android <br /> Developers
                </h2>
                <img className="second-sard-im" src={sardarrow} alt="" />
              </div>
            </div>
            <div className="hire-sard">
              <div className="hire-fard">
                <img className="first-sard-im" src={fluterrow} alt="" />
                <h2>
                  Hire Flutter <br /> Developers
                </h2>
                <img className="second-sard-im" src={sardarrow} alt="" />
              </div>
            </div>
            <div className="hire-sard">
              <div className="hire-fard">
                <img className="first-sard-im" src={iconic} alt="" />
                <h2>
                  Hire Ionic <br /> Developers{" "}
                </h2>
                <img className="second-sard-im" src={sardarrow} alt="" />
              </div>
            </div>
            <div className="hire-sard">
              <div className="hire-fard">
                <img className="first-sard-im" src={reactsard} alt="" />
                <h2>
                  Hire React Native <br /> Developers
                </h2>
                <img className="second-sard-im" src={sardarrow} alt="" />
              </div>
            </div>

            <div className="hire-sard">
              <div className="hire-fard">
                <img className="first-sard-im" src={parrot} alt="" />
                <h2>
                  Hire Swift <br /> Developers
                </h2>
                <img className="second-sard-im" src={sardarrow} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="hire-things hire-things1">
          <div className="hire-mobile-app">
            <h2>Hire Front-End Developers</h2>
            <button>
              HIRE NOW <img src={rightthing} alt="" />
            </button>
          </div>
          <div className="hire-card">
            <div className="hire-sard hire-sard1">
              <div className="hire-fard">
                <img className="first-sard-im" src={angularrow} alt="" />
                <h2>
                  Hire AngularJs <br /> Developers
                </h2>
                <img className="second-sard-im" src={sardarrow} alt="" />
              </div>
            </div>
            <div className="hire-sard hire-sard1">
              <div className="hire-fard">
                <img className="first-sard-im" src={jsreact} alt="" />
                <h2>
                  Hire ReactJs <br /> Developers
                </h2>
                <img className="second-sard-im" src={sardarrow} alt="" />
              </div>
            </div>
            <div className="hire-sard hire-sard1">
              <div className="hire-fard">
                <img className="first-sard-im" src={vues} alt="" />
                <h2>
                  Hire Vue.js <br /> Developers
                </h2>
                <img className="second-sard-im" src={sardarrow} alt="" />
              </div>
            </div>
            <div className="hire-sard hire-sard1">
              <div className="hire-fard">
                <img className="first-sard-im" src={express} alt="" />
                <h2>
                  Hire ExpressJs <br /> Developers{" "}
                </h2>
                <img className="second-sard-im" src={sardarrow} alt="" />
              </div>
            </div>
            <div className="hire-sard hire-sard1">
              <div className="hire-fard">
                <img className="first-sard-im" src={typescript} alt="" />
                <h2>
                  Hire TypeScript <br /> Developers
                </h2>
                <img className="second-sard-im" src={sardarrow} alt="" />
              </div>
            </div>

            <div className="hire-sard hire-sard1">
              <div className="hire-fard">
                <img className="first-sard-im" src={htmls} alt="" />
                <h2>
                  Hire HTML/CSS <br /> Developers
                </h2>
                <img className="second-sard-im" src={sardarrow} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="hire-things hire-things1 hire-things2">
          <div className="hire-mobile-app">
            <h2>Hire Back-End Developers</h2>
            <button>
              HIRE NOW <img src={rightthing} alt="" />
            </button>
          </div>
          <div className="hire-card">
            <div className="hire-sard hire-sard1">
              <div className="hire-fard">
                <img className="first-sard-im" src={nodearrow} alt="" />
                <h2>
                  Hire NodeJs <br /> Developers
                </h2>
                <img className="second-sard-im" src={sardarrow} alt="" />
              </div>
            </div>
            <div className="hire-sard hire-sard1">
              <div className="hire-fard">
                <img className="first-sard-im" src={laraarrow} alt="" />
                <h2>
                  Hire Laravel <br /> Developers
                </h2>
                <img className="second-sard-im" src={sardarrow} alt="" />
              </div>
            </div>
            <div className="hire-sard hire-sard1">
              <div className="hire-fard">
                <img className="first-sard-im" src={golanga} alt="" />
                <h2>
                  Hire Golang <br /> Developers
                </h2>
                <img className="second-sard-im" src={sardarrow} alt="" />
              </div>
            </div>
            <div className="hire-sard hire-sard1">
              <div className="hire-fard">
                <img className="first-sard-im" src={python} alt="" />
                <h2>
                  Hire Python <br />
                  Developers{" "}
                </h2>
                <img className="second-sard-im" src={sardarrow} alt="" />
              </div>
            </div>
            <div className="hire-sard hire-sard1">
              <div className="hire-fard">
                <img className="first-sard-im" src={phparrow} alt="" />
                <h2>
                  Hire PHP <br />
                  Developers
                </h2>
                <img className="second-sard-im" src={sardarrow} alt="" />
              </div>
            </div>

            <div className="hire-sard hire-sard1">
              <div className="hire-fard">
                <img className="first-sard-im" src={sa} alt="" />
                <h2>
                  Hire MeteorJS <br />
                  Developers
                </h2>
                <img className="second-sard-im" src={sardarrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hiring-box">
        <div className="hiring-box1">
          <h2>Hire Full Stack Developer</h2>
          <img src={arrowsa} alt="" />
        </div>
        <div className="hiring-box2">
          <h2>Hire QA Engineers</h2>
          <img src={arrowsa} alt="" />
        </div>
      </div>

      <div className="how-we-r">
        <span>What We Do</span>
        <div className="bahut">
          <h2 style={hireTema2}>We are a hub of talented, skilled, and </h2>
          <h2 style={hireTema2}>experienced mobile app & web </h2>
          <h2 style={hireTema2}>developers.</h2>
        </div>
        <div className="direct-hire">
          <div className="headd">
            <p style={hireTema2}>Hire Dedicated Development Team</p>
          </div>
          <div className="how-para">
            <p style={hireTema2}>
              Kusheldigi has a team of highly-experienced developers who can
              work on your unique project idea and come up with the
              best-in-class solution. Hiring our dedicated development team is
              the biggest sources to leverage your causes and businesses in
              highly cost-effective manners.
            </p>
          </div>
          <div className="how-para">
            <p style={hireTema2}>
              Our dedicated developers have expertise and experience to provide
              end-to-end web and <span>mobile app development solutions</span>{" "}
              for startups to enterprises across the globe. Augment your team by
              hiring our highly qualified and experienced developers and
              designers who will help you create complex software solutions as
              per your business requirements.
            </p>
          </div>
        </div>
      </div>

      <div class="tech-div tech-div2">
      <h2>So what’s next? <br />
Let’s Connect & discuss your project.
</h2>
        <div class="tech-para">
        <p>
            Get a free consultation and tell us about your project idea so we can transform 
            </p>
            <p>it into a remarkable digital product.</p>
        </div>
        <h2 className="fontRelated">Our Mantra- Discuss. Design. Deliver</h2>
        <NavLink to="/about">
          <button class="tech-btn">About us</button>
          </NavLink>
      </div>

      <div className="drible">
            <div className="drible-first">
                <p className="workl">OUR Work</p>
                <div className="drible-first-img">
                    <img style={hireTema1} src={drible} alt="" />
                    <img style={hireTema1} src={behnce} alt="" />
                    <img style={hireTema1} src={github} alt="" />
                </div>

                <div className="frible">
                  <img src={NoPath} alt="yes" />
                </div>
            </div>
            <div className="drible-second">
                <div className="deli">
                    <div className="project-deliver">
                         <h2 style={hireTema2}>2500+</h2>
                         <p style={hireTema2}>Project Deliverd</p>
                    </div>
                    <div className="happy-clients">
                         <h2 style={hireTema2}>700+</h2>
                         <p style={hireTema2}>Happy Clients</p>
                    </div>
                </div>
                <div className="frible">
                  <img className="imma" src={dashboard} alt="das" />
                </div>
                 <div className="multi">
                  <p style={hireTema2}>Multi-Vendor Ordering Platform <br /> Based on  ML</p>
                 </div>
                 <div className="multi1">
                        <p style={hireTema2}>UI/UX Design, Web Development</p>
                        <button style={hireTema2}>View Portfolio</button>
                  </div>
            </div>
      </div>

      <div className="busta">
        <div className='bus-mod'>
        <h2 style={hireTema2}>Our Business Models</h2>
        </div>
        <div className="three-business">
          <p style={hireTema1} id="barier" onClick={time}  className="first-b first-m">Time & Material</p>
          <p style={hireTema1} id="camp" onClick={hired}  className="second-p">Hire Team</p>
          <p style={hireTema1} id="tamp" onClick={fix}  className="third-p">Fix Scope Model</p>
        </div>
        {
          index === 1 && (
            <>
            <div className="pic-para">
          <div className="pic-imagea">
            <img style={hireTema1} src={log} alt="" />
          </div>
          <div className="head-pa">
            <h2 style={hireTema2}>Time & Material</h2>
            <p style={hireTema2}>
              We welcome the obscure vision through Time and Material Model that
              supports the Agile Development Process. This is a model where the
              client only pays for the time and resources spent on the project.
            </p>
          </div>
        </div>
            </>
          )
        }

        {
          index === 2 && (
            <>
            <div className="pic-para">
          <div className="pic-imagea">
            <img style={hireTema1} src={log} alt="" />
          </div>
          <div className="head-pa">
            <h2 style={hireTema2}>Hire Team</h2>
            <p style={hireTema2}>
              We welcome the obscure vision through Time and Material Model that
              supports the Agile Development Process. This is a model where the
              client only pays for the time and resources spent on the project.
            </p>
          </div>
        </div>
            </>
          )
        }
        {
          index === 3 && (
            <>
            <div className="pic-para">
          <div className="pic-imagea">
            <img style={hireTema1} src={log} alt="" />
          </div>
          <div className="head-pa">
            <h2 style={hireTema2}>Fix Scope Model</h2>
            <p style={hireTema2}>
              We welcome the obscure vision through Time and Material Model that
              supports the Agile Development Process. This is a model where the
              client only pays for the time and resources spent on the project.
            </p>
          </div>
        </div>
            </>
          )
        }
      
</div>

    </div>
  );
};

export default HireTeam;
