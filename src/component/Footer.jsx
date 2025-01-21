// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../assets/Kds logo 1 (3).png'
import camera from '../assets/camera.png'
import prist from '../assets/prist.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/tiwtter.png'
import linkdien from '../assets/linkdien.png'
// import wallpaper from '../assets/wallpaper.png'
const Footer = () => {
  return (
    <>
     <section className='FooterSection'>
    <div className='FooterMainDiv'>
<div className='footerLogo' >
   <div>
    <img src={logo} alt="" />
    </div> 
    <p>Revolutionizing Your Business Through Technology </p>
</div>
{/* services */}
     <div className='footerDiv'>
  <p>
    Services
  </p>
 <ul>
 <li>Mobile App development</li>
 <li>  E-Commerce Development</li>
 <li>Website Development</li>
 <li>Digital Marketing</li>
 <li>UI/UX Designer</li>
 <li>Graphics Design</li>
 <li>Staff Augmentation</li>
 <li>Multi-Level Marketing</li>
 </ul>
</div> 
{/* comapany  */}
<div className='footerDiv' style={{paddingBottom:"30px"}}>
  <p>
Company
  </p>
 <ul>
 <li>About Us</li>
 <li>Career</li>
 <li>Hiring</li>
 <li>Privacy Policy</li>
 <li>Cookies Policy</li>
 <li>Terms of Services</li>
 <li>FAQs</li>  
 </ul>
</div> 
{/* Contact us */}
<div className='footerDiv' style={{paddingBottom:"60px"}}>
  <p>
  Contact us
  </p>
 <ul>  
 <li>Sales: <br /> <b>Info@Kusheldigi.com</b></li>
 <li> Mobile: <br /> <b>+919045301704</b></li>
 
 </ul>
</div>  
    </div>
    <section className='footSection'>
      <div className='footDivv'>
       <div> <p><b>
        India Office Address
        </b> G-9, First Floor, Sector-63, Noida-201301</p>
</div>
<div><p><b>USA Office Address </b> G-9, First Floor, Sector-63,Noida-201301</p></div>
      </div>
      <div className='iframeDiv'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.024544018201!2d77.3815284109692!3d28.629026484138528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce49f5d8cdc4b%3A0xedb207949cd07d2b!2sKushel%20Digi%20Solutions%20%7C%20E-commerce%20Web%20Development%20%7C%20Web%20Design%20%26%20App%20Development%20Company!5e0!3m2!1sen!2sin!4v1737011213629!5m2!1sen!2sin"
        width="450"
        height="320"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map Location"
      ></iframe>
      </div>
    </section>
     </section>
     <section>
     <div className='lastFooter'>
     <div>
        <img src={camera} alt="" />
        <img src={prist} alt="" />
        <img src={linkdien} alt="" />
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
      </div>
      <div>
        <button className='footButton1'>Back to Top <i className="ri-arrow-up-s-line"></i></button>
      </div>
      <div>
        <p>@2023Kusheldigi.AllRightsResercved</p>
      </div>
     </div>
     </section>
    </>
  )
}

export default Footer