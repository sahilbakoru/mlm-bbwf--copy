import React from 'react'
import {Link} from 'react-router-dom'

export default function signup() {
  return (
    <>

    <header className="ud-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="/">
                <img src="assets/images/logo/bbwflogo.png" alt="Logo" />
              </a>
              <button className="navbar-toggler">
                <span className="toggler-icon"> </span>
                <span className="toggler-icon"> </span>
                <span className="toggler-icon"> </span>
              </button>

              <div className="navbar-collapse">
                <ul id="nav" className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#home">Home</a>
                  </li>

                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#pricing">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#team">Team</a>
                  </li>
                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#contact">Contact</a>
                  </li>
                  {/* <li className="nav-item nav-item-has-children">
                    <a href="javascript:void(0)"> Pages </a>
                    <ul className="ud-submenu">
                      <li className="ud-submenu-item">
                        <a href="about.html" className="ud-submenu-link">
                          About Page
                        </a>
                      </li>
                      <li className="ud-submenu-item">
                        <a href="pricing.html" className="ud-submenu-link">
                          Pricing Page
                        </a>
                      </li>
                      <li className="ud-submenu-item">
                        <a href="contact.html" className="ud-submenu-link">
                          Contact Page
                        </a>
                      </li>
                      <li className="ud-submenu-item">
                        <a href="blog.html" className="ud-submenu-link">
                          Blog Grid Page
                        </a>
                      </li>
                      <li className="ud-submenu-item">
                        <a href="blog-details.html" className="ud-submenu-link">
                          Blog Details Page
                        </a>
                      </li>
                      <li className="ud-submenu-item">
                        <a href="login.html" className="ud-submenu-link">
                          Sign In Page
                        </a>
                      </li>
                      <li className="ud-submenu-item">
                        <a href="404.html" className="ud-submenu-link">404 Page</a>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </div>

              <div className="navbar-btn d-none d-sm-inline-block">
                {/* <a href="login" className="ud-main-btn ud-login-btn">
                  Sign In
                </a> */}
                {/* <a className="ud-main-btn ud-white-btn" href="javascript:void(0)">
                   Login
                </a> */}

                <Link className="ud-main-btn ud-white-btn"  to="/login"> Login
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <section className="ud-page-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-banner-content">
              <h1>Signup Page </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="ud-login">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-login-wrapper">
              {/* <div className="ud-login-logo">
                <img src="assets/images/logo/logo-2.svg" alt="logo" />
              </div> */}
              <form className="ud-login-form">
                <div className="ud-form-group">
                  <input
                    type="name"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="ud-form-group">
                  <input
                    type="name"
                    name="name"
                    placeholder="Father Name"
                  />
                </div>
                <div className="ud-form-group">
                  <input
                    type="phone"
                    name="phone"
                    placeholder="Phone"
                  />
                </div>
                <div className="ud-form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="ud-form-group">
                  <input
                    type="name"
                    name="name"
                    placeholder="Aadhar card"
                  />
                </div>
                <div className="ud-form-group">
                  <input
                    type="name"
                    name="name"
                    placeholder="Pan card"
                  />
                </div>
                <div className="ud-form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Refrence code/ mobile number"
                  />
                </div>
                <div className="ud-form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Address"
                  />
                </div>
                <div className="ud-form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="ud-form-group">
                  <button type="submit" className="ud-main-btn w-100">signup</button>
                </div>
              </form>

              <div className="ud-socials-connect">
                <p>Connect With</p>

                <ul>
                  <li>
                    <a href="javascript:void(0)" className="facebook">
                      <i className="lni lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="twitter">
                      <i className="lni lni-twitter-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="google">
                      <i className="lni lni-google"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <a className="forget-pass" href="javascript:void(0)">
                Forget Password?
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
   
    {/* <footer className="ud-footer wow fadeInUp" data-wow-delay=".15s">
      <div className="shape shape-1">
        <img src="assets/images/footer/shape-1.svg" alt="shape" />
      </div>
      <div className="shape shape-2">
        <img src="assets/images/footer/shape-2.svg" alt="shape" />
      </div>
      <div className="shape shape-3">
        <img src="assets/images/footer/shape-3.svg" alt="shape" />
      </div>
      <div className="ud-footer-widgets">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="ud-widget">
                <a href="/" className="ud-footer-logo">
                  <img src="assets/images/logo/bbwflogo.png" alt="logo" />
                </a>
                <p className="ud-widget-desc">
                  We create digital experiences for brands and companies by
                  using technology.
                </p>
                <ul className="ud-widget-socials">
                  <li>
                    <a href="https://twitter.com/MusharofChy">
                      <i className="lni lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/MusharofChy">
                      <i className="lni lni-twitter-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/MusharofChy">
                      <i className="lni lni-instagram-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/MusharofChy">
                      <i className="lni lni-linkedin-original"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
              <div className="ud-widget">
                <h5 className="ud-widget-title">About Us</h5>
                <ul className="ud-widget-links">
                  <li>
                    <a href="javascript:void(0)">Home</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Features</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">About</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Testimonial</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
              <div className="ud-widget">
                <h5 className="ud-widget-title">Features</h5>
                <ul className="ud-widget-links">
                  <li>
                    <a href="javascript:void(0)">How it works</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Privacy policy</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Terms of service</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Refund policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
              <div className="ud-widget">
                <h5 className="ud-widget-title">Our Products</h5>
                <ul className="ud-widget-links">
                  <li>
                    <a
                      href="https://lineicons.com/"
                      rel="nofollow noopner"
                      target="_blank"
                      >Lineicons
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ecommercehtml.com/"
                      rel="nofollow noopner"
                      target="_blank"
                      >Ecommerce HTML</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://ayroui.com/"
                      rel="nofollow noopner"
                      target="_blank"
                      >Ayro UI</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://graygrids.com/"
                      rel="nofollow noopner"
                      target="_blank"
                      >Plain Admin</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-8 col-sm-10">
              <div className="ud-widget">
                <h5 className="ud-widget-title">Partners</h5>
                <ul className="ud-widget-brands">
                  <li>
                    <a
                      href="https://ayroui.com/"
                      rel="nofollow noopner"
                      target="_blank"
                    >
                      <img
                        src="assets/images/footer/brands/ayroui.svg"
                        alt="ayroui"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ecommercehtml.com/"
                      rel="nofollow noopner"
                      target="_blank"
                    >
                      <img
                        src="assets/images/footer/brands/ecommerce-html.svg"
                        alt="ecommerce-html"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://graygrids.com/"
                      rel="nofollow noopner"
                      target="_blank"
                    >
                      <img
                        src="assets/images/footer/brands/graygrids.svg"
                        alt="graygrids"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://lineicons.com/"
                      rel="nofollow noopner"
                      target="_blank"
                    >
                      <img
                        src="assets/images/footer/brands/lineicons.svg"
                        alt="lineicons"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://uideck.com/"
                      rel="nofollow noopner"
                      target="_blank"
                    >
                      <img
                        src="assets/images/footer/brands/uideck.svg"
                        alt="uideck"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindtemplates.co/"
                      rel="nofollow noopner"
                      target="_blank"
                    >
                      <img
                        src="assets/images/footer/brands/tailwindtemplates.svg"
                        alt="tailwindtemplates"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ud-footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <ul className="ud-footer-bottom-left">
                <li>
                  <a href="javascript:void(0)">Privacy policy</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Support policy</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Terms of service</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <p className="ud-footer-bottom-right">
                Designed and Developed by
                <a href="https://uideck.com" rel="nofollow">UIdeck</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer> */}
    
 

    </>
  )
}
