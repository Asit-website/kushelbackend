import React from 'react'
import iamplus from '../components/images/iamplus.png';
import passio from '../components/images/passio.png';
import ace from '../components/images/ace.png';
import snug from '../components/images/snug.png';
import porter from '../components/images/porter.png';
import Zammans from '../components/images/Zammans.png';
const Brands = ({mode}) => {
  const workcss = {
    backgroundColor: mode === "dark" ? "#0A0F16" : "#ffffff"
  }

  const workcss1 = {
    color: mode === "dark" ? "#ffffff" : "#000000"
  }
  return (
    <>
      <div style={workcss} className="our-work">
         <div className="work-flex">
             <div className="first-work-flex">
                 <div className="work-head">
                    <h2 style={workcss1}>OUR WORK</h2>
                    <p style={workcss1}>Some of our Best work that we are Proud of.</p>
                 </div>
                 <img src={iamplus} alt="" />
                 <div className="work1-head">
                    <h2 style={workcss1}>Super App</h2>
                    <p style={workcss1}>IJI/UX Design, Mobile App Development.</p>
                 </div>
             </div>
             <div className="second-work-flex">
                 <img src={passio} alt="" />
                 <div className="work1-head">
                   <h2 style={workcss1}>Edge-Al Platform for Enterprise</h2>
                   <p style={workcss1}>Some of our Best work that we are Proud of.</p>
                 </div>
             </div>
         </div>
         <div className="work-flex">
             <div className="first-work-flex">
                 <div style={workcss1} className="work-head work-head4">
                    <h2>OUR WORK</h2>
                    <p>Some of our Best work that we are Proud of.</p>
                 </div>
                 <img src={ace} alt="" />
                 <div className="work1-head">
                    <h2 style={workcss1}>NFT based Social Network</h2>
                    <p style={workcss1}>IJI/UX Design, Mobile App Development.</p>
                 </div>
             </div>
             <div className="second-work-flex">
                 <img src={snug} alt="" />
                 <div className="work1-head">
                   <h2 style={workcss1}>Home Rental Platform</h2>
                   <p style={workcss1}>IJI/UX Design, Web Development</p>
                 </div>
             </div>
         </div>
         <div className="work-flex">
             <div className="first-work-flex">
                 <div  className="work-head work-head4">
                    <h2>OUR WORK</h2>
                    <p>Some of our Best work that we are Proud of.</p>
                 </div>
                 <img src={porter} alt="port" />
                 {/* <div className="work1-head">
                    <h2>NFT based Social Network</h2>
                    <p>IJI/UX Design, Mobile App Development.</p>
                 </div> */}
             </div>
             <div className="second-work-flex">
                 <img src={Zammans} alt="" />
                 {/* <div className="work1-head">
                   <h2>Home Rental Platform</h2>
                   <p>IJI/UX Design, Web Development</p>
                 </div> */}
             </div>
         </div>
      </div>
      
    </>
  )
}

export default Brands