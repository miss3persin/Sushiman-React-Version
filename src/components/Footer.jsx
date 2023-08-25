import facebookIcon from '../assets/facebook.svg';
import instagramIcon from '../assets/instagram.svg';
import twitterIcon from '../assets/twitter.svg';

const Footer = () => {
  return (
    <>
        <footer className="footer flex-between">
  <h3 className="footer__logo"><span>Sushi</span>man</h3>
  
  <ul className="footer__nav">
    <li><a href="#menu">Menu</a></li>
    <li><a href="#food">Food</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#about-us">About Us</a></li>
  </ul>

  <ul className="footer__social">
    <li className="flex-center"><img src={facebookIcon} alt="facebook"/></li>
    <li className="flex-center"><img src={instagramIcon} alt="instagram"/></li>
    <li className="flex-center"><img src={twitterIcon} alt="twitter"/></li>
  </ul>

  </footer>
    </>
  )
}

export default Footer