import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { IoLogoWhatsapp } from "react-icons/io";

const Navbar = () => {

  const navMenu = [
    {
      link: "#",
      text: "Destination"
    },
    {
      link: "#",
      text: "About Us"
    },
    {
      link: "#",
      text: "Contact Us"
    }
  ]

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="box menubx">
              <Link className='logo'>
                <img src={Logo} alt="Logo" />
              </Link>
              <div className="menu-link">
                {
                  navMenu.map(({ text, link }, index) => {
                    return (
                      <Link to={link} key={index}>{text}</Link>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="box nanbtn-bx">
              <button className='nav-btn' 
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://wa.me/923131230491';
                      }}
              >
              WhatsApp Us
              <span className='icon'>
                <IoLogoWhatsapp />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </header >
  )
}

export default Navbar