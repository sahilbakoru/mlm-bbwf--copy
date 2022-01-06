import {Route , Switch, Link} from 'react-router-dom'
import Login from './login'
// import  "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"

 function App() {
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
              <button className="navbar-toggler" type="button"  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                        <a href="about.js " className="ud-submenu-link">
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
                <Link className="ud-main-btn ud-login-btn"  to="/login"> Login 
                </Link>

                {/* <a className="ud-main-btn ud-white-btn" href="javascript:void(0)">
                  Sign Up
                </a> */}
                <Link className="ud-main-btn ud-white-btn"  to="/signup"> Signup 
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    
    <section className="ud-hero" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-hero-content wow fadeInUp" data-wow-delay=".2s">
              <h1 className="ud-hero-title">
                Bhaskar Bharti Welfare Foundation
              </h1>
              <p className="ud-hero-desc">
              "None of us, including me, ever do great things.
               But we can all do small things, with great love, and together we can do something wonderful."
              </p>
              {/* <ul className="ud-hero-buttons">
                <li>
                  <a href="https://links.uideck.com/play-bootstrap-download" rel="nofollow noopener" target="_blank" className="ud-main-btn ud-white-btn">
                    Download Now
                  </a>
                </li>
                <li>
                  <a href="https://github.com/uideck/play-bootstrap" rel="nofollow noopener" target="_blank" className="ud-main-btn ud-link-btn">
                    Learn More <i className="lni lni-arrow-right"></i>
                  </a>
                </li>
              </ul> */}
            </div>
            <div
              className="ud-hero-brands-wrapper wow fadeInUp"
              data-wow-delay=".3s"
            >
              {/* <img src="assets/images/hero/brand.svg" alt="brand" /> */}
            </div>
            <div className="ud-hero-image wow fadeInUp" data-wow-delay=".25s">
              <img src="assets/images/hero/hero-image.svg" alt="hero-image" />
              <img
                src="assets/images/hero/dotted-shape.svg"
                alt="shape"
                className="shape shape-1"
              />
              <img
                src="assets/images/hero/dotted-shape.svg"
                alt="shape"
                className="shape shape-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
    <section id="features" className="ud-features">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-section-title">
              <span>Values</span>
              <h2>Main Values of Bhaskar Bharti Welfare Foundation </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-feature wow fadeInUp" data-wow-delay=".1s">
              <div className="ud-feature-icon">
                <i className="lni lni-rocket"></i>
              </div>
              <div className="ud-feature-content">
                <h3 className="ud-feature-title">Vision</h3>
                <p className="ud-feature-desc">
                Bhaskar Bharti welfare foundation vision is to create a just and equitable society by transforming individuals from socially and economically excluded communities into agents of change.                </p>
               
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-feature wow fadeInUp" data-wow-delay=".15s">
              <div className="ud-feature-icon">
                <i className="lni lni-world"></i>
              </div>
              <div className="ud-feature-content">
                <h3 className="ud-feature-title">Goal</h3>
                <p className="ud-feature-desc">
                Bhaskar Bharti welfare foundation vision is to create a just and equitable society by transforming individuals from socially and economically excluded communities into agents of change.                </p>
               
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-feature wow fadeInUp" data-wow-delay=".2s">
              <div className="ud-feature-icon">
                <i className="lni lni-grow"></i>
              </div>
              <div className="ud-feature-content">
                <h3 className="ud-feature-title">purpose</h3>
                <p className="ud-feature-desc">
                Bhaskar Bharti welfare foundation vision is to create a just and equitable society by transforming individuals from socially and economically excluded communities into agents of change.                </p>
               
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-feature wow fadeInUp" data-wow-delay=".25s">
              <div className="ud-feature-icon">
                <i className="lni lni-protection"></i>
              </div>
              <div className="ud-feature-content">
                <h3 className="ud-feature-title">trust</h3>
                <p className="ud-feature-desc">
                Bhaskar Bharti welfare foundation vision is to create a just and equitable society by transforming individuals from socially and economically excluded communities into agents of change.                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  

    <section id="about" className="ud-about">
      <div className="container">
        <div className="ud-about-wrapper wow fadeInUp" data-wow-delay=".2s">
          <div className="ud-about-content-wrapper">
            <div className="ud-about-content">
              <span className="tag">About Us</span>
              <h2>Bhaskar Bharti welfare foundation</h2>
              <p>
              Bhaskar Bharti welfare foundation is unique because there is huge respect for Diversity. You are not judged because of your gender, caste, religion, sexuality, your physical appearance, marital status etc. 
              You can BE WHO YOU ARE at BBWF. Most people or organisations just talk about diversity and inclusion, it is actually lived at BBWF. It is the BBWF way. BBWF also believes in the potential of people. We bring change in the lives of people and the BBWF staff is its greatest strength!”
              </p>

              <p>
              Education empowers an individual to earn their livelihood and also increases one's awareness on a range of issues.
               From healthcare, to appropriate social behavior, to understanding one's rights – Bhaskar Bharti welfare foundation seeks to educate, empower and cultivate better citizens.
              </p>
              {/* <a href="javascript:void(0)" className="ud-main-btn">Learn More</a> */}
            </div>
          </div>
          <div className="ud-about-image">
            <img src="assets/images/about/about-image.svg" alt="about-image" />
          </div>
        </div>
      </div>
    </section>
  

    <section id="pricing" className="ud-pricing">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-section-title mx-auto text-center">
              <span>Pricing</span>
              <h2>Our Pricing Plans</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-0 align-items-center justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="ud-single-pricing first-item wow fadeInUp"
              data-wow-delay=".15s"
            >
              <div className="ud-pricing-header">
                <h3>STARTING FROM</h3>
                <h4>$ 19.99/mo</h4>
              </div>
              <div className="ud-pricing-body">
                <ul>
                  <li>5 User</li>
                  <li>All UI components</li>
                  <li>Lifetime access</li>
                  <li>Free updates</li>
                  <li>Use on 1 (one) project</li>
                  <li>4 Months support</li>
                </ul>
              </div>
              <div className="ud-pricing-footer">
                <a href="javascript:void(0)" className="ud-main-btn ud-border-btn">
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="ud-single-pricing active wow fadeInUp"
              data-wow-delay=".1s"
            >
              <span className="ud-popular-tag">POPULAR</span>
              <div className="ud-pricing-header">
                <h3>STARTING FROM</h3>
                <h4>$ 30.99/mo</h4>
              </div>
              <div className="ud-pricing-body">
                <ul>
                  <li>5 User</li>
                  <li>All UI components</li>
                  <li>Lifetime access</li>
                  <li>Free updates</li>
                  <li>Use on 1 (one) project</li>
                  <li>4 Months support</li>
                </ul>
              </div>
              <div className="ud-pricing-footer">
                <a href="javascript:void(0)" className="ud-main-btn ud-white-btn">
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="ud-single-pricing last-item wow fadeInUp"
              data-wow-delay=".15s"
            >
              <div className="ud-pricing-header">
                <h3>STARTING FROM</h3>
                <h4>$ 70.99/mo</h4>
              </div>
              <div className="ud-pricing-body">
                <ul>
                  <li>5 User</li>
                  <li>All UI components</li>
                  <li>Lifetime access</li>
                  <li>Free updates</li>
                  <li>Use on 1 (one) project</li>
                  <li>4 Months support</li>
                </ul>
              </div>
              <div className="ud-pricing-footer">
                <a href="javascript:void(0)" className="ud-main-btn ud-border-btn">
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   

    <section id="faq" className="ud-faq">
      <div className="shape">
        <img src="assets/images/faq/shape.svg" alt="shape" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-section-title text-center mx-auto">
              <span>FAQ</span>
              <h2>Any Questions? Answered</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
              <div className="accordion">
                <button
                  className="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                  <span className="icon flex-shrink-0">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>How to use UIdeck?</span>
                </button>
                <div id="collapseOne" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </div>
              </div>
            </div>
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
              <div className="accordion">
                <button
                  className="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                >
                  <span className="icon flex-shrink-0">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>How to download icons from Lineicons?</span>
                </button>
                <div id="collapseTwo" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </div>
              </div>
            </div>
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".2s">
              <div className="accordion">
                <button
                  className="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                >
                  <span className="icon flex-shrink-0">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>Is GrayGrids part of UIdeck?</span>
                </button>
                <div id="collapseThree" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
              <div className="accordion">
                <button
                  className="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                >
                  <span className="icon flex-shrink-0">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>Can I use this template for commercial project?</span>
                </button>
                <div id="collapseFour" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </div>
              </div>
            </div>
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
              <div className="accordion">
                <button
                  className="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                >
                  <span className="icon flex-shrink-0">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>Do you have plan releasing Play Pro?</span>
                </button>
                <div id="collapseFive" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </div>
              </div>
            </div>
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".2s">
              <div className="accordion">
                <button
                  className="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                >
                  <span className="icon flex-shrink-0">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>Where and how to host this template?</span>
                </button>
                <div id="collapseSix" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   

    <section id="testimonials" className="ud-testimonials">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-section-title mx-auto text-center">
              <span>Testimonials</span>
              <h2>What our Customers Says</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div
              className="ud-single-testimonial wow fadeInUp"
              data-wow-delay=".1s"
            >
              <div className="ud-testimonial-ratings">
                <i className="lni lni-star-filled"></i>
                <i className="lni lni-star-filled"></i>
                <i className="lni lni-star-filled"></i>
                <i className="lni lni-star-filled"></i>
                <i className="lni lni-star-filled"></i>
              </div>
              <div className="ud-testimonial-content">
                <p>
                  “Our members are so impressed. It's intuitive. It's clean.
                  It's distraction free. If you're building a community.
                </p>
              </div>
              <div className="ud-testimonial-info">
                <div className="ud-testimonial-image">
                  <img
                    src="assets/images/testimonials/author-01.png"
                    alt="author"
                  />
                </div>
                <div className="ud-testimonial-meta">
                  <h4>Sabo Masties</h4>
                  <p>Founder @UIdeck</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="ud-single-testimonial wow fadeInUp"
              data-wow-delay=".15s"
            >
              <div className="ud-testimonial-ratings">
                <i className="lni lni-star-filled"></i>
                <i className="lni lni-star-filled"></i>
                <i className="lni lni-star-filled"></i>
                <i className="lni lni-star-filled"></i>
                <i className="lni lni-star-filled"></i>
              </div>
              <div className="ud-testimonial-content">
                <p>
                  “Our members are so impressed. It's intuitive. It's clean.
                  It's distraction free. If you're building a community.
                </p>
              </div>
              <div className="ud-testimonial-info">
                <div className="ud-testimonial-image">
                  <img
                    src="assets/images/testimonials/author-02.png"
                    alt="author"
                  />
                </div>
                <div className="ud-testimonial-meta">
                  <h4>Margin Gesmu</h4>
                  <p>Founder @Lineicons</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="ud-single-testimonial wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="ud-testimonial-ratings">
                <i className="lni lni-star-filled"></i>
                <i className="lni lni-star-filled"></i>
                <i className="lni lni-star-filled"></i>
                <i className="lni lni-star-filled"></i>
                <i className="lni lni-star-filled"></i>
              </div>
              <div className="ud-testimonial-content">
                <p>
                  “Our members are so impressed. It's intuitive. It's clean.
                  It's distraction free. If you're building a community.
                </p>
              </div>
              <div className="ud-testimonial-info">
                <div className="ud-testimonial-image">
                  <img
                    src="assets/images/testimonials/author-03.png"
                    alt="author"
                  />
                </div>
                <div className="ud-testimonial-meta">
                  <h4>William Smith</h4>
                  <p>Founder @GrayGrids</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-brands wow fadeInUp" data-wow-delay=".2s">
              <div className="ud-title">
                <h6>Trusted and Used by</h6>
              </div>
              <div className="ud-brands-logo">
                <div className="ud-single-logo">
                  <img src="assets/images/brands/ayroui.svg" alt="ayroui" />
                </div>
                <div className="ud-single-logo">
                  <img src="assets/images/brands/uideck.svg" alt="uideck" />
                </div>
                <div className="ud-single-logo">
                  <img
                    src="assets/images/brands/graygrids.svg"
                    alt="graygrids"
                  />
                </div>
                <div className="ud-single-logo">
                  <img
                    src="assets/images/brands/lineicons.svg"
                    alt="lineicons"
                  />
                </div>
                <div className="ud-single-logo">
                  <img
                    src="assets/images/brands/ecommerce-html.svg"
                    alt="ecommerce-html"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
   
    <section id="team" className="ud-team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-section-title mx-auto text-center">
              <span>Our Team</span>
              <h2>Meet The Team</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-team wow fadeInUp" data-wow-delay=".1s">
              <div className="ud-team-image-wrapper">
                <div className="ud-team-image">
                  <img src="assets/images/team/team-01.png" alt="team" />
                </div>

                <img
                  src="assets/images/team/dotted-shape.svg"
                  alt="shape"
                  className="shape shape-1"
                />
                <img
                  src="assets/images/team/shape-2.svg"
                  alt="shape"
                  className="shape shape-2"
                />
              </div>
              <div className="ud-team-info">
                <h5>Adveen Desuza</h5>
                <h6>UI Designer</h6>
              </div>
              <ul className="ud-team-socials">
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
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-team wow fadeInUp" data-wow-delay=".15s">
              <div className="ud-team-image-wrapper">
                <div className="ud-team-image">
                  <img src="assets/images/team/team-02.png" alt="team" />
                </div>

                <img
                  src="assets/images/team/dotted-shape.svg"
                  alt="shape"
                  className="shape shape-1"
                />
                <img
                  src="assets/images/team/shape-2.svg"
                  alt="shape"
                  className="shape shape-2"
                />
              </div>
              <div className="ud-team-info">
                <h5>Jezmin uniya</h5>
                <h6>Product Designer</h6>
              </div>
              <ul className="ud-team-socials">
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
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-team wow fadeInUp" data-wow-delay=".2s">
              <div className="ud-team-image-wrapper">
                <div className="ud-team-image">
                  <img src="assets/images/team/team-03.png" alt="team" />
                </div>

                <img
                  src="assets/images/team/dotted-shape.svg"
                  alt="shape"
                  className="shape shape-1"
                />
                <img
                  src="assets/images/team/shape-2.svg"
                  alt="shape"
                  className="shape shape-2"
                />
              </div>
              <div className="ud-team-info">
                <h5>Andrieo Gloree</h5>
                <h6>App Developer</h6>
              </div>
              <ul className="ud-team-socials">
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
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-team wow fadeInUp" data-wow-delay=".25s">
              <div className="ud-team-image-wrapper">
                <div className="ud-team-image">
                  <img src="assets/images/team/team-04.png" alt="team" />
                </div>

                <img
                  src="assets/images/team/dotted-shape.svg"
                  alt="shape"
                  className="shape shape-1"
                />
                <img
                  src="assets/images/team/shape-2.svg"
                  alt="shape"
                  className="shape shape-2"
                />
              </div>
              <div className="ud-team-info">
                <h5>Jackie Sanders</h5>
                <h6>Content Writer</h6>
              </div>
              <ul className="ud-team-socials">
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="contact" className="ud-contact">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-7">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title">
                <span>CONTACT US</span>
                <h2>
                  Let’s talk about <br />
                  Love to hear from you!
                </h2>
              </div>
              <div className="ud-contact-info-wrapper">
                <div className="ud-single-info">
                  <div className="ud-info-icon">
                    <i className="lni lni-map-marker"></i>
                  </div>
                  <div className="ud-info-meta">
                    <h5>Our Location</h5>
                    <p>132001, Karnal, Haryana</p>
                  </div>
                </div>
                <div className="ud-single-info">
                  <div className="ud-info-icon">
                    <i className="lni lni-envelope"></i>
                  </div>
                  <div className="ud-info-meta">
                    <h5>How Can We Help?</h5>
                    <p>info@yourdomain.com</p>
                    <p>contact@yourdomain.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div
              className="ud-contact-form-wrapper wow fadeInUp"
              data-wow-delay=".2s"
            >
              <h3 className="ud-contact-form-title">Send us a Message</h3>
              <form className="ud-contact-form">
                <div className="ud-form-group">
                  <label for="fullName">Full Name*</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your Name"
                  />
                </div>
                <div className="ud-form-group">
                  <label for="email">Email*</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="ud-form-group">
                  <label for="phone">Phone*</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your phone number"
                  />
                </div>
                <div className="ud-form-group">
                  <label for="message">Message*</label>
                  <textarea
                    name="message"
                    rows="1"
                    placeholder="type your message here"
                  ></textarea>
                </div>
                <div className="ud-form-group mb-0">
                  <button type="submit" className="ud-main-btn">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  
    <footer className="ud-footer wow fadeInUp" data-wow-delay=".15s">
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
                Designed and Developed by &nbsp; 
                <a href="https://www.appformers.com" rel="nofollow">Appformers </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <a href="javascript:void(0)" class="back-to-top">
      <i class="lni lni-chevron-up"> </i>
    </a>

    </>
  );
}

export default App;
