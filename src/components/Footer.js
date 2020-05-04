import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="footer">				
        <div className="container">
          <div className="row">
            <div className="col-md-3 m-b-30">
              <div className="footer-title m-t-5 m-b-20 p-b-8">
                About us
              </div>	
              <p className="white-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 text of the printing.
              </p>
            </div>
            <div className="col-md-3 m-b-30">
              <div className="footer-title m-t-5 m-b-20 p-b-8">
                Latest themes
              </div>	
              <div className="footer-links">
                <a href="/">
                  Appointment
                </a>
                <a href="/">
                  Health center
                </a>
                <a href="/">
                  Quality
                </a>
                <a href="/">
                  Wallstreet
                </a>
              </div>
            </div>
            <div className="col-md-3 m-b-30">
              <div className="footer-title m-t-5 m-b-20 p-b-8">
                Quick Links
              </div>	
              <div className="footer-links">
                <a href="/">
                  Blog
                </a>
                <a href="/">
                  FAQ
                </a>
                <a href="/">
                  Terms & conditions
                </a>
                <a href="/">
                  Privacy policy
                </a>
              </div>
            </div>
            <div className="col-md-3 m-b-30">
              <div className="footer-title m-t-5 m-b-20 p-b-8">
                Support
              </div>	
              <div className="footer-links">
                <a href="/">
                  Affiliate
                </a>
                <a href="/">
                  Login
                </a>
                <a href="/">
                  All theme package
                </a>
                <a href="/">
                  Support forum
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        Copyright © 2020, All Rights Reserved
      </div>
    </div>
  )
}