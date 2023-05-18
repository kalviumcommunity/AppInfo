import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Images/header/logo.svg";
import './footer.css'


function Footer() {
  return (
    <div style={{marginTop:"87vh", borderTop:"3px solid green"}}>
      <footer style={{display:"flex", flexDirection:"column", marginTop:"", justifyContent:"center", alignItems:"center", backgroundColor:"black"}}>
        <div className="footer" style={{backgroundColor:"black",display:"flex",flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
        <div className="logo-footer" style={{width:"50%", backgroundColor:"black"}}>
          <div className="logo-text" style={{backgroundColor:"black",display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <img src={logo} alt=""  style={{backgroundColor:"black", width:"20%", marginTop:"4vh", marginBottom:"2vh"}}/>
            <p style={{marginRight:"0%",width:"80%" ,textAlign:"center", marginTop:"1vh",fontSize:"large", color:"white", backgroundColor:"transparent"}}>A website which provides comprehensive information about any uploaded APK file, including details about the app's package, version, permissions, and signatures. We also offer security assessments, code analysis, user reviews, and FAQs to help you make informed decisions about installing and using the APK.</p>
          </div>
          <h1 className="sub-heading" style={{margin:"auto"}}><span>Socials,</span></h1>
          <div style={{display:"flex", justifyContent:"center", gap:"3vw", marginTop:"5%", backgroundColor:"black"}}>
            <Link to={"https://www.linkedin.com"} target="_blank">
              <FaLinkedin className="login" style={{ backgroundColor: "black", color:"white" }} />
            </Link>
            <Link to={"https://www.instagram.com"}>
              <FaInstagram className="login" style={{ backgroundColor: "black", color:"white" }} />
            </Link>
            <Link to={"https://twitter.com"}>
              <FaTwitter className="login" style={{ backgroundColor: "black", color:"white" }} />
            </Link>
          </div>
        </div>
        <div className="logo-footer2" style={{width:"50%",backgroundColor:"black", display:"flex", justifyContent:"space-evenly", flexDirection:"column"}}>
          <div className="logo-text2" style={{backgroundColor:"black",display:"none",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <img src={logo} alt=""  style={{backgroundColor:"black", width:"20%", marginTop:"4vh", marginBottom:"2vh"}}/>
            <p style={{marginRight:"0%",width:"100%" ,textAlign:"center", marginTop:"1vh",fontSize:"medium", color:"white", backgroundColor:"transparent"}}>A website which provides comprehensive information about any uploaded APK file, including details about the app's package, version, permissions, and signatures. We also offer security assessments, code analysis, user reviews, and FAQs to help you make informed decisions about installing and using the APK.</p>
          </div>
          <div style={{display:"flex", flexDirection:"column", backgroundColor:"transparent"}}>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", backgroundColor:"transparent"}}>
              <h2 className="heading" style={{fontSize:"xx-large", marginLeft:"9%"}}>Subscribe to Our News Letter,</h2>
              <form className="news-latter" style={{ width:"80%", backgroundColor:"transparent"}}>
                <input className="about-input" style={{width:"50%"}} type="email" id="mail" placeholder="Enter Your Email"/>
                <button className="about-login" style={{marginLeft:"-25%", width:"24%"}}><a id="btn-text" href="mailto:apk.info@gmail.com"> Subscribe</a></button>
              </form>
            </div>
            <div className="options" style={{display:"flex", flexDirection:"row", marginTop:"2vh", marginLeft:"9%"}}>
              <div style={{backgroundColor:"black",width:"50%", display:"flex",flexDirection:"column", alignItems:"left"}}>
                <h2 style={{backgroundColor:"transparent", textAlign:"left",marginBottom:"2%"}}><span className="links">Important Links</span></h2>
                <li style={{color:"white", backgroundColor:"transparent", marginBottom:".6vh"}}><Link className="links" to={"/"} onClick={() => window.scrollTo(0, 0)} style={{fontSize:"20px"}}>Home</Link></li>
                <li style={{color:"white", backgroundColor:"transparent", marginBottom:".6vh"}}><Link className="links" to={"/about"} onClick={() => window.scrollTo(0, 0)} style={{fontSize:"20px"}}>About</Link></li>
                <li style={{color:"white", backgroundColor:"transparent", marginBottom:".6vh"}}><Link className="links" to={"/guides"} onClick={() => window.scrollTo(0, 0)} style={{fontSize:"20px"}}>Rules</Link></li>
              </div>
              <div style={{backgroundColor:"black",width:"50%", display:"flex",flexDirection:"column", alignItems:"left"}}>
                <h2 style={{backgroundColor:"transparent", textAlign:"left",marginBottom:"2%"}}><span className="links">Policies and FAQ's</span></h2>
                <li style={{color:"white", backgroundColor:"transparent", marginBottom:".6vh"}}><Link className="links" to={"/faq"} onClick={() => window.scrollTo(0, 0)} style={{fontSize:"20px"}}>FAQ</Link></li>
                <li style={{color:"white", backgroundColor:"transparent", marginBottom:".6vh"}}><Link className="links" to={"/t&c"} onClick={() => window.scrollTo(0, 0)} style={{fontSize:"20px"}}>T&C</Link></li>
                <li style={{color:"white", backgroundColor:"transparent", marginBottom:".6vh"}}><Link className="links" to={"/cookiepolicy"} onClick={() => window.scrollTo(0, 0)} style={{fontSize:"20px"}}>Cookie Policy</Link></li>
                <li style={{color:"white", backgroundColor:"transparent", marginBottom:".6vh"}}><Link className="links" to={"/privacypolicy"} onClick={() => window.scrollTo(0, 0)} style={{fontSize:"20px"}}>Privacy Policy</Link></li>
                <li style={{color:"white", backgroundColor:"transparent", marginBottom:".6vh"}}><Link className="links" to={"/accessibilitypolicy"} onClick={() => window.scrollTo(0, 0)} style={{fontSize:"20px"}}>Accessibility Policy</Link></li>
              </div>
            </div>
          </div>
        </div>
        </div>
        <h2 style={{textAlign:"right", color:"rgb(130 130 130)", backgroundColor:"black",fontSize:"large", marginTop:"1%", marginBottom:"2%"}}>
          © CopyRight 2023 APK INFO
        </h2>
      </footer>
    </div>
  );
}

export default Footer;