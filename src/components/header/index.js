import React from 'react'
import './header.scss'

function Header() {
  return (
    <header id="header home" >
    <div className="header-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-6 col-4 header-top-left no-padding">
                  <p className="text-white">Flat No. - 253, Pocket - 1, Sector - 9, Dwarka, New Delhi - 110075</p>				  
                </div>
                <div className="col-lg-6 col-sm-6 col-8 header-top-right no-padding">
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                      <li><a href="#"><i className="fa fa-behance"></i></a></li>
                    </ul>			
                </div>
            </div>			  					
        </div>
  </div>
  <div className="container main-menu">
      <div className="row align-items-center justify-content-between d-flex">
        <div id="logo">
          <a href="/"><img src="img/logo.png" alt="" title="" /></a>
        </div>
        <nav id="nav-menu-container">
          <ul className="nav-menu">
            <li className="menu-active"><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav> 		
      </div>
  </div>
</header>

  )
}

export default Header;