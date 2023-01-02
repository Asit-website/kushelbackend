import React, { useState } from "react";
import solution from "../components/images/Solutions.png";
import fillo from "../components/images/fillo.png";
import fillo2 from "../components/images/fillo2.png";
import fillo3 from "../components/images/fillo3.png";
import fillo4 from "../components/images/fillo4.png";
import { NavLink } from "react-router-dom";
import tvseries from "../components/images/tvseries.png";
import array from "../components/images/array.png";
import cloud from "../components/images/cloud.png";
import ops from "../components/images/ops.png";
import doublehand from "../components/images/doubleHand.png";
import setting from "../components/images/setting.png";
import ditrans from "../components/images/ditrans.png";
import logoa from "../components/images/logoa.png";
import mobile from "../components/images/mobile.png";
import log from "../components/images/log.png";
import SolutionApiFirst from "./solutionApi/SolutionApiFirst";
const Solution = () => {
  const [start, setStart] = useState(false);
  const [index,setIndex] = useState(1);
  const [men,setMen] = useState(1);
  const handleMouseOver = () => {
    setStart(true);
  };

  const handleMouseOut = () => {
    setStart(false);
  };

  const css = {
    borderBottom:"2px solid #ffffff",
    opacity:"1"
  }
 
  const secondCss = {
    borderBottom:"none",
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


 const css1 = {
  color:"#0e66f9"
 }
 const secondCss1 = {
  color:'#ffffff'
 }

 const menu1 = (e) =>{
  e.preventDefault();
  setMen(1);
  for (var prop in secondCss1) {
   document.getElementById("cam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("tam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("dam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("eam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("fam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("gam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("ham").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("iam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("jam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("kam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("lam").style[prop] = secondCss1[prop];
 }
 for (var prop in css1) {
   document.getElementById("bar").style[prop] = css1[prop];
 }
}

const menu2 = (e) =>{
 e.preventDefault();
 setMen(2);
 for (var prop in secondCss1) {
   document.getElementById("cam").style[prop] = secondCss1[prop];
 }
 for (var prop in css1) {
   document.getElementById("tam").style[prop] = css1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("dam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("eam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("fam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("gam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("ham").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("iam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("jam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("kam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("lam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("bar").style[prop] = secondCss1[prop];
 }
}

const menu3 = (e) =>{
 e.preventDefault();
 setMen(3);
 for (var prop in css1) {
   document.getElementById("cam").style[prop] = css1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("tam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("dam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("eam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("fam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("gam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("ham").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("iam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("jam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("kam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("lam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("bar").style[prop] = secondCss1[prop];
 }
}

const menu4 = (e) =>{
 e.preventDefault();
 setMen(4);
 for (var prop in secondCss1) {
   document.getElementById("cam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("tam").style[prop] = secondCss1[prop];
 }
 for (var prop in css1) {
   document.getElementById("dam").style[prop] = css1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("eam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("fam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("gam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("ham").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("iam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("jam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("kam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("lam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("bar").style[prop] = secondCss1[prop];
 }
}

const menu5 = (e) =>{
 e.preventDefault();
 setMen(5);
 for (var prop in secondCss1) {
   document.getElementById("cam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("tam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("dam").style[prop] = secondCss1[prop];
 }
 for (var prop in css1) {
   document.getElementById("eam").style[prop] = css1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("fam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("gam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("ham").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("iam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("jam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("kam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("lam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("bar").style[prop] = secondCss1[prop];
 }
}

const menu6 = (e) =>{
 e.preventDefault();
 setMen(6);
 for (var prop in secondCss1) {
   document.getElementById("cam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("tam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("dam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("eam").style[prop] = secondCss1[prop];
 }
 for (var prop in css1) {
   document.getElementById("fam").style[prop] = css1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("gam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("ham").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("iam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("jam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("kam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("lam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("bar").style[prop] = secondCss1[prop];
 }
}

const menu7 = (e) =>{
 e.preventDefault();
 setMen(7);
 for (var prop in secondCss1) {
   document.getElementById("cam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("tam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("dam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("eam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("fam").style[prop] = secondCss1[prop];
 }
 for (var prop in css1) {
   document.getElementById("gam").style[prop] = css1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("ham").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("iam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("jam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("kam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("lam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("bar").style[prop] = secondCss1[prop];
 }
}

const menu8 = (e) =>{
 e.preventDefault();
 setMen(8);
 for (var prop in secondCss1) {
   document.getElementById("cam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("tam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("dam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("eam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("fam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("gam").style[prop] = secondCss1[prop];
 }
 for (var prop in css1) {
   document.getElementById("ham").style[prop] = css1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("iam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("jam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("kam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("lam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("bar").style[prop] = secondCss1[prop];
 }
}

const menu9 = (e) =>{
 e.preventDefault();
 setMen(9);
 for (var prop in secondCss1) {
   document.getElementById("cam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("tam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("dam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("eam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("fam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("gam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("ham").style[prop] = secondCss1[prop];
 }
 for (var prop in css1) {
   document.getElementById("iam").style[prop] = css1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("jam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("kam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("lam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("bar").style[prop] = secondCss1[prop];
 }
}

const menu10 = (e) =>{
 e.preventDefault();
 setMen(10);
 for (var prop in secondCss1) {
   document.getElementById("cam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("tam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("dam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("eam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("fam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("gam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("ham").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("iam").style[prop] = secondCss1[prop];
 }
 for (var prop in css1) {
   document.getElementById("jam").style[prop] = css1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("kam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("lam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("bar").style[prop] = secondCss1[prop];
 }
}

const menu11 = (e) =>{
 e.preventDefault();
 setMen(11);
 for (var prop in secondCss1) {
   document.getElementById("cam").style[prop] = css1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("tam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("dam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("eam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("fam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("gam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("ham").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("iam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("jam").style[prop] = secondCss1[prop];
 }
 for (var prop in css1) {
   document.getElementById("kam").style[prop] = css1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("lam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("bar").style[prop] = secondCss1[prop];
 }
}

const menu12 = (e) =>{
 e.preventDefault();
 setMen(12);
 for (var prop in secondCss1) {
   document.getElementById("cam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("tam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("dam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("eam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("fam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("gam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("ham").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("iam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("jam").style[prop] = secondCss1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("kam").style[prop] = secondCss1[prop];
 }
 for (var prop in css1) {
   document.getElementById("lam").style[prop] = css1[prop];
 }
 for (var prop in secondCss1) {
   document.getElementById("bar").style[prop] = secondCss1[prop];
 }
}


  return (
    <>
      <div className="kushel-solution">
        <div className="solution-img">
          <h2>Our</h2>
          <img src={solution} alt="ent solution" />
        </div>

        <div className="solution-offer">
          <div className="solution-offer-first">
            <span>What We Do</span>
            <div className="head-para-offer">
              <h2>
                We design and develop user centric SaaS products, web app and
                mobile applications since a decade.
              </h2>
              {/* <h2></h2>
                    <h2></h2> */}
              <div className="ping3">
                <p>
                  We work with diverse brands, organizations, enterprises,
                  startups and individuals to create powerful softwares from
                  excellent idea.
                </p>
                {/* <p></p>
                    <p></p> */}
              </div>
            </div>
            <NavLink to="/about">
              {" "}
              <button>About us</button>
            </NavLink>
          </div>
          <div className="solution-offer-second">
            <div className="offer-box-1">
              <div className="offer-img">
                <img src={fillo} alt="not" />
              </div>
              <div className="offer-para">
                <p>Enterprises</p>
              </div>
            </div>
            <div className="offer-box-2">
              <div className="offer-img1">
                <img src={fillo2} alt="filos" />
              </div>
              <div className="offer-para1">
                <p>Organisation</p>
              </div>
            </div>
          </div>
          <div className="solution-offer-third">
            <div className="eltimate-box">
              <div className="offer-box-3">
                <div className="offer-img2">
                  <img src={fillo3} alt="not" />
                </div>
                <div className="offer-para2">
                  <p>Individuals</p>
                </div>
              </div>
              <div className="offer-box-4">
                <div className="offer-img3">
                  <img src={fillo4} alt="fillot" />
                </div>
                <div className="offer-para3">
                  <p>Startaps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bara-section">
        <div className="mobility-solution">
          <div className="mobile-sox">
            <div className="sox-img">
              <img src={tvseries} alt="not working" />
            </div>
            <div className="sox-text">
              <p>
                Enterprise Mobility
                <br />
                Solutions
              </p>
            </div>
            <div className="sox-images">
              <img src={array} alt="again" />
            </div>
          </div>
          <div className="mobile-sox">
            <div className="sox-img">
              <img src={cloud} alt="" />
            </div>
            <div className="sox-text">
              <p>
                Cloud Computing <br /> Solutions
              </p>
            </div>
            <div className="sox-images">
              <img src={array} alt="" />
            </div>
          </div>
          <div className="mobile-sox">
            <div className="sox-img">
              <img className="fig" src={ops} alt="out" />
            </div>
            <div className="sox-text">
              <p>
                Cloud Computing <br /> Solutions
              </p>
            </div>
            <div className="sox-images">
              <img src={array} alt="" />
            </div>
          </div>
        </div>
        <div className="mobility-solution nobility">
          <div className="mobile-sox">
            <div className="sox-img">
              <img src={doublehand} alt="not working" />
            </div>
            <div className="sox-text">
              <p>
                Software Solutions <br /> for Startups
              </p>
            </div>
            <div className="sox-images">
              <img src={array} alt="again" />
            </div>
          </div>
          <div className="mobile-sox">
            <div className="sox-img">
              <img className="fig" src={setting} alt="" />
            </div>
            <div className="sox-text">
              <p>
                Software Solutions <br /> for Startups
              </p>
            </div>
            <div className="sox-images">
              <img src={array} alt="" />
            </div>
          </div>
          <div className="mobile-sox">
            <div className="sox-img">
              <img className="fig" src={ditrans} alt="out" />
            </div>
            <div className="sox-text">
              <p>
                Cloud Computing <br /> Solutions
              </p>
            </div>
            <div className="sox-images">
              <img src={array} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* ==============tech div================= */}
      <div className="technology">
        <div className="tech-div sol-tef">
          <h2>Let’s Discuss Your Project</h2>
          <div className="tech-para">
            <p>
              Get free consultation and let us know your project idea to turn it
              into{" "}
            </p>
            <p>an amazing digital product.</p>
          </div>
          <NavLink to="/about">
            <button className="tech-btn">About us</button>
          </NavLink>
        </div>
      </div>

      {/* ======================industry code=============== */}

      <div className="industry industry2">
        <h2>Our Industry wise</h2>
        <img src={solution} alt="nothing" />
        <div className="industry-system">
          <div className="small-fintech">
            <span id="bar" onClick={menu1}>Fintech</span>
            <div className="fintech-para">
            <p id="tam" onClick={menu2}>E-Commerce</p>
              <p id="cam" onClick={menu3}>Healthcare</p>
              <p id="dam" onClick={menu4}>Fitness</p>
              <p id="eam" onClick={menu5}>Food Delivery</p>
              <p id="fam" onClick={menu6}>Real Estate</p>
              <p id="gam" onClick={menu7}>Travel</p>
              <p id="ham" onClick={menu8}>Sports</p>
              <p id="iam" onClick={menu9}>Social Networking</p>
              <p id="jam" onClick={menu10}>Business</p>
              <p id="kam" onClick={menu11}>Education</p>
              <p id="lam" onClick={menu12}>Entertainment</p>
            </div>
          </div>

          {
            men === 1 && (
              <>
              <div className="big-fintech">
            <span>Fintech</span>
            <div className="big-fintch-para">
              <p>Make your customers digital banking and investing </p>
              <p>
                experience smooth without irritation like banking long queue.
              </p>
            </div>
            <div className="disc">
              <ul style={{ listStyle: "none" }}>
                <li>Easy Money Transfer</li>
                <li>Easy Investment & Guides</li>
                <li>Manage Daily Expences And Offers</li>
              </ul>
            </div>

            <div className="img-techa">
              <img src={logoa} alt="" />
            </div>
          </div>

          <div className="fin-portfolio">
            <button className="fin-btn">View Portfolio</button>
            <div className="fin-image">
              <img src={mobile} alt="hter" />
            </div>
          </div>
              </>
            )
          }
         {
          men === 2 && (
            <>
            <div className="big-fintech">
            <span>E-Commerce</span>
            <div className="big-fintch-para">
              <p>Make your customers digital banking and investing </p>
              <p>
                experience smooth without irritation like banking long queue.
              </p>
            </div>
            <div className="disc">
              <ul style={{ listStyle: "none" }}>
                <li>Easy Money Transfers</li>
                <li>Easy Investment & Guides</li>
                <li>Manage Daily Expences And Offers</li>
              </ul>
            </div>

            <div className="img-techa">
              <img src={logoa} alt="" />
            </div>
          </div>

          <div className="fin-portfolio">
            <button className="fin-btn">View Portfolio</button>
            <div className="fin-image">
              <img src={mobile} alt="hter" />
            </div>
          </div>
            </>
          )
         }
         {
           men === 3 && (
            <>
            <div className="big-fintech">
            <span>Healthcare</span>
            <div className="big-fintch-para">
              <p>Make your customers digital banking and investing </p>
              <p>
                experience smooth without irritation like banking long queue.
              </p>
            </div>
            <div className="disc">
              <ul style={{ listStyle: "none" }}>
                <li>Easy Money Transfer</li>
                <li>Easy Investment & Guides</li>
                <li>Manage Daily Expences And Offers</li>
              </ul>
            </div>

            <div className="img-techa">
              <img src={logoa} alt="" />
            </div>
          </div>

          <div className="fin-portfolio">
            <button className="fin-btn">View Portfolio</button>
            <div className="fin-image">
              <img src={mobile} alt="hter" />
            </div>
          </div>
            </>
           )
         }
        {
          men === 4 && (
            <>
            <div className="big-fintech">
            <span>Fitness</span>
            <div className="big-fintch-para">
              <p>Make your customers digital banking and investing </p>
              <p>
                experience smooth without irritation like banking long queue.
              </p>
            </div>
            <div className="disc">
              <ul style={{ listStyle: "none" }}>
                <li>Easy Money Transfer</li>
                <li>Easy Investment & Guides</li>
                <li>Manage Daily Expences And Offers</li>
              </ul>
            </div>

            <div className="img-techa">
              <img src={logoa} alt="" />
            </div>
          </div>

          <div className="fin-portfolio">
            <button className="fin-btn">View Portfolio</button>
            <div className="fin-image">
              <img src={mobile} alt="hter" />
            </div>
          </div>
            </>
          )
        }
        {
          men === 5 && (
            <>
            <div className="big-fintech">
            <span>Food Delivery</span>
            <div className="big-fintch-para">
              <p>Make your customers digital banking and investing </p>
              <p>
                experience smooth without irritation like banking long queue.
              </p>
            </div>
            <div className="disc">
              <ul style={{ listStyle: "none" }}>
                <li>Easy Money Transfer</li>
                <li>Easy Investment & Guides</li>
                <li>Manage Daily Expences And Offers</li>
              </ul>
            </div>

            <div className="img-techa">
              <img src={logoa} alt="" />
            </div>
          </div>

          <div className="fin-portfolio">
            <button className="fin-btn">View Portfolio</button>
            <div className="fin-image">
              <img src={mobile} alt="hter" />
            </div>
          </div>
            </>
          )
        }
        {
          men === 6 && (
            <>
            <div className="big-fintech">
            <span>Real Estate</span>
            <div className="big-fintch-para">
              <p>Make your customers digital banking and investing </p>
              <p>
                experience smooth without irritation like banking long queue.
              </p>
            </div>
            <div className="disc">
              <ul style={{ listStyle: "none" }}>
                <li>Easy Money Transfer</li>
                <li>Easy Investment & Guides</li>
                <li>Manage Daily Expences And Offers</li>
              </ul>
            </div>

            <div className="img-techa">
              <img src={logoa} alt="" />
            </div>
          </div>

          <div className="fin-portfolio">
            <button className="fin-btn">View Portfolio</button>
            <div className="fin-image">
              <img src={mobile} alt="hter" />
            </div>
          </div>
            </>
          )
        }
        {
          men === 7 && (
            <>
            <div className="big-fintech">
            <span>Travel</span>
            <div className="big-fintch-para">
              <p>Make your customers digital banking and investing </p>
              <p>
                experience smooth without irritation like banking long queue.
              </p>
            </div>
            <div className="disc">
              <ul style={{ listStyle: "none" }}>
                <li>Easy Money Transfer</li>
                <li>Easy Investment & Guides</li>
                <li>Manage Daily Expences And Offers</li>
              </ul>
            </div>

            <div className="img-techa">
              <img src={logoa} alt="" />
            </div>
          </div>

          <div className="fin-portfolio">
            <button className="fin-btn">View Portfolio</button>
            <div className="fin-image">
              <img src={mobile} alt="hter" />
            </div>
          </div>
            </>
          )
        }
        {
          men === 8 && (
            <>
            <div className="big-fintech">
            <span>Sports</span>
            <div className="big-fintch-para">
              <p>Make your customers digital banking and investing </p>
              <p>
                experience smooth without irritation like banking long queue.
              </p>
            </div>
            <div className="disc">
              <ul style={{ listStyle: "none" }}>
                <li>Easy Money Transfer</li>
                <li>Easy Investment & Guides</li>
                <li>Manage Daily Expences And Offers</li>
              </ul>
            </div>

            <div className="img-techa">
              <img src={logoa} alt="" />
            </div>
          </div>

          <div className="fin-portfolio">
            <button className="fin-btn">View Portfolio</button>
            <div className="fin-image">
              <img src={mobile} alt="hter" />
            </div>
          </div>
            </>
          )
        }
        {
          men === 9 && (
            <>
            <div className="big-fintech">
            <span>Social Networking</span>
            <div className="big-fintch-para">
              <p>Make your customers digital banking and investing </p>
              <p>
                experience smooth without irritation like banking long queue.
              </p>
            </div>
            <div className="disc">
              <ul style={{ listStyle: "none" }}>
                <li>Easy Money Transfer</li>
                <li>Easy Investment & Guides</li>
                <li>Manage Daily Expences And Offers</li>
              </ul>
            </div>

            <div className="img-techa">
              <img src={logoa} alt="" />
            </div>
          </div>

          <div className="fin-portfolio">
            <button className="fin-btn">View Portfolio</button>
            <div className="fin-image">
              <img src={mobile} alt="hter" />
            </div>
          </div>
            </>
          )
        }
        {
          men === 10 && (
            <>
          
            <div className="big-fintech">
            <span>Business</span>
            <div className="big-fintch-para">
              <p>Make your customers digital banking and investing </p>
              <p>
                experience smooth without irritation like banking long queue.
              </p>
            </div>
            <div className="disc">
              <ul style={{ listStyle: "none" }}>
                <li>Easy Money Transfer</li>
                <li>Easy Investment & Guides</li>
                <li>Manage Daily Expences And Offers</li>
              </ul>
            </div>

            <div className="img-techa">
              <img src={logoa} alt="" />
            </div>
          </div>

          <div className="fin-portfolio">
            <button className="fin-btn">View Portfolio</button>
            <div className="fin-image">
              <img src={mobile} alt="hter" />
            </div>
          </div>
          
            </>
          )
        }
        {
          men === 11 && (
            <>
            <div className="big-fintech">
            <span>Education</span>
            <div className="big-fintch-para">
              <p>Make your customers digital banking and investing </p>
              <p>
                experience smooth without irritation like banking long queue.
              </p>
            </div>
            <div className="disc">
              <ul style={{ listStyle: "none" }}>
                <li>Easy Money Transfer</li>
                <li>Easy Investment & Guides</li>
                <li>Manage Daily Expences And Offers</li>
              </ul>
            </div>

            <div className="img-techa">
              <img src={logoa} alt="" />
            </div>
          </div>

          <div className="fin-portfolio">
            <button className="fin-btn">View Portfolio</button>
            <div className="fin-image">
              <img src={mobile} alt="hter" />
            </div>
          </div>
          
            </>
          )
        }
        {
          men === 12 && (
            <>
            <div className="big-fintech">
            <span>Entertainment</span>
            <div className="big-fintch-para">
              <p>Make your customers digital banking and investing </p>
              <p>
                experience smooth without irritation like banking long queue.
              </p>
            </div>
            <div className="disc">
              <ul style={{ listStyle: "none" }}>
                <li>Easy Money Transfer</li>
                <li>Easy Investment & Guides</li>
                <li>Manage Daily Expences And Offers</li>
              </ul>
            </div>

            <div className="img-techa">
              <img src={logoa} alt="" />
            </div>
          </div>

          <div className="fin-portfolio">
            <button className="fin-btn">View Portfolio</button>
            <div className="fin-image">
              <img src={mobile} alt="hter" />
            </div>
          </div>
          
            </>
          )
        }
        </div>
      </div>

      {/* ========ondeman=============== */}

      <div className="on-demand">
        <div className="demans-group">
          <h2>On-demand Solutions</h2>
          <p className="on-demans-para">
            At MindInventory, we provide wide range of on-demand services using
            the most advanced technology and proficiency of our team of veteran
            on demand app developers. Followings are some of the trending
            on-demand services.
          </p>

          <div className="demans-section">
            {SolutionApiFirst.map((val) => {
              return (
                <>
                  <div key={val.id} className={val.className}>
                    {val.names.map((val1) => {
                      return (
                        <div key={val1.id} className="im-de">
                          <img src={val1.image} alt="ok" />
                          <p>{val1.name}</p>
                        </div>
                      );
                    })}

                    {/* <div className="im-de">
                    <img src={putkia} alt="ok" />
                    <p>Laundry App</p>
                </div>

                <div className="im-de">
                    <img src={putkia} alt="ok" />
                    <p>Home Repair App</p>
                </div> */}
                  </div>
                </>
              );
            })}

            {/* 
                <div className='demans-second'>
                <div className="im-de">
                    <img src={putkia} alt="ok" />
                    <p>Courier & Logistics</p>
                </div>
                <div className="im-de">
                    <img src={putkia} alt="ok" />
                    <p>Car Booking</p>
                </div>
                <div className="im-de">
                    <img src={putkia} alt="ok" />
                    <p>Beauty & Salon</p>
                </div>
                </div>
                <div className='demans-third'>
                <div className="im-de">
                    <img src={putkia} alt="ok" />
                    <p>Courier & Logistics</p>
                </div>
                <div className="im-de">
                    <img src={putkia} alt="ok" />
                    <p>Car Booking</p>
                </div>
                </div> */}
          </div>

          <NavLink to="/about">
            <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              {start ? "About Us" : "Explore More"}
            </button>
          </NavLink>
        </div>
        <div className="two-div two-di">
          <div
            style={{ width: "570px", maxWidth: "100%" }}
            className="one-color one-col"
          >
            <div className="span-group">
              <span>Can’t find a service you are </span>
              <span>looking for?</span>
            </div>
           <NavLink className="touchable" to="/service"><button>Explore All Services</button></NavLink>
          </div>
          <div
            className="ano-color ano-col ano-col6"
          >
            <div className="ano-group">
              <span>Want to hire a resource to </span>
              <span>work with you?</span>
            </div>
           <NavLink className="touchable" to="/hiring"><button>Hire team</button></NavLink>
          </div>
        </div>

        <div className="busta sortinga">
          <h2>BUSINESS MODELS</h2>
          <div className="three-business">
            <p id="barier" onClick={time} className="first-b">Time & Material</p>
            <p id="camp" onClick={hired} className="second-p">Hire Team</p>
            <p id="tamp" onClick={fix} className="third-p">Fix Scope Model</p>
          </div>

          {
            index === 1 && (
              <>
              <div className="pic-para">
            <div className="pic-imagea">
              <img src={log} alt="logo" />
            </div>
            <div className="head-pa">
              <h2>Time & Material</h2>
              <p>
                We welcome the obscure vision through Time and Material Model
                that supports the Agile Development Process. This is a model
                where the client only pays for the time and resources spent on
                the project.
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
              <img src={log} alt="logo" />
            </div>
            <div className="head-pa">
              <h2>Hire Team</h2>
              <p>
                We welcome the obscure vision through Time and Material Model
                that supports the Agile Development Process. This is a model
                where the client only pays for the time and resources spent on
                the project.
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
              <img src={log} alt="logo" />
            </div>
            <div className="head-pa">
              <h2>Fix Scope Model</h2>
              <p>
                We welcome the obscure vision through Time and Material Model
                that supports the Agile Development Process. This is a model
                where the client only pays for the time and resources spent on
                the project.
              </p>
            </div>
          </div>
            </>
          )
         }
         
        </div>
      </div>
    </>
  );
};

export default Solution;
