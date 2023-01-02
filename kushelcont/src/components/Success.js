import React,{useState} from 'react';
import { NavLink } from "react-router-dom";
import dash from '../components/images/dash.png';
import coin from '../components/images/coin.png';
import dianemo from '../components/images/dianemo.png';
import drible from '../components/images/drible.png';
import behnce from '../components/images/behnce.png';
import github from '../components/images/github.png';
import NoPath from '../components/images/NoPath.png';
import dashboard from '../components/images/dashboard.png';
import log from '../components/images/log.png';
const Success = ({mode}) => {
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

  const aboutsCon = {
     backgroundColor: mode === "dark" ? "#0A0F16" : "#ffffff"
  }

  const aboutsCon1 = {
    color: mode === "dark" ? "#ffffff" : "#000000"
  }

  const projectContainer = {
    backgroundColor: mode === "dark" ? "#020e19" : "#ffffff"
  }

  const drrible = {
    filter:mode === "dark" ? "invert(0)" : "invert(1)"
  }
  return (
    <>
    <div style={aboutsCon} className="about-container">
      <div style={aboutsCon} className="partner">
        <div className="first_partner">
          <img src="./images/23.png" alt="noting" />
        </div>
        <div className="second_partner">
          <div className="second_all">
            <span>Who we are</span>
            <h2 style={aboutsCon1}>
              Your digital partner to create inspirational design and robust
              solution for Web, Mobile & <br /> Cloud.
            </h2>
            <p style={aboutsCon1}>
              The top-notch and preeminent Web and Mobile App Development
              Company of India with its global presence in USA, MindInventory
              is first-rate choice of the clients worldwide. With sheer
              customer satisfaction in mind, we are profoundly dedicated to
              developing highly intriguing apps that strictly meet the
              business requirements and catering a wide spectrum of projects.
            </p>

            <NavLink to="/about">
              <button style={aboutsCon1} className="who_btn">About us</button>
            </NavLink>
          </div>
        </div>
      </div>
      <div class="how-we-r how-we-r1">
        <span>Success Story</span>
        <div class="bahut">
          <h2 style={aboutsCon1}>We are a hub of talented, skilled, and </h2>
          <h2 style={aboutsCon1}>experienced mobile app &amp; web </h2>
          <h2 style={aboutsCon1}>developers.</h2>
        </div>
        <div class="direct-hire">
          <div class="headd">
            <p style={aboutsCon1}>Hire Dedicated Development Team</p>
          </div>
          <div class="how-para">
            <p style={aboutsCon1}>
              Kusheldigi has a team of highly-experienced developers who can
              work on your unique project idea and come up with the
              best-in-class solution. Hiring our dedicated development team is
              the biggest sources to leverage your causes and businesses in
              highly cost-effective manners.
            </p>
          </div>
          <div class="how-para">
            <p style={aboutsCon1}>
              Our dedicated developers have expertise and experience to
              provide end-to-end web and{" "}
              <span className="m-app">mobile app development solutions</span> for startups to
              enterprises across the globe. Augment your team by hiring our
              highly qualified and experienced developers and designers who
              will help you create complex software solutions as per your
              business requirements.
            </p>
          </div>
        </div>
      </div>

    </div>
    <div style={aboutsCon} className="project-container3">
    <div style={projectContainer} className="project project1">
      <span>Success stories</span>
      <div className="project-heading">
        <h2 style={aboutsCon1}>We design project designed with passion on time,</h2>
        <h2 style={aboutsCon1}>within budget of full value</h2>
      </div>

      <div className="project-images">
        <img src={dash} alt="das" />
        <img src={coin} alt="con" />
      </div>
      <NavLink to="#!">
        {" "}
        <button style={aboutsCon1} className="project-btn">View Portfolio</button>
      </NavLink>
    </div>
    <div className="techas">
    <div class="tech-div tech-div2">
      <h2>Let’s Discuss Your Project</h2>
      <div class="tech-para">
        <p>
          Get free consultation and let us know your project idea to turn it
          into an amazing digital <br /> product.
        </p>
      </div>
      <NavLink to="/about">
        <button class="tech-btn">About us</button>
        </NavLink>
    </div>
    </div>
    <div className="drible drible3">
          <div className="drible-first">
              <p style={aboutsCon1} className="workl">OUR Work</p>
              <div className="drible-first-img">
                  <img style={drrible} src={drible} alt="" />
                  <img style={drrible} src={behnce} alt="" />
                  <img style={drrible} src={github} alt="" />
              </div>

              <div className="frible">
                <img src={NoPath} alt="yes" />
              </div>
          </div>
          <div className="drible-second">
              <div className="deli">
                  <div className="project-deliver">
                       <h2 style={aboutsCon1}>2500+</h2>
                       <p style={aboutsCon1}>Project Deliverd</p>
                  </div>
                  <div className="happy-clients">
                       <h2 style={aboutsCon1}>700+</h2>
                       <p style={aboutsCon1}>Happy Clients</p>
                  </div>
              </div>
              <div className="frible">
                <img className="imma" src={dashboard} alt="das" />
              </div>
               <div className="multi">
                <p style={aboutsCon1}>Multi-Vendor Ordering Platform <br /> Based on  ML</p>
               </div>
               <div className="multi1">
                      <p style={aboutsCon1}>UI/UX Design, Web Development</p>
                      <button style={aboutsCon1}>View Portfolio</button>
                </div>
          </div>
    </div>

    <div className="busta busta1 busta2">
      <div className='bus-mod'>
      <h2>BUSINESS MODELS</h2>
      </div>
      <div className="three-business">
        <p style={aboutsCon1} id="barier" onClick={time}  className="first-b first-m">Time & Material</p>
        <p style={aboutsCon1} id="camp" onClick={hired}  className="second-p">Hire Team</p>
        <p style={aboutsCon1} id="tamp" onClick={fix}  className="third-p">Fix Scope Model</p>
      </div>
      {
        index === 1 && (
          <>
          <div className="pic-para">
        <div className="pic-imagea">
          <img style={drrible} src={log} alt="" />
        </div>
        <div className="head-pa">
          <h2 style={aboutsCon1}>Time & Material</h2>
          <p style={aboutsCon1}>
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
          <img style={drrible} src={log} alt="" />
        </div>
        <div className="head-pa">
          <h2 style={aboutsCon1}>Hire Team</h2>
          <p style={aboutsCon1}>
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
          <img style={drrible} src={log} alt="" />
        </div>
        <div className="head-pa">
          <h2 style={aboutsCon1}>Fix Scope Model</h2>
          <p style={aboutsCon1}>
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
  </>
  )
}

export default Success