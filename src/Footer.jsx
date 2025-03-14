import React from "react";
import logo from './assets/footerrimg.png';
import './App.css';

const Footer = () => {
  return (
    <footer className="blue text-white py-4 ">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-5">
              <a className="navbar-brand text-primary" href="#">
                        <img src={logo} width={350} alt="IT Solutions" className="rounded-lg" />
            
                      </a>
            <p className="font36 mt-4 linegeight100">Cutting-edge tech, seamless solutions – all in one place.</p>
          </div>

          <div className="col-md-3 ">
            <h5 className="fw-bold underline">Contact Us</h5>
            <p>
              <a href="mailto:hello@daintreetech.com" className=" underline text-white text-decoration-none">
                hello@daintreetech.com
              </a>
            </p>
            <p className="fw-bold underline">+01 1234 4556</p>
            <p>12-14/3 #104, Asian Sun City, Behind AMB mall, Kothaguda, Hyderabad, Telangana, 500084</p>
            <p>
              <a href="https://maps.google.com" className="text-white text-decoration-underline">
                View on maps
              </a>
            </p>
          </div>

          <div className="col-md-2">
            <h5 className="fw-bold underline" >What we Offer</h5>
            <ul className="list-unstyled lineheight">
              <li>Cybersecurity Services</li>
              <li>Cloud Solutions</li>
              <li>IT Consulting & Strategy</li>
              <li>System Integration</li>
              <li>AI & Automation</li>
            </ul>
          </div>

          <div className="col-md-2">
            <h5 className="fw-bold underline">Company Profile</h5>
            <ul className="list-unstyled lineheight">
              <li>Home</li>
              <li>What we Offer</li>
              <li>About Us</li>
              <li>Case Studies</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
