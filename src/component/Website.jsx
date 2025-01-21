// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import style from '../assets/Kds logo 1 (3).png'
import banner from '../assets/laptop.png'
import star from '../assets/star1.png'
import technology from '../assets/img_services-02.png 1.png'
import scale from '../assets/product care.png'
import driven from '../assets/driven.png'
import vector from '../assets/Vector Smart Object 3.png'
import image11 from '../assets/image14.png'
import image12 from '../assets/image12.png'
import image13 from '../assets/image13.png'
import focus from '../assets/focus.png'
import market from '../assets/market.png'
import risk from '../assets/risk.png'
import growth from '../assets/growth.png'
import left from '../assets/Layer 3 (3).png'
import right from '../assets/Layer 4 (2).png'

const Website = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
  return (
    <>
   {/* firstRow  */}
    <header className="header">
        <div className='logo-container'>
          <img src={style} alt="" />
        </div>
     
        <div className={`nav-container ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav">
              <li>About Us</li>
              <li>Services</li>
              <li>Solutions</li>
              <li>Industries</li>
              <li>Case Studies</li>
              <li>Blog</li>
              <li>Hire</li>
              <li className="contact">Contact Us</li>
            </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
     {/* firstRow end */}

     {/* Second Row start  */}
    <section className="secondSec">
<div className="secondDiv">
   <h1> Your path to  <br/> <span className="secondSpan"> product</span> success</h1>
   <a href="">  <button className="btn"><span>CONSULT YOUR IDEA</span>  <i className="ri-arrow-right-line right"></i> </button> </a>
</div>
<div className="secondDiv1">
    <p>Launch a <b>new product</b> on the market and  win your future customers interest (and loyalty!) with a solid digital <b> product strategy</b> and a long-term innovation plan.</p>
</div>
    </section>
     {/* secondRow end  */}

     {/*  thirdRow row */}
     <div className="divImg">
   <img src={banner} alt="" />
     </div>
     {/*  thirdRow End  */}


     {/*  fourthRow start */}
       <br/> 
       <section className="sec">
        <div className="fourthSec">
         {/* <!--left section--> */}
         <div className="forthDiv">
             <p className="forthPara">What you get  </p>
        <div className="hr2"><hr/></div>
             <p className="forthP">With our UI design services, you receive more than  just attractive interfaces  you gain a partner  committed to understanding your business and  users.</p>
             <button className="btn2">Start Your Project <i className="ri-arrow-right-line"></i></button>
         </div>
         {/* <!-- rightSection --> */}
       
         <div className="mainDiv">
             <div className="divForthRow">
                <div className="div_Img">
                    <span className="forthRowSpan">01</span>
                    <span>
                        <img src={star} alt="" style={{height:"40px" ,width:"40px"}}/>
                    </span>
                </div>
                 <div className="divForthContent">
             <p className="divP">Reliable partnership 
                 model</p>
                 <p className="divPara">Ensure your project’s success with a dedicated team of experts.  Let’s ask difficult questions and dig deeper to truly understand  the essence of your product. We don’t just work for you;  we partner with you!</p>
            </div>
        </div>
        <div className="divForthRow">
            <div className="div_Img">
                  <span className="forthRowSpan">02</span>
                     <span>
                     <img src={technology} alt="" style={{height:"40px" ,width:"40px"}}/>
                     </span>
                  
                 </div>
                <div className="divForthContent">
                 <p className="divP"> Architecture & technology consultations
                     model</p>
                     <p className="divPara">Whatever your needs are, we ensure the technology perfectly aligns with your product. Our Project Technical Team provides comprehensive system setup, technology health checks, and enhancement support.</p>
                </div>
             </div> 
             <div className="divForthRow">
               
                 <div className="div_Img">
                  
                     <span className="forthRowSpan">03</span>
                     <span>
                        <img src={scale} alt="" style={{height:"40px" ,width:"40px"}}/>
                    </span>
                    
                 </div>
                <div className="divForthContent">
                 <p className="divP">Product care & scale</p>
                     <p className="divPara">Let us handle the weight of product strategy. We’ll focus on your target audience, craft robust business models, provide market insights, and set clear milestones. All to ensure your product stays on track from inception to success.</p>
                </div>
               
                  </div> 
                  <div className="divForthRow">
                 <div className="div_Img">
                      <span className="forthRowSpan">04</span>
                     <span>
                        <img src={driven} alt="" style={{height:"40px" ,width:"40px"}}/>
                    </span>
                 
                 </div>
               <div className="divForthContent">
                 <p className="divP">The innovation-driven experts onboard</p>
                     <p className="divPara">By partnering with us, you access the forefront of technological innovation, from Generative AI and NLP to machine learning. Leverage the latest advancements to stay competitive and deliver unmatched value to your customers.</p>
               </div>
     </div>
        </div>
  </div>
        </section>

        {/* <!-- eightRow start --> */}
            <br/> <br/>                      
            <section className="eightSec">
                <div className="eightDiv">
                    <p className="eightP">Discover your unique journey  from idea to a meaningful  product and constant innovation</p>
                  <img src={vector} alt="" />
                </div>
               <div className="eighthDiv">
                <div className="eight_Div">
                    <p className="eightPar">01</p>
                    <p className="eightPa">Launch with confidence</p>
                    <p className="eightPara">Accelerate product release by defining its reason-to-believe, assessing feasibility, and setting  a budget for launch and growth. Partner with Miquido’s strategy experts to explore key trends and opportunities.</p>
                </div>
                <div className="eight_Div">
                    <p className="eightPar">02</p>
                    <p className="eightPa">Scale-up in the right direction.</p>
                    <p  className="eightPara">Expand the market by implementing growth-hacking methods and improving UX. Learn  and discover new opportunities.</p>
                </div>
                <div className="eight_Div">
                    <p className="eightPar">03</p>
                    <p className="eightPa">Receive constant support</p>
<p  className="eightPara">Have a real partner on your side  throughout the discovery, testing  and growth journey. Ensure the  right product’s development in all aspects: technical, software,  innovation and market needs fit.</p>
                </div>
               </div>
            </section>
            {/* <!-- eightRow end --> */}
<br/> <br/>

{/* <!-- ninthRow start --> */}
            <div className="nineDiv">
                <p className="ninePa">Product strategy  consulting Services</p>
                <p className="ninePara">The technology world is evolving by the minute, that’s  why our product strategy consultants focus on tracking  trends and market shifts to identify new opportunities  for product development.</p>
            </div>
        
             <section className="nineSec">
              <div className="ninthDiv">
                    <div className="ninthRowDiv">
                  <p className="ninthRowP">Market & user research</p>
                        <p className="ninthRowPara">Identify Major competitors through  comprehensive research, pinpoint current trends and segment the market to pick the right audience</p>
                    </div>
                    <div className="ninthRowDiv">
                        <p className="ninthRowP">Idea Validation</p>
                        <p className="ninthRowPara">Employ well-known frameworks like market validation, jobs to be done, user personas</p>
                    </div>
                    <div className="ninthRowDiv">
                        <p className="ninthRowP">Proof of concept creation</p>
                        <p className="ninthRowPara">Accelerate product release by  defining  its reason-to-believe, assessing feasibility, and setting a  budget for launch and growth.</p>
                    </div>
                </div>
             </section>
             
             <section className="nineSec">
                <div className="ninthDiv">
                      <div className="ninthRowDiv">
                    <p className="ninthRowP">Prototype and  MVP building</p>
                          <p className="ninthRowPara">Discover how to build your product  and how much effort it will require.</p>
                      </div>
                      <div className="ninthRowDiv">
                          <p className="ninthRowP">Roadmap and product backlog relation establishemnt</p>
                          <p className="ninthRowPara">Let both tools complement each  other to improve the information  and plan flow among stakeholders.</p>
                      </div>
                      <div className="ninthRowDiv">
                          <p className="ninthRowP">Product Analytics</p>
                          <p className="ninthRowPara">Gain insights into user behavior and  product performance to guide data-driven decisions.</p>
                      </div>
                  </div>
               </section>
               <hr/>
               {/* <!-- nine Row end --> */}


               {/* <!-- tenRow start --> */}
                 <br/> <br/>
                 <div className="tenRowDiv1">
                   <div className="tenDivRow">
                    <p className="tenPRow">Check our top notch  designs</p>
                    <p className="tenParaRow">Discover our client <b>success stories</b>. See the <b>
                        challenges
                    </b>  we overcome and the <b>solutions</b>that led to exceptional  business results.</p>
                   </div>
                   <div className="elevenRowDiv">
                  
                  <div>
                <img src={image11} alt="" />
                  </div>
                 
                 <div><img src={image12} alt="" /></div>
                 <div>
                    <img src={image13} alt=""/>
                 </div>
                 <div>
                    <img src={image11} alt=""/>
                 </div>
                   </div>

                   <br/><br/>
              <div className="buttonDiv">
               <button className="btn3">EXPLORE OUR PORTFOLIO
                   <i className="ri-arrow-right-line"></i>
                </button>
              </div>
              </div>
        
                   {/* tenRow end */}

                   {/* <!-- twelve Row --> */}
                  <section className="twelveRowSection">
                    <div className="divTwelve">
                       <p className="paragraphTwel">
                        Why you need a product <b>strategy</b> & <b>roadmap</b>
                       </p>
                    </div>

                  
                    <div className="twelveRowDiv">
                        <div className="twelDiv">
                            <div className="twelvDiv">
                                <img src={focus} alt=""/> 
                                <p className="twelveP">Clarity and Focus</p>
                                <p className="twelvePara">Gain a clear direction for your e-commerce platform. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                             </div>
                             <div className="twelvDiv">
                                <img src={market} alt=""/>
                                <p className="twelveP">Market Relevance</p>
                                <p className="twelvePara">Gain a clear direction for your e-commerce platform. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                        </div>
                            
                        </div>
                       <div className="twelDiv">

                        <div className="twelvDiv">
                            <img src={risk} alt=""/>
                            <p className="twelveP">
                             Risk Mitigation
                            </p>
                            <p className="twelvePara">Gain a clear direction for your e-commerce platform. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                       
                            <div className="twelvDiv">
                                <img src={growth} alt=""/>
                                <p className="twelveP">Scalable Growth</p>
                                <p className="twelvePara">Gain a clear direction for your e-commerce platform. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                       </div>
                    </div>
                   </section>

                   {/* <!-- thirdyRow start --> */}

                

<section>
   <div className="thirtyRowDiv">
   <h5 className='title1'>Our Process</h5>
 
   <div className='process1'>
    <article className='article1'>
    <div className='step1'>
    <div className='number1'>1</div>
    <div className='line1'></div>
    <p className="para1">Consulation</p>
    <p className="para2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>                                   
    <div className='step1'>
        <div className='number1'>2</div>
        <div className='line1'></div>
        <p className="para1">Design & Development</p>
        <p className="para2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    </article>
    <article className='article1'>
    <div className='step1'>
        <div className='number1'>3</div>
        <div className='line1'></div>
        <p className="para1">Testing & Launch</p>
        <p className="para2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
    </div>
    <div className='step1'>
        <div className='number1'>4</div>
        <div className='line1'></div>
        <p className="para1">
            Support & Growth
        </p>
        <p className="para2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    </article>
   </div>
   </div>
</section>
<br /> <br/> <br/>
<section className='fortyySecRow'>
    <div className='fortyyDivMain'>
        <div className='fortyImg'><img src={left} alt=""  style={{height:'100%'}}/></div>
      <div className='ForttyDiv'>
      <p className='fortyyPara'><b>Struggling</b> to decide? Connect with us to see if we’re the <b> right</b> fit.</p>
      <div className='fortyyDivB'>
      <button className='fortyBtn'>Lets Connect    <i className="ri-arrow-right-line"></i></button>
      </div>
      </div>
        <div className='fortyImg'>
            <img src={right} alt="image"/>
        </div>
    </div>
</section>
{/* formSection */}
   
    </>
  )
}

export default Website