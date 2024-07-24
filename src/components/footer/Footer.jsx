
import { FaLinkedinIn,FaGithub,FaInstagram } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import "../footer/footer.css"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
        <footer id="contact-us">
        <div className="footer_content">
          <div className="footer_left">
            <h2>Food.com</h2>
            <p>
              
Healthy food provides essential nutrients, boosts energy, and supports overall well-being. It includes fruits, vegetables, whole grains, and lean proteins.
            </p>
            <div className="footer_social">
             <Link to="https://github.com/harshal0151/FoodBookingAI-Recipes-Generator"> <FaGithub/></Link>
              <Link to= "https://www.linkedin.com/in/harshal-patil-187a87245/"><FaLinkedinIn/></Link>
              <Link to= "https://portfolio-harshal-jldur6pn7-harshal0151s-projects.vercel.app/" ><ImProfile/></Link>
            </div>
          </div>
          <div className="footer_center">
            <h2>company</h2>
            <ul>
              <Link><li>Home</li></Link>
              <Link><li>About us</li></Link>
              <Link><li>Delivery</li></Link>
             <Link> <li>Privacy policy</li></Link>
            </ul>
          </div>
          <div className="footer_right">
            <h2>Get in touch</h2>
            <ul>
              <li>+91 7470917488</li>
              <li>patidaruttam74@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr/>
        <p className="footer_copy-right">Copyright 2024 © || Uttam Patidar - All Right Reserved.</p>
        </footer>
    </>
  );
}

export default Footer;