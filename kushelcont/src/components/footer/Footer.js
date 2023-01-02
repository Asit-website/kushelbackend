import React from 'react'
import socialLinksApi from './socialLinksApi';
import ArtApi from './ArtApi';
import InvestmentApi from './InvestementApi';
import ResourcesApi from './ResourcesApi';
import { NavLink } from 'react-router-dom';
import AddressAvatarApi from './AddressAvatarApi';
import logo from '../images/logo.png';
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
            <div className='first-footer'>
               <div className="first_logo">
                  <img src={logo} alt="orange" />
               </div>
               <div className='second_logo'>
                  {
                    socialLinksApi.map((val)=>{

                        return(
                         <a rel="noreferrer" target="_blank" href={val.link}><img key={val.id} src={val.image} alt="google" /></a>
                        )
                    })
                  }
               </div>
            </div>

            <div className='second-footer'>
               <span>Arth</span>
               <div className='second-footer-para'>
               {
                ArtApi.map(val=>{
                  return (
                     <p>{val.Name}</p> 
                  )
                })
               }
               </div>
             
            </div>

            <div className='third-footer'>
            <span>Popular Investment</span>
            <div className="third-footer-para">
            {
              InvestmentApi.map(val=>{
                return(
                   <p>{val.Name}</p>
                )
              })
            }
            </div>
            </div>

            <div className='fourth-footer'>
            <span>Resources</span>
            <div className="fourth-footer-para">
            {
              ResourcesApi.map(val=>{
                return(
                  <p>{val.Name}</p>
                )
              })
            }
            </div>
            </div>

            <div className="fifth-footer">
              <span className='fifth-footer-span'>Contact Us</span>
              <div className='fifth-footer-para'>
                 {
                  AddressAvatarApi.map(val=>{
                    return(
                      <p key={val.id}><span><img style={{width:val.width}} src={val.image} alt="not" /></span>{val.Name}</p>
                    )
                  })
                 }
              </div>

              <div className="btnInp">
                   <form >
                      <input type="text" placeholder='Email Address'  />
                      <button>Submit</button>
                   </form>
              </div>
            </div>

        </div>

        <div className='lower-footer'>
         <hr  className="foot-line" />
         <div className='another-footer-section'>
            <div className='section-para'>
              <p>Copyrights © 2021 Kushel Digi Solutions. All rights reserved.</p>
            </div>
            <div>
            <div className="section-another-para">
                <NavLink to="/privacy"><p>Privacy Policy</p></NavLink>
               <NavLink to="/refund"> <p>Refund Policy</p></NavLink>
                {/* <p>Sitemap</p> */}
                <NavLink to="/quality"> <p>Quality Policy
</p></NavLink>
                {/* <p>Terms of Use</p> */}
            </div>
            <div className="section-another-para section-sm-ft">
                <NavLink to="/nda"><p>NDA Policy</p></NavLink>
                <NavLink to="/term"><p>Terms of Use</p></NavLink>
                <NavLink to="/seo"><p>Seo Audit</p></NavLink>
                <NavLink to="/environment"><p>Environment</p></NavLink>
            </div>
            </div>
         </div>
         </div>
      </footer>
    </>
  )
}

export default Footer