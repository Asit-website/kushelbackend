import React,{useState} from 'react'
import services from '../components/images/services.png';
import kushelArrow from '../components/images/kushelArrow.png';
import kusta from '../components/images/kusta.png';
import put from '../components/images/put.png'
import game from '../components/images/game.png';
import app from '../components/images/app.png';
import dagi from '../components/images/dagi.png'
import chota from '../components/images/chota.png'
import web from '../components/images/web.png';
import ly from '../components/images/ly.png';
import rightArrow from '../components/images/rightArrow.png';
import log from "../components/images/log.png";
import reactJs from '../components/images/reactjs.png';
import nodejs from '../components/images/nodejs.png'
import angular from '../components/images/angular.png';
import html from '../components/images/html.png';
import sql from '../components/images/sql.png';
import php from '../components/images/php.png'
import nodsa from '../components/images/nodsa.png';
import laravel from '../components/images/laravel.png';
import mongodb from '../components/images/mongodb.png';
import mysql from '../components/images/mysql.png';
import xdas from '../components/images/xdas.png';
import figma from '../components/images/figma.png'
import sketch from '../components/images/sketch.png';
import photosop from '../components/images/photosop.png';
import illus from '../components/images/illus.png';

import mag from '../components/images/mag.png';
import word from '../components/images/word.png';
import bigcom from '../components/images/bigcom.png';
import ios from '../components/images/ios.png';
import android from '../components/images/android.png';
import hybrid from '../components/images/hybrid.png';
import { NavLink } from 'react-router-dom';
import aws2  from '../components/images/aws2.png';
import kubbaba from '../components/images/kubbaba.png';
import google from '../components/images/google.png';
import azuresir from '../components/images/azuresir.png';
import digi from '../components/images/digi.png';
import wordpress2 from '../components/images/wordpress2.png';
import es from '../components/images/es.png';
import thela from '../components/images/thela.png';
import magi from '../components/images/magi.png';
import laraji from '../components/images/laraji.png';
import seopop from '../components/images/seopop.png';
import pop from '../components/images/pop.png';
import meta2 from '../components/images/meta2.png';
import Mask5 from '../components/images/Mask5.png';
import vue2 from '../components/images/vue2.png';
import react3 from '../components/images/react3.png';
import ang from '../components/images/ang.png';
import html5 from '../components/images/html5.png';
import boots from '../components/images/boots.png';
const Service = () => {
   const [tabIndex, setTabIndex] = useState(1);

   const [tab,setTab] = useState(1);

   const [link,setLink] = useState(1);

   var css = {
       opacity:"1"
    };
  
    var secondCss = {
       opacity:"0.5"
    };

    var css1 = {
      opacity:"1"
    }

    var secondCss1 = {
      opacity:"0.5"
    }

   const tabChange = (e) =>{
      e.preventDefault();
      setTabIndex(1);
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

   const tabChange2 = (e) =>{
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
   }

   const tabChange3 = (e) =>{
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
   }

   const tabChang4 = (e) =>{
     e.preventDefault();
     setTab(1);
     for (var prop in secondCss1) {
      document.getElementById("campus").style[prop] = secondCss1[prop];
    }
    for (var prop in css1) {
      document.getElementById("bari").style[prop] = css1[prop];
    }
   }

   const tabChange5 = (e) =>{
     e.preventDefault();
     setTab(2);
     for (var prop in css1) {
      document.getElementById("campus").style[prop] = css1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("bari").style[prop] = secondCss1[prop];
    }
   }


   const css3 = {
      opacity:"1",
      borderBottom:"2px solid #ffffff"
    }
   
    const secondCss4 = {
      opacity:"0.6",
      borderBottom:"none"
    }
    const time = (e) =>{
      e.preventDefault();
      setLink(1);
      for (var prop in secondCss4) {
        document.getElementById("b").style[prop] = secondCss4[prop];
      }
      for (var prop in secondCss4) {
        document.getElementById("c").style[prop] = secondCss4[prop];
      }
      for (var prop in css3) {
        document.getElementById("a").style[prop] = css3[prop];
      }
   }
   
   const hired = (e) =>{
     e.preventDefault();
     setLink(2);
     for (var prop in css3) {
      document.getElementById("b").style[prop] = css3[prop];
    }
    for (var prop in secondCss4) {
      document.getElementById("a").style[prop] = secondCss4[prop];
    }
    for (var prop in secondCss4) {
      document.getElementById("c").style[prop] = secondCss4[prop];
    }
   }
   
   const fix = (e) =>{
     e.preventDefault();
     setLink(3);
     for (var prop in css3) {
      document.getElementById("c").style[prop] = css3[prop];
    }
    for (var prop in secondCss4) {
      document.getElementById("a").style[prop] = secondCss4[prop];
    }
    for (var prop in secondCss4) {
      document.getElementById("b").style[prop] = secondCss4[prop];
    }
   }
  
  return (
   <>
    <div className='kushel-service'>
        <div className="kushel-img">
            <h2>Our</h2>
            <img src={services} alt="services" />
        </div>
         
        <div className="web-app">
           <div className="mobile-app-cl">
              <div className="first-cl">
                 <div className="button-flex">
                 <div className="first-button-flex">
                     <h2>Web Design & Development</h2>
                     </div>
                     <div className="second-button-flex">
                     <button>Explore all Mobile Services</button>
                     </div>
                 </div>
                  <div className="line-flex">
                     <img className='dai' src={dagi} alt="" />
                     <div className="line-first-flex">
                        <h2 id='barier' onClick={tabChange} className='dev'>Front-end</h2>
                        <img className='chota-dai' src={chota} alt="" />
                        <h2 id='camp' onClick={tabChange2} className='anot-dev'>Back-end</h2>
                        <img className='chota-dai' src={chota} alt="" />
                        <h2 id='tamp' onClick={tabChange3} className='anot-dev'>Design</h2>
                     </div>
                     <img className='dai' src={dagi} alt="" />
                  </div>
                     {
                        tabIndex === 1 && (
                           <>
                           <div className="resarch-flex">
                      <div className="first-res">
                        <img className='hg'  src={react3} alt="jsa" />
                       <p>React</p>
                      </div>
                      <div className="first-res">
                        <img className='hg'  src={vue2} alt="web" />
                        <p>Vue</p>
                      
                      </div>
                      <div className="first-res">
                        <img className='hg'  src={ang} alt="goa" />
                        <p>Angular</p>
                      </div>
                      <div className="first-res">
                        <img className='hg'  src={html5} alt="prota" />
                        <p>HTML  <span>5</span> </p>
                      </div>
                      <div className="first-res">
                        <img className='hg'  src={boots} alt="prota" />
                        <p>Bootstrap</p>
                      </div>
                  </div>
                           </>
                        )
                     }

                     {
                        tabIndex === 2 && (
                           <>
                           <div className="resarch-flex">
                      <div className="first-res">
                        <img className='ant-sta' src={php} alt="jsa" />
                       
                      </div>
                      <div className="first-res">
                        <img className='ant-sta ant-status' src={nodsa} alt="web" />
                      
                      </div>
                      <div className="first-res">
                        <img className='ant-st'  src={laravel} alt="goa" />
                      </div>
                      <div className="first-res">
                        <img className='ant-big'  src={mongodb} alt="prota" />
                      </div>
                      <div className="first-res">
                        <img className='ant-st'  src={mysql} alt="prota" />
                      </div>
                  </div>
                           </>
                        )
                     }

                     {
                        tabIndex === 3 &&  (
                           <>
                           <div className="resarch-flex">
                      <div className="first-res">
                        <img className='ant-sta' src={xdas} alt="jsa" />
                       
                      </div>
                      <div className="first-res">
                        <img className='ant-sta ant-status' src={figma} alt="web" />
                      
                      </div>
                      <div className="first-res">
                        <img className='ant-st'  src={sketch} alt="goa" />
                      </div>
                      <div className="first-res">
                        <img className='ant-big'  src={photosop} alt="prota" />
                      </div>
                      <div className="first-res">
                        <img className='ant-big'  src={illus} alt="prota" />
                      </div>
                  </div>
                           </>
                        )
                     }
                 
               
              </div>

              <div className="second-cl">
                 <img src={web} alt="" />
              </div>
             
           </div>
           
        </div>


        <div className="first-kushel">
           <div className='kushel-first-content'>
              <h2>UI/UX Design</h2>
             
              <div className="kot">
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p >Interface Design</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>Interaction Design</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>Research</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>Prototyping</p>
                </div>
              </div>
              <NavLink to="/uiux">
              <div className="kus-img">
                <img src={kushelArrow} alt="kus" />
              </div>
              </NavLink>
           </div>
           <div className='kushel-second-content'>
              <h2>Graphic Design</h2>
              <div className="kot">
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p >Illustration Design</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p className='motion-gr'>Motion Graphics <br /> & Animations</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>Broucher Design</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>Logo Design</p>
                </div>
              </div>
              <div className="kus-img">
                <img src={kushelArrow} alt="kus" />
              </div>
           </div>
           <div className="kusta-img">
              <img src={kusta} alt="" />
           </div>
        </div>


        <div className="cloud-container">
        <div className="cloud-computing">
            <div className="first-cloud">
               <div className="cloud-button-flex">
                    <div className="cloud-first-button-flex">
                       <h2>Cloud Computing</h2>
                    </div>
                    <div className="cloud-second-button-flex">
                       <button>Explore Cloud Services</button>
                    </div>
               </div>

               <div className="hr-cloud">
                  <img  src={ly} alt="" />
               </div>

               <div className="flex-kot">
                   <div className='kot'>
                   <div className="kot-a">
                   <img  src={put} alt="" />
                   <p >Cloud App Development</p>
                </div>
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p>Cloud Configuration</p>
                </div>
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p >Cloud Integration</p>
                </div>
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p>Cloud Security</p>
                </div>
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p>Cloud Server Solutions</p>
                </div>
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p>Cloud Migration</p>
                </div>
                   </div>



                   <div className='kot-images-first'>
                       <div className="firstIm">
                          <img className='awsman'  src={aws2} alt="awsa" />
                          <p className='kota-p'>Amazon AWS</p>
                       </div>
                       <div className="secondIm">
                          <img className='kubman'  src={kubbaba} alt="kus" />
                          <p className='kota-p'>Kubernetes</p>
                       </div>
                       <div className="thirdIm">
                          <img className='cloudman' src={google} alt="gca" />
                          <p className='kota-p'>Google Cloud</p>
                       </div>
                   </div>
                   <div className='kot-images-second'>
                        <div className="fourth">
                           <img className='azut' src={azuresir} alt="mag" />
                           <p className='kota-p'>Microsoft Azure</p>
                        </div>
                        <div className="fifth">
                           <img className='digiman' src={digi} alt="" />
                           <p className='kota-p'>Digital Ocean</p>
                        </div>
                   </div>
               </div>
            </div>
        </div>
        <div className="other-services">
             <div className="iot">
                 <div className='first-iot'>
                     <p className='tree'>IOT App <br /> Development</p>
                 </div>
                 <div className="second-iot">
                   <img src={rightArrow} alt="rightcheck" />
                 </div>
             </div>
             <div className="wearable-app">
                 <div className="first-wear">
                    <p className='tree'>Wearable App <br />Development</p>
                 </div>
                 <div className="second-wear">
                   <img src={rightArrow} alt="rightcheck" />
                 </div>
             </div>
             <div className="ibeacon">
                 <div className="first-i">
                    <p className='tree'>iBeacon App <br /> Development</p>
                 </div>
                 <div className="second-i">
                 <img src={rightArrow} alt="rightcheck" />
                 </div>
             </div>
        </div>
        </div>


        <div className="mobile-app">
           <div className="mobile-app-cl">
              <div className="first-cl">
                 <div className="button-flex">
                 <div className="first-button-flex">
                     <h2>Mobile App Design & <br /> Development</h2>
                     </div>
                     <div className="second-button-flex">
                    <NavLink to="/mobileApp"><button>Explore all Mobile Services</button></NavLink> 
                     </div>
                 </div>
                  <div className="line-flex">
                     <img className='dai' src={dagi} alt="" />
                     <div className="line-first-flex">
                        <h2 onClick={tabChang4} id='bari' className='dev'>Development</h2>
                        <img className='chota-dai' src={chota} alt="" />
                        <h2 onClick={tabChange5} id='campus' className='anot-dev'>Design</h2>
                     </div>
                     <img className='dai' src={dagi} alt="" />
                  </div>
                  {
                     tab === 1 && (
                        <>
                        <div className="resarch-flex">
                      <div className="first-res">
                        <img className='ant-sta' src={ios} alt="jsa" />
                       
                      </div>
                      <div className="first-res">
                        <img className='ant-sta ant-status antcolony' src={android} alt="web" />
                      
                      </div>
                      <div className="first-res">
                        <img className='ant-st antserim'  src={hybrid} alt="goa" />
                      </div>
                      <div  className="first-res">
                        <img style={{visibility:'hidden'}} className='ant-big '  src={photosop} alt="prota" />
                      </div>
                      <div className="first-res">
                        <img style={{visibility:'hidden'}} className='ant-big'  src={illus} alt="prota" />
                      </div>
                  </div>
                        </>
                     )
                  }

                  {
                     tab === 2 && (
                        <>
                        <div className="resarch-flex">
                      <div className="first-res">
                        <img className='ant-sta' src={xdas} alt="jsa" />
                       
                      </div>
                      <div className="first-res">
                        <img className='ant-sta ant-status' src={figma} alt="web" />
                      
                      </div>
                      <div className="first-res">
                        <img className='ant-st'  src={sketch} alt="goa" />
                      </div>
                      <div  className="first-res">
                        <img style={{visibility:'hidden'}} className='ant-big'  src={photosop} alt="prota" />
                      </div>
                      <div className="first-res">
                        <img style={{visibility:'hidden'}} className='ant-big'  src={illus} alt="prota" />
                      </div>
                  </div>
                        </>
                     )
                  }
                  
              </div>

              <div className="second-cl">
                 <img src={app} alt="" />
              </div>
             
           </div>
           
        </div>

       
         
        <div className="cloud-container">
        <div className="cloud-computing">
            <div className="first-cloud">
               <div className="cloud-button-flex">
                    <div className="cloud-first-button-flex">
                       <h2>E-commerce</h2>
                    </div>
                    <div className="cloud-second-button-flex">
                       <button>Explore Cloud Services</button>
                    </div>
               </div>

               <div className="hr-cloud">
                  <img  src={ly} alt="" />
               </div>

               <div className="flex-kot">
                   <div className='kot'>
                   <div className="kot-a">
                   <img  src={put} alt="" />
                   <p >Wordpress</p>
                </div>
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p>magento</p>
                </div>
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p >Big commerce</p>
                </div>
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p >Shopify</p>
                </div>
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p>laravel</p>
                </div>
                   </div>



                   <div className='kot-images-first'>
                       <div className="firstIm">
                          <img className='wordman'  src={wordpress2} alt="awsa" />
                          <p className='kota-p'>Wordpress</p>
                       </div>
                       <div className="secondIm">
                          <img className='wordman'  src={es} alt="kus" />
                          <p className='kota-p'>Big Commerce</p>
                       </div>
                       <div className="thirdIm">
                          <img className='wordman' src={thela} alt="gca" />
                          <p className='kota-p'>Shopify</p>
                       </div>
                   </div>
                   <div className='kot-images-second'>
                        <div className="fourth">
                           <img className='wordman'  src={magi} alt="mag" />
                           <p className='kota-p'>Magento</p>
                        </div>
                        <div className="fifth">
                           <img className='wordman' src={laraji} alt="" />
                           <p className='kota-p'>Laravel</p>
                        </div>
                   </div>
               </div>
            </div>
        </div>
        <div className="other-services">
             <div className="iot">
                 <div className='first-iot'>
                     <img src={mag} alt="" />
                 </div>
                 <div className="second-iot">
                   <img src={rightArrow} alt="rightcheck" />
                 </div>
             </div>
             <div className="wearable-app">
                 <div className="first-wear">
                   <img src={word} alt="" />
                 </div>
                 <div className="second-wear">
                   <img src={rightArrow} alt="rightcheck" />
                 </div>
             </div>
             <div className="ibeacon">
                 <div className="first-i">
                    <img src={bigcom} alt="" />
                 </div>
                 <div className="second-i">
                 <img src={rightArrow} alt="rightcheck" />
                 </div>
             </div>
        </div>
        </div>

        <div className="gem-dev">
           <div className="first-game">
              <h2>Game<br/>Development</h2>
              <div className="kot">
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p >Mobile Game Development</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>Web Game Development</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>MMORPG</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>First person - Third person<br/>shooter</p>
                </div>
              </div>
              <div className="kus-img">
                <img src={kushelArrow} alt="kus" />
              </div>
           </div>
           <div className="second-game">
           <h2>Unity<br/>Development</h2>
              <div className="kot">
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p >Unity Development</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>Unity Synthetic Data</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>Unity Computer vision</p>
                </div>

                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>Unity Simulation</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>Industrial augmented reality</p>
                </div>
              </div>
              <div className="kus-img">
                <img src={kushelArrow} alt="kus" />
              </div>
           </div>
           <div className="game-img">
              <img src={game} alt="" />
           </div>
        </div>

        <div className="cloud-container exom">
        <div className="other-services">
             <div className="iot fiot">
                 <div className='first-iot'>
                     <img src={mag} alt="" />
                 </div>
                 <div className="second-iot">
                   <img src={rightArrow} alt="rightcheck" />
                 </div>
             </div>
             <div className="wearable-app wearhouse">
                 <div className="first-wear">
                   <img src={word} alt="" />
                 </div>
                 <div className="second-wear">
                   <img src={rightArrow} alt="rightcheck" />
                 </div>
             </div>
             <div className="ibeacon is">
                 <div className="first-i">
                    <img src={bigcom} alt="" />
                 </div>
                 <div className="second-i">
                 <img src={rightArrow} alt="rightcheck" />
                 </div>
             </div>
        </div>
        <div className="cloud-computing digital-marketing">
            <div className="first-cloud">
               <div className="cloud-button-flex">
                    <div className="cloud-first-button-flex">
                       <h2>Digital Marketing</h2>
                    </div>
                    <div className="cloud-second-button-flex">
                       <button>Explore Cloud Services</button>
                    </div>
               </div>

               <div className="hr-cloud">
                  <img  src={ly} alt="" />
               </div>

               <div className="flex-kot">
                   <div className='kot'>
                   <div className="kot-a">
                   <img  src={put} alt="" />
                   <p >SEO</p>
                </div>
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p>Meta</p>
                </div>
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p >Google ADS</p>
                </div>
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p >Instagram</p>
                </div>
                {/* <div className="kot-a">
                   <img  src={put} alt="" />
                   <p>laravel</p>
                </div> */}
                   </div>



                   <div className='kot-images-first'>
                       <div className="firstIm firstIm1">
                          <img className='wordman'  src={seopop} alt="awsa" />
                          <p className='kota-p'>SEO</p>
                       </div>
                       <div className="secondIm secondIm1">
                          <img className='wordman'  src={pop} alt="kus" />
                          <p className='kota-p'>Google ADS</p>
                       </div>
                      
                   </div>
                   <div className='kot-images-second'>
                        <div className="fourth fourth1">
                           <img className='wordman' src={meta2} alt="mag" />
                           <p className='kota-p'>Meta</p>
                        </div>
                        <div className="fifth fifth1">
                           <img className='wordman' src={Mask5} alt="" />
                           <p className='kota-p'>Instagram</p>
                        </div>
                   </div>
               </div>
            </div>
        </div>
    
        </div>

     <div className="submodel">
     <div className="two-div">
          <div className="one-color abs-color">
            <div className="span-group">
              <span>Can’t find a service you are </span>
              <span>looking for?</span>
            </div>
           <NavLink to="/service"><button>Explore All Services</button></NavLink>
          </div>
          <div className="ano-color ans-color">
            <div className="ano-group">
              <span>Want to hire a resource to </span>
              <span>work with you?</span>
            </div>
            <NavLink to="/hiring"><button>Hire team</button></NavLink>
          </div>
        </div>
        <div className="busta">
        <div className='bus-mod'>
        <h2>BUSINESS MODELS</h2>
        </div>
        <div className="three-business">
          <p id="a" onClick={time} className="first-b">Time & Material</p>
          <p id="b" onClick={hired} className="second-p">Hire Team</p>
          <p id="c" onClick={fix} className="third-p">Fix Scope Model</p>
        </div>

        {
         link === 1 && (
            <>
            <div className="pic-para">
          <div className="pic-imagea">
            <img src={log} alt="" />
          </div>
          <div className="head-pa">
            <h2>Time & Material</h2>
            <p>
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
         link === 2 && (
            <>
            <div className="pic-para">
          <div className="pic-imagea">
            <img src={log} alt="" />
          </div>
          <div className="head-pa">
            <h2>Hire Team</h2>
            <p>
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
         link === 3 && (
            <>
            <div className="pic-para">
          <div className="pic-imagea">
            <img src={log} alt="" />
          </div>
          <div className="head-pa">
            <h2>Fix Scope Model</h2>
            <p>
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

    </div>
  
    </>
    
  )
}

export default Service