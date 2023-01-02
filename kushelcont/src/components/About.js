import React from "react";
import Abo from "../components/images/ABOUT.png";
import vision from "../components/images/vision.png";
import mission from "../components/images/mission.png";
import now from "../components/images/2022.png";
import success from "../components/images/success.png";
import group from "../components/images/group.png";
import aug from "../components/images/aug.png";
import group1 from "../components/images/group1.png";
import businessTeam from "../components/images/business-team.png";
import NoPath from "../components/images/NoPath.jpg";
import awards from "../components/images/awards.png";
import achiv from "../components/images/achiv.png";
import dri from "../components/images/dri.png";
import behance from "../components/images/behance.png";
import clutch from "../components/images/clutch.png";
const About = ({mode}) => {
  const successs = {
    backgroundColor: mode === "dark" ? "#0A0F16" : "#ffffff",
  }
  const success1 = {
    color: mode === "dark" ? "#ffffff" : "#000000"
  }
  const success2 = {
    filter: mode === "dark" ? "invert(0)" : "invert(1)"
  }

  const visionsuc = {
    backgroundColor: mode === "dark" ? "#0E0E0E" : "#ffffff",
  }
  return (
    <>
      <div style={successs} className="success-ab">
        <div className="success-ab-img">
          <img style={success2} src={Abo} alt="" />
        </div>
        <div className="who-suc">
          <span>Who we are</span>
          <div className="head-para-suc">
            <h2 style={success1}>
              A team of Creative Minds designing best Apps and Website for the
              World.At Mindlnventory, we make sure that alongside growth of the
              company, our employees and client grow by providing a great
              work-life Culture in the Industry.
            </h2>

            <p style={success1}>
              Our team works hand in hand with the client and make sure that the
              product that they are working on not only becomes success but also
              leaves an impression on the user being easy to use and keeping in
              mind the interest of its users.
            </p>
          </div>
        </div>
      </div>

      <div style={visionsuc} className="vision-succ">
        <div className="vision">
          <img style={success2} src={vision} alt="" />
          <h2 style={success1}>Our Vision</h2>
          <div className="vision-para">
            <p style={success1}>We paint the bright future for the businesses</p>
            <p style={success1}>working on digital landscapes and firmly believe in</p>
            <p style={success1}>providing productive long-term business</p>
            <p style={success1}>relationships.</p>
          </div>
        </div>
        <div className="mission">
          <img style={success2} src={mission} alt="" />
          <h2 style={success1}>Our Mission</h2>
          <div className="mision-para">
            <p style={success1}>Handover contemporary and futuristic web and</p>
            <p style={success1}>mobile software solutions to the businesses ranging</p>
            <p style={success1}>from startups to enterprises with affordability and</p>
            <p style={success1}>satisfaction.</p>
          </div>
        </div>
      </div>

      <div style={successs}  className="now-2022">
        <div className="years">
          <div className="years1">
            <p style={success1}>Now</p>
            <img style={success2} src={now} alt="" />
            <div className="years-head">
              <h2 style={success1}>New Office, More Team</h2>
              <h2 style={success1}>Members with Same</h2>
              <h2 style={success1}>Approach</h2>
            </div>
            <div className="years-para">
              <p style={success1}>After tirelessly working for 11 years we have grown bigger</p>
              <p style={success1}>with our clients, the way we work and the way we execute</p>
              <p style={success1}>projects for our clients.</p>
              <p style={success1} className="aug-ek-para">After tirelessly working for 11 years we have grown bigger with our clients, the way we work and the way we execute projects for our clients.</p>
            </div>
          </div>
          <div className="years2">
            <img style={success2} src={success} alt="" />
            <div className="years-button">
              <button style={success2} className="first-yr-bt">2011</button>
              <button className="second-yr-bt">2022</button>
            </div>
          </div>
        </div>
        <hr style={success2} className="mid" />

        <div className="august">
          <div className="first-aug">
            <h2 className="au">August 2021</h2>
            <h2 style={success1} className="ab">Delivering the Best</h2>
            <div className="aug-para">
              <p style={success1}>
                Be it in terms of Rewarding employees, maintaining work life
              </p>
              <p style={success1}>
                balance or delivering the best products to our clients we have
              </p>
              <p style={success1}>achieved a lot by moving to a bigger better office.</p>
              <p style={success1} className="aug-ek-para">  Be it in terms of Rewarding employees, maintaining work life  balance or delivering the best products to our clients we have achieved a lot by moving to a bigger better office.</p>
            </div>
            <div className="aug-img">
              <img src={group} alt="" />
            </div>
          </div>
          <div className="second-august">
            <div className="aug-list">
              <img src={aug} alt="" />
              <p style={success1}>Grown to 200+ in house Employees</p>
            </div>
            <div className="aug-list">
              <img src={aug} alt="" />
              <p style={success1}>Moved to 25,000 Square Feet Office</p>
            </div>
            <div className="aug-list">
              <img src={aug} alt="" />
              <p style={success1}>Delivered more than 2500+ Project</p>
            </div>
            <div className="aug-list">
              <img src={aug} alt="" />
              <p style={success1}>Served 1600+ Clients till date</p>
            </div>
            <div className="aug2-img">
              <img src={group1} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div style={visionsuc} className="shubham-gupta">
        <div className="first-gupt">
          <img style={success2} className="gup-img" src={businessTeam} alt="" />
          <h2 style={success1}>Brain Behind Kusheldigi</h2>
          <img className="bara-gup" src={NoPath} alt="" />
        </div>
        <div className="second-gupta">
          <h2 style={success1}>Shubham Gupta</h2>
          <div className="small-sb-para">
            <p style={success1}>Founder & Director of Kusheldigisolutions</p>
          </div>
          <div className="big-sb-para">
            <p style={success1}>
              At Mindlnventory, we believe in enjoying each and every moment of
              life. We are enjoying freedom of speech, expressions, emotions,
              thoughts and most importantly sharing fun. Therefore, our life at
              MI is full of hustle bustle, collisions and recreation at all
              level of personal and professional aspects.
            </p>
          </div>
        </div>
      </div>
      <div style={successs} className="achiv">
        <div className="ments">
          <div className="first-memts">
            <img style={success2} className="award-img" src={awards} alt="" />
            <img  className="achiv-img" src={achiv} alt="" />
            <h2 style={success1}>Awards & Industry Recognition</h2>
          </div>
          <div className="second-memts">
            <div className="memts-box">
              <div style={success2} className="memts-sox">
                <h3>200+</h3>
                <p>
                  People Inhouse <br />
                  Team
                </p>
              </div>
              <div style={success2} className="memts-sox">
                <h3>2500+</h3>
                <p>Project Delivered</p>
              </div>
              <div style={success2} className="memts-sox">
                <h3>$140M+</h3>
                <p>
                  Worth of Bonus <br />
                  Given to Team
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cluschis">
          <div className="cluschis-box">
            <div className="cu">
              <img src={dri} alt="" />
              <h2>DRIBBBLE</h2>
              <p>Top Creator In Year Of 2020</p>
            </div>
          </div>
          <div className="cluschis-box">
            <div className="cu">
              <img src={behance} alt="" />
              <h2>BEHANCE</h2>
              <p>Featured As Top Ul UX Design Company, Year Of 2019</p>
            </div>
          </div>
          <div className="cluschis-box">
            <div className="cu">
              <img src={clutch} alt="" />
              <h2>CLUTCH</h2>
              <p>Top IT Services Companies In USA, Year Of 2020</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
