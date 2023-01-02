import React,{useReducer, useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import line1 from "./images/line1.png";
import line2 from "./images/line2.png";
import map from "./images/map.png";
import Alert from '@mui/material/Alert';

const Contact = ({mode}) => {
const drop = [
  {
    id:1,
    name:"yes"
  }
]
  const navigate = useNavigate();
  // const [user,setUser] = useState({})
  const [user, setUser] = useState({
    pName:"",
          pCompanyName:"",
          pWebsite:"",
          pDesiginition:"",
          pEmailAddress:"",
          pLocation:"",
          pEstimatedBudget:"",
          pPhone:"",
          pMessage:"",
          cName:"",
          cCompanyName:"",
          cWebsite:"",
          cDesiginition:"",
          cEmailAddress:"",
          cLocation:"",
          cService:"",
          cPhone:"",
          cMessage:"",
          jName:"",
          jExperience:"",
          jWebsite:"",
          jPhone:"",
          jEmailAddress:"",
          jLocation:"",
          jCurrentState:"",
          jHighestQualification:"",
          jPostAppliedFor:"",
          jDomainWorkOn:"",
          jMessage:"",
          hName:"",
          hCompanyName:"",
          hEmailAddress:"",
          hPhone:"",
          hMessage:""
  });

  const handleInputs = (e) => {
    if (document.getElementsByName(e.target.name)[0].nextElementSibling) {
      document.getElementsByName(e.target.name)[0].nextElementSibling.remove();
    }
    setUser({...user, [e.target.name]:e.target.value});
  }



  const submitForm = async(e)=>{
    e.preventDefault();
    let flag = true;
    for (let i of document.querySelectorAll(".alertEle")) {
      i.remove();
    }
    for (let i of Object.keys(user)) {
      let t = document.getElementsByName(i);
      if (user[i] === "" && t.length !== 0) {
        flag = false;
        let nc = document.createElement("div");
        nc.setAttribute("class", "alertEle");
        nc.innerHTML = `<small class="text-error">${i} is required</small>`;
        t[0].parentNode.appendChild(nc);
      }
    }

    if(flag){
      const {
        pName,
        pCompanyName,
        pWebsite,
        pDesiginition,
        pEmailAddress,
        pLocation,
        pEstimatedBudget,
        pPhone,
        pMessage,
        cName,
        cCompanyName,
        cWebsite,
        cDesiginition,
        cEmailAddress,
        cLocation,
        cService,
        cPhone,
        cMessage,
        jName,
        jExperience,
        jWebsite,
        jPhone,
        jEmailAddress,
        jLocation,
        jCurrentState,
        jHighestQualification,
        jPostAppliedFor,
        jDomainWorkOn,
        // jFileUpload,
        jMessage,
        hName,
        hCompanyName,
        hEmailAddress,
        hPhone,
        hMessage
    } = user;
          axios.post('http://localhost:5000/api/contact', {
              pName,
              pCompanyName,
              pWebsite,
              pDesiginition,
              pEmailAddress,
              pLocation,
              pEstimatedBudget,
              pPhone,
              pMessage,
              cName,
              cCompanyName,
              cWebsite,
              cDesiginition,
              cEmailAddress,
              cLocation,
              cService,
              cPhone,
              cMessage,
              jName,
              jExperience,
              jWebsite,
              jPhone,
              jEmailAddress,
              jLocation,
              jCurrentState,
              jHighestQualification,
              jPostAppliedFor,
              jDomainWorkOn,
              jMessage,
              hName,
              hCompanyName,
              hEmailAddress,
              hPhone,
              hMessage
    
          })
          .then(function (response) {
                document.getElementById("success-msg").style.display = "block";
                setTimeout(() => {
                    document.getElementById("success-msg").style.display="none";
                }, 2000);   

          })
         
          .catch(function (error) {        
            console.log(error);
          });
          
         setUser({
          pName:"",
          pCompanyName:"",
          pWebsite:"",
          pDesiginition:"",
          pEmailAddress:"",
          pLocation:"",
          pEstimatedBudget:"",
          pPhone:"",
          pMessage:"",
          cName:"",
          cCompanyName:"",
          cWebsite:"",
          cDesiginition:"",
          cEmailAddress:"",
          cLocation:"",
          cService:"",
          cPhone:"",
          cMessage:"",
          jName:"",
          jExperience:"",
          jWebsite:"",
          jPhone:"",
          jEmailAddress:"",
          jLocation:"",
          jCurrentState:"",
          jHighestQualification:"",
          jPostAppliedFor:"",
          jDomainWorkOn:"",
          jMessage:"",
          hName:"",
          hCompanyName:"",
          hEmailAddress:"",
          hPhone:"",
          hMessage:""
         })
    }
  

   
  }
  const [tabIndex, setTabIndex] = useState(1);

  var css = {
    background: "#0e66f9",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    border:"none"
  };

  var secondCss = {
    background:"transparent",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    border:"2px solid #ffffff"
  };

  const tabChange = (e) =>{
    e.preventDefault();
    setTabIndex(1);
    for (var prop in secondCss) {
      document.getElementById("camp").style[prop] = secondCss[prop];
    }
    for (var prop in secondCss) {
      document.getElementById("tamp").style[prop] = secondCss[prop];
    }

    for (var prop in secondCss) {
      document.getElementById("samp").style[prop] = secondCss[prop];
    }

    for (var prop in css) {
      document.getElementById("barier").style[prop] = css[prop];
    }
  }
  const tabChange1 = (e) =>{
    e.preventDefault();
    setTabIndex(2);
    for (var prop in css) {
      document.getElementById("camp").style[prop] = css[prop];
    }
    for (var prop in secondCss) {
      document.getElementById("barier").style[prop] = secondCss[prop];
    }
    for (var prop in secondCss) {
      document.getElementById("tamp").style[prop] = secondCss[prop];
    }

    for (var prop in secondCss) {
      document.getElementById("samp").style[prop] = secondCss[prop];
    }
  }

  const tabChange2 = (e) =>{
    e.preventDefault();
    setTabIndex(3);
    for (var prop in css) {
      document.getElementById("tamp").style[prop] = css[prop];
    }
    for (var prop in secondCss) {
      document.getElementById("barier").style[prop] = secondCss[prop];
    }
    for (var prop in secondCss) {
      document.getElementById("camp").style[prop] = secondCss[prop];
    }

    for (var prop in secondCss) {
      document.getElementById("samp").style[prop] = secondCss[prop];
    }
  }

  const tabChange3 = (e) =>{
     e.preventDefault();
     setTabIndex(4);
     for (var prop in secondCss) {
      document.getElementById("tamp").style[prop] = secondCss[prop];
    }
    for (var prop in secondCss) {
      document.getElementById("barier").style[prop] = secondCss[prop];
    }
    for (var prop in secondCss) {
      document.getElementById("camp").style[prop] = secondCss[prop];
    }

    for (var prop in css) {
      document.getElementById("samp").style[prop] = css[prop];
    }
  }

  const contactwala = {
    background: mode === "dark" ? "#010910" : "#ffffff"
  }
  const contactwala1 = {
     filter: mode === "dark" ? "invert(0)" : "invert(1)"
  }

  const contactwala2 = {
    filter: mode === "dark" ? "invert(0)" : "invert(1)"
  }

  return (
    <>
      <div style={contactwala1} className="cont">
        <div className="first_heading_contact">
          <h2 style={{ color: "white" }}>
            Let's <span>Talk.</span>
          </h2>
          <p>
            Get in touch with us for all your staffing requirements and hire our
            optimal services for getting the project developments done with your
            budget estimate. We believe in building business partnerships that
            go long-term.
          </p>
        </div>

        <div className="second_heading_contact">
          <div className="concentric">
            <p>CONNECTING  ARATEK</p>
          </div>
          <div className="line">
            <div className="first_line">
              <img src={line1} alt="line" />
            </div>
            <div className="second_line">
              <img src={line2} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* second section  */}

      <div style={contactwala} className="contact_us">
        <p className="contact_para">What would you like to Contact Us for ?</p>
        <div className="diff_btn">
          <NavLink style={contactwala1}  id="barier" onClick={tabChange} className="first_link" to="#!">
            NEW PROJECT
          </NavLink>
          <NavLink style={contactwala1} id="camp" onClick={tabChange1} className="second_link" to="#!">
            CONSULTING
          </NavLink>
          <NavLink style={contactwala1} id="tamp" onClick={tabChange2}  className="third_link" to="#!">
            JOINING US
          </NavLink>
          <NavLink style={contactwala1} id="samp"  onClick={tabChange3} className="fourth_link" to="#!">
            JUST SAY HI
          </NavLink>
        </div>

        <div className="form_map">
          <div className="torm_map">
            <div className="sorm_map">
              <div className="sorm_map1">
                <h4>SUPPORT <span>EMAIL</span></h4>
                <p>info@kusheldigi.com</p>
                <div className="border"></div>
              </div>
              <div className="sorm_map2">
                <h4>SUPPORT <span>Phone</span></h4>
                <p>9045301702</p>
                <div className="sorder"></div>
              </div>
            </div>
             <div className="map">
               <img src={map} alt="" />
             </div>
          </div>

          <div className="form_cont">
            <div class="wrapper">
            <form id="form" onSubmit={submitForm}>
            {
              tabIndex === 1 && (
                <>
                <div class="form">
                <div class="top-form">
                  <div class="inner-form">
                    <input style={contactwala1} type="text" 
                      id="pName" 
                      name="pName" 
                      value={user?.pName}  
                      onChange={handleInputs}
                      placeholder="Full Name*" />
                  </div>
                  <div class="inner-form">
                    <input style={contactwala1} type="text" 
                      id="pCompanyName" 
                      name="pCompanyName" 
                      value={user?.pCompanyName}  
                      onChange={handleInputs}
                      placeholder="Company Name*" />
                  </div>
                 
                </div>
                <div class="top-form">
                  <div class="inner-form">
                    <input style={contactwala1} type="text" 
                      id="pWebsite" 
                      name="pWebsite" 
                      value={user?.pWebsite}  
                      onChange={handleInputs}
                      placeholder="Website*" />
                  </div>
                  <div class="inner-form">
                    <input style={contactwala1} type="text" 
                      id="pDesiginition" 
                      name="pDesiginition" 
                      value={user?.pDesiginition}  
                      onChange={handleInputs}
                      placeholder="Designation*" />
                  </div>
                 
                </div>

                <div class="top-form">
                  <div class="inner-form">
                    <input style={contactwala1} type="email"
                      id="pEmailAddress" 
                      name="pEmailAddress" 
                      value={user?.pEmailAddress }  
                      onChange={handleInputs}
                      placeholder="Email Address*" />
                  </div>
                  <div class="inner-form">
                    <input style={contactwala1} type="text" 
                      id="pLocation" 
                      name="pLocation" 
                      value={user?.pLocation}  
                      onChange={handleInputs}
                      placeholder="Location*" />
                  </div>
                 
                </div>

                <div class="bottom-form">
                  <div class="inner-form">
                     <select style={contactwala1} onChange={handleInputs} name="pEstimatedBudget" id="pEstimatedBudget" value={user?.pEstimatedBudget}>
                      <option 
                        value=""
                        >Estimated Budget*</option>
                       {
                        drop.map(val=>{
                          return(
                            <option key={val.id} value={val.id}>{val.name}</option>
                          )
                        })
                       }
                     </select>
                  </div>
                  
                </div>

                <div class="bottom-form">
                  <div class="inner-form">
                    <input style={contactwala1} type="tel"
                      id="pPhone" 
                      name="pPhone" 
                      value={user?.pPhone}  
                      onChange={handleInputs}
                      className="inus" placeholder="Phone"></input>
                  </div>
                  
                </div>

                <div class="bottom-form">
                  <div class="inner-form">
                    <textarea style={contactwala1} className="second_area"
                      id="pMessage" 
                      name="pMessage" 
                      value={user?.pMessage}  
                      onChange={handleInputs}
                      placeholder="MESSAGE"></textarea>
                  </div>
                  
                </div>
              </div>
                </>
              )
            }

            {
              tabIndex === 2 && (
                <>
                <div class="form">
                <div class="top-form">
                  <div class="inner-form">
                    <input 
                    style={contactwala1}
                      id="cName"
                      name="cName"
                      value={user?.cName}
                      onChange={handleInputs}
                      type="text" placeholder="Full Name*" />
                  </div>
                  <div class="inner-form">
                    <input 
                    style={contactwala1}
                      id="cCompanyName"
                      name="cCompanyName"
                      value={user?.cCompanyName}
                      onChange={handleInputs}
                      type="text" placeholder="Company Name*" />
                  </div>
                 
                </div>
                <div class="top-form">
                  <div class="inner-form">
                    <input 
                    style={contactwala1}
                      id="cWebsite"
                      name="cWebsite"
                      value={user?.cWebsite}
                      onChange={handleInputs}
                      type="text" placeholder="Website*" />
                  </div>
                  <div class="inner-form">
                    <input 
                    style={contactwala1}
                      id="cDesiginition"
                      name="cDesiginition"
                      value={user?.cDesiginition}
                      onChange={handleInputs}
                      type="text" placeholder="Designation*" />
                  </div>
                 
                </div>

                <div class="top-form">
                  <div class="inner-form">
                    <input type="text" 
                    style={contactwala1}
                      id="cEmailAddress"
                      name="cEmailAddress"
                      value={user?.cEmailAddress}
                      onChange={handleInputs}
                      placeholder="Email Address*" />
                  </div>
                  <div class="inner-form">
                    <input 
                    style={contactwala1}
                      id="cLocation"
                      name="cLocation"
                      value={user?.cLocation}
                      onChange={handleInputs}
                      type="text" placeholder="Location*" />
                  </div>
                 
                </div>

                <div class="bottom-form">
                  <div class="inner-form">
                     <select style={contactwala1} name="cService" id="oldsel" value={user?.cService}>
                        <option value="">Service</option>
                     </select>
                  </div>
                  
                </div>

                <div class="bottom-form">
                  <div class="inner-form">
                  <input 
                  style={contactwala1}
                    id="cPhone"
                    name="cPhone"
                    value={user?.cPhone}
                    onChange={handleInputs}
                    type="number" className="inus" placeholder="Phone"></input>
                  </div>
                  
                </div>

                <div class="bottom-form">
                  <div class="inner-form">
                    <textarea 
                    style={contactwala1}
                      id="cMessage"
                      name="cMessage"
                      value={user?.cMessage}
                      onChange={handleInputs}
                      className="second_area" placeholder="MESSAGE"></textarea>
                  </div>
                  
                </div>

                
              </div>
                </>
              )
            }
            {
                 tabIndex === 3 && (
                  <div class="form">
                <div class="top-form">
                  <div class="inner-form">
                    <input 
                    style={contactwala1}
                      id="jName"
                      name="jName"
                      value={user?.jName}
                      onChange={handleInputs}
                      type="text" placeholder="Full Name*" />
                  </div>
                  <div class="inner-form">
                    <input 
                    style={contactwala1}
                      id="jExperience"
                      name="jExperience"
                      value={user?.jExperience}
                      onChange={handleInputs}
                      type="text" placeholder="Ecperience in Years*" />
                  </div>
                 
                </div>
                <div class="top-form">
                  <div class="inner-form">
                    <input 
                    style={contactwala1}
                      id="jWebsite"
                      name="jWebsite"
                      value={user?.jWebsite}
                      onChange={handleInputs}
                      type="text" placeholder="Website*" />
                  </div>
                  <div class="inner-form">
                    <input 
                    style={contactwala1}
                      id="jPhone"
                      name="jPhone"
                      value={user?.jPhone}
                      onChange={handleInputs}
                      type="text" placeholder="Phone*" />
                  </div>
                 
                </div>

                <div class="top-form">
                  <div class="inner-form">
                    <input 
                    style={contactwala1}
                      id="jEmailAddress"
                      name="jEmailAddress"
                      value={user?.jEmailAddress}
                      onChange={handleInputs}
                      type="text" placeholder="Email Address*" />
                  </div>
                  <div class="inner-form">
                    <input 
                    style={contactwala1}
                      id="jLocation"
                      name="jLocation"
                      value={user?.jLocation}
                      onChange={handleInputs}
                      type="text" placeholder="Location*" />
                  </div>
                 
                </div>

                <div class="bottom-form">
                  <div class="inner-form">
                     <select style={contactwala1} name="jCurrentState" id="oldsel" value={user?.jCurrentState}>
                        <option value="">Current State</option>
                     </select>
                  </div>
                  
                </div>

                <div class="bottom-form">
                  <div class="inner-form">
                     <select style={contactwala1} name="jHighestQualification" id="oldsel" value={user?.jHighestQualification}>
                        <option value="">Highest Qualification</option>
                     </select>
                  </div>
                  
                </div>

                <div class="bottom-form">
                  <div class="inner-form">
                     <select style={contactwala1} name="jPostAppliedFor" id="oldsel" value={user?.jPostAppliedFor}>
                        <option value="">Post Applied For</option>
                     </select>
                  </div>
                  
                </div>

                <div class="bottom-form">
                  <div class="inner-form">
                  <input
                  style={contactwala1} 
                    id="jDomainWorkOn"
                    name="jDomainWorkOn"
                    value={user?.jDomainWorkOn}
                    onChange={handleInputs}
                    type="text" className="inus" placeholder="Domain Work On*"></input>
                  </div>
                  
                </div>

                {/* <div class="bottom-form">
                  <div class="inner-form">
                  <input type="file" className="inus" placeholder="Domain Work On*"></input>
                  </div>
                  
                </div> */}

                <div class="bottom-form">
                  <div class="inner-form">
                    <textarea 
                    style={contactwala1}
                      id="jMessage"
                      name="jMessage"
                      value={user?.jMessage}
                      onChange={handleInputs}
                      className="second_area" placeholder="MESSAGE"></textarea>
                  </div>
                  
                </div>
              </div>
                 )
            }
            {
              tabIndex === 4 && (
                <>
                <div class="form">
                <div class="top-form">
                  <div class="inner-form">
                    <input 
                    style={contactwala1}
                      id="hName"
                      name="hName"
                      value={user?.hName}
                      onChange={handleInputs}
                      type="text" placeholder="Full Name*" />
                  </div>
                  <div class="inner-form">
                    <input 
                    style={contactwala1}
                      id="hCompanyName"
                      name="hCompanyName"
                      value={user?.hCompanyName}
                      onChange={handleInputs}
                      type="text" placeholder="Company Name*" />
                  </div>
                 
                </div>
                <div class="top-form">
                  <div class="inner-form">
                    <input 
                    style={contactwala1}
                      id="hEmailAddress"
                      name="hEmailAddress"
                      value={user?.hEmailAddress}
                      onChange={handleInputs}
                      type="text" placeholder="Email Address*" />
                  </div>
                  <div class="inner-form">
                    <input 
                    style={contactwala1}
                      id="hPhone"
                      name="hPhone"
                      value={user?.hPhone}
                      onChange={handleInputs}
                      type="text" placeholder="Phone*" />
                  </div>
                 
                </div>

                <div class="bottom-form">
                  <div class="inner-form">
                    <textarea 
                    style={contactwala1}
                      id="hMessage"
                      name="hMessage"
                      value={user?.hMessage}
                      onChange={handleInputs}
                      className="second_area" placeholder="MESSAGE"></textarea>
                  </div>
                  
                </div>

              </div>
                </>
              )
            }

            <button 
             style={contactwala2}
              type="submit"
              name="contact_btn"
              id="contact_btn"
              // onClick={postData}
              className="btn-form-contact">Send Message</button>
            </form>

            <div className="success-message" id="success-msg">
              <Alert severity="success">Your form has been submitted sucessfully... We will get back to you shortly.</Alert>
            </div>


            </div>

            

            {/* ============asit=========== */}
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
