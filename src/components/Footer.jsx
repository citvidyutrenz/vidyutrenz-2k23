// import React from "react";
// import "./footer.css";
// import Logo from './assets/react.svg'
// import { FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";
// import citLogo from "./assets/citTransLogo2.png";

// function Footer() {
//   return (
//     <footer className='footer ' style={{height : "50%"}}>
//       <div className='row' >
//       <div className="col-4 col-md-12 col-sm-12  mt-3 mb-3 ms-5">
//         <div className='w-25 mx-auto'>
//            <a href='#' target="_blank"><img src={citLogo} alt="Logo" /></a>
//         </div>
//       </div>

//       <div className="col-4 col-md-6 col-sm-6 mt-3 mb-3  text-center">
//         <h4>AROUND THE WEB</h4>
//         <div className='container mt-2'>
//             <a href="https://www.youtube.com/"><FaYoutube className="ms-5 me-5 " style={{ fontSize: '32px' }} /> </a>
//             <a href="https://www.instagram.com/"><FaInstagram className="ms-5 me-5" style={{ fontSize: '32px' }} /></a>
//             <a href="https://www.linkedin.com/"><FaLinkedinIn className="ms-5 me-5" style={{ fontSize: '32px' }} /></a>
//             <a href="https://play.google.com/store"><SiGmail className="ms-5 me-5" style={{ fontSize: '32px' }} /></a>
//             {/* <a href="#"><FaTwitter className="icon"/></a> */}
//         </div>
//       </div>

//       <div className="footer__committe col-4 col-md-6 col-sm-6  mt-3 mb-3">
//         <h4>ABOUT</h4>
//         <a href="#">College</a>
//         <a href='#'>Department</a>
//         <a href='#'>Symposium</a>
//       </div>
//      </div>
//       {/* <p>&copy; VIDYUTRENZ</p> */}
//     </footer>
   
//   );
// }

// export default Footer;

import React from "react";
import "../location.css";
import { FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import citLogo from "../assets/img/citTransLogo2.png";
// citTransLogo2.png
export const Footer = ()=>{
  return (
    <footer className='footer ' style={{height : "80%"}}>
      <div className='container'>
        <div className='row'>
          <div className="col-12 col-md-4 mb-3">
            <div className='w-50 mx-auto '>
               <a href='#' target="_blank" ><img src={citLogo} alt="Logo" /></a>
            </div>
          </div>

          <div className="col-6 col-md-4 text-center">
            <h4>AROUND THE WEB</h4>
            <div className='links__container'>
                <a href="https://www.youtube.com/" className="a"><FaYoutube className="ms-3 ms-md-5 me-3 me-md-5 mt-2 mb-2" style={{ fontSize: '20px',color:'#fff'}} /> </a>
                <a href="https://www.instagram.com/" className="a"><FaInstagram className="ms-3 ms-md-5 me-3 me-md-5 mt-2 mb-2" style={{ fontSize: '16px', }} /></a>
                <a href="https://www.linkedin.com/" className="a"><FaLinkedinIn className="ms-3 ms-md-5 me-3 me-md-5 mt-2 mb-2" style={{ fontSize: '16px' }} /></a>
                <a href="https://play.google.com/store" className="a"><SiGmail className="ms-3 ms-md-5 me-3 me-md-5 mt-2 mb-2" style={{ fontSize: '16px' }} /></a>
            </div>
          </div>

          <div className="col-6 col-md-4 footer__committe">
            <h4>ABOUT</h4>
            <a href="#">College</a>
            <a href='#'>Department</a>
            <a href='#'>Symposium</a>
          </div>
        </div>
      </div>
      {/* <p>&copy; VIDYUTRENZ</p> */}
    </footer>
  );
}


