import React from 'react'
import insi from '../components/images/in.png';
import group2 from '../components/images/group2.png';
import blog from '../components/images/blog.png';
import group3 from '../components/images/group3.png';
import group4 from '../components/images/group4.png';
const Insights = () => {
  return (
    <>
    <div className="insights">
         <div className="insights-flex">
             <div className="insight-menu">
                 <p className='ins'>Insights</p>
                 <div className="leteer-menu">
                     <p>All</p>
                     <p>Blog</p>
                     <p>Podcasts</p>
                     <p>Infographics</p>
                     <p>Whitepapers</p>
                     <p>Videos</p>
                 </div>
             </div>
             <div className="insight-fard">
             <div className="insight-card">
                <div className="card-1-in">
                <div className="butma">
                    <button>Blog</button>
                </div>
                   <img src={insi} alt="" />
                   <p>Cross-platform App Development — Should <br />
Startups Invest in it or Not?</p>
                </div>
                <div className="card-1-in">
                <div className="butmas">
                    <button>Blog</button>
                </div>
                <img src={group2} alt="" />
                   <p>How to Choose The Right Front-End Framework <br />
For Your Next Web.„</p>
                </div>
             </div>
             <div className="insight-card card-in">
                <div className="card-1-in">
                <div className="butma">
                    <button className='pod'>PodCast</button>
                </div>
                   <img src={group3} alt="" />
                   <p>Cross-platform App Development — Should <br />
Startups Invest in it or Not?</p>
                </div>
                <div className="card-1-in">
                <div className="butmas">
                    <button className='pod'>Podcast</button>
                </div>
                <img src={group4} alt="" />
                   <p>How to Choose The Right Front-End Framework <br />
For Your Next Web.„</p>
                </div>
             </div>

             <div className="insight-card card-in">
                <div className="card-1-in">
                <div className="butma">
                    <button>Blog</button>
                </div>
                   <img src={insi} alt="" />
                   <p>Cross-platform App Development — Should <br />
Startups Invest in it or Not?</p>
                </div>
                <div className="card-1-in">
                <div className="butmas">
                    <button>Blog</button>
                </div>
                <img src={group2} alt="" />
                   <p>How to Choose The Right Front-End Framework <br />
For Your Next Web.„</p>
                </div>
             </div>

             <div className="insight-card card-in">
                <div className="card-1-in">
                <div className="butma">
                    <button className='pod'>PodCast</button>
                </div>
                   <img src={group3} alt="" />
                   <p>Cross-platform App Development — Should <br />
Startups Invest in it or Not?</p>
                </div>
                <div className="card-1-in">
                <div className="butmas">
                    <button className='pod'>Podcast</button>
                </div>
                <img src={group4} alt="" />
                   <p>How to Choose The Right Front-End Framework <br />
For Your Next Web.„</p>
                </div>
             </div>

             <div className="insight-card card-in">
                <div className="card-1-in">
                <div className="butma">
                    <button>Blog</button>
                </div>
                   <img src={insi} alt="" />
                   <p>Cross-platform App Development — Should <br />
Startups Invest in it or Not?</p>
                </div>
                <div className="card-1-in">
                <div className="butmas">
                    <button>Blog</button>
                </div>
                <img src={group2} alt="" />
                   <p>How to Choose The Right Front-End Framework <br />
For Your Next Web.„</p>
                </div>
             </div>

             </div>
         </div>
    </div>
    </>
  )
}

export default Insights