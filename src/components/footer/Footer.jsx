import React from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className="box">
              <Link to={'/'}><img src={Logo} className='logo' alt="" /></Link>
              <p>With BalonKUN you can experience a new experience by riding a hot air balloon with beautiful views of the surroundings to spoil your eyes.</p>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-12">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="box">
                  <div className="linkBox">
                    <h3>Destination</h3>
                    <Link to={"/"} className='link'>Air balloon</Link>
                    <Link to={"/"} className='link'>Location</Link>
                    <Link to={"/"} className='link'>Price</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="box">
                  <div className="linkBox">
                    <h3>About</h3>
                    <Link to={"/"} className='link'>Contact Us</Link>
                    <Link to={"/"} className='link'>Testimonial</Link>
                    <Link to={"/"} className='link'>Ratings</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="box">
                  <div className="linkBox">
                    <h3>Follow Us</h3>
                    <Link to={"/"} className='link'>Facebook</Link>
                    <Link to={"/"} className='link'>Instagram</Link>
                    <Link to={"/"} className='link'>Twitter</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row copy">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <p>Copyright 2023 © All Rights Reserved. Design By Ayaz</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="box">
              <Link to={'/'} className='link'>Terms & Conditions</Link>
              <Link to={'/'} className='link'>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer