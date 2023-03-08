import React from 'react';
import './Footer.scss';
import Facebook from '../../assets/images/facebook.svg';
import Twitter from '../../assets/images/twitter.svg';
import Instagram from '../../assets/images/instagram.svg';
import Linkedin from '../../assets/images/linkedin.svg';
import Logo from '../../assets/images/logo.svg';


export const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div id="contact" className="footer">
        <div className="footer__container">
            <div>
                <img className="footer__logo" src={Logo} alt="logo"/>
                <p className="footer__logo-text">But i must explain to you all this mistaken </p>
                <p className="footer__logo-text"> idea of dencouncing pleasure.</p>
            </div>
            <div className="footer__blocks">
                <div className="footer__blocks-item">
                    <h4>Quick Links</h4>
                    <p>About Our Company</p>
                    <p>Services WE provide </p>
                    <p>Career & Opportunity </p>
                    <p>Privacy & policy</p>
                    <p>Contact US</p>
                </div>
                <div className="footer__blocks-item">
                    <h4>Company </h4>
                    <p>About Company </p>
                    <p>Our Testimonials </p>
                    <p> Latest News</p>
                    <p>Our misson</p>
                    <p>Get a free Quot</p>
                </div>
                <div className="footer__blocks-item">
                    <h4>Contact us </h4>
                    <p>Sagrada Familia, Herba</p>
                    <p>Street Front USA</p>
                    <p>brandoxide@gmail.com</p>
                    <p>002-568423591</p>
                </div>
            </div>
            <div className="footer__socials">
                <h4>Follow us</h4>
                <div className="footer__socials-box">
                    <a className="footer__socials-item" href="https://www.facebook.com/interyier/" target='_blank'><img src={Facebook} alt="facebook icon" /></a>
                    <a className="footer__socials-item" href="https://twitter.com/IntPlusDesign" target='_blank'><img src={Twitter} alt="twitter icon" /></a>
                    <a className="footer__socials-item" href="https://www.instagram.com/interier.doma/" target='_blank'><img src={Instagram} alt="Instagram icon" /></a>
                    <a className="footer__socials-item" href="https://ua.linkedin.com/in/natalia-bogdan-50b32626" target='_blank'><img src={Linkedin} alt="linkedin icon" /></a>
                </div>
            </div>
            
        </div>
        <p className="copyright">Copyright @ {year} <span>Brandoxide</span>.all right reserved.</p>
    </div>
  )
}
