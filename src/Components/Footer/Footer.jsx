import React from 'react'
import footerStyle from './Footer.module.css';

export default function Footer() {
  return (
    <>
        <section className = {`${footerStyle.footer} p-4 text-center`}>
        <div className="text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="contactItem pt-5">
                                    <h2 className="text-uppercase">location</h2>
                                    <span>2215 John Daniel Drive</span>
                                    <span className = "d-block mt-2">Clark, MO 65243</span>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="contactItem pt-5">
                                    <h2 className="text-uppercase">around the web</h2>
                                    <div className={`${footerStyle.socialIcons} `}>
                                        <div className={`${footerStyle.socialIcon}`}>
                                            <i className="fab fa-facebook-f fa-lg text-white"></i>
                                        </div>
                                        <div className={`${footerStyle.socialIcon}`}>
                                            <i className="fab fa-twitter fa-lg text-white"></i>
                                        </div>
                                        <div className={`${footerStyle.socialIcon}`}>
                                            <i className="fab fa-linkedin-in fa-lg text-white"></i>
                                        </div>
                                        <div className={`${footerStyle.socialIcon}`}>
                                            <i className="fab fa-dribbble fa-lg text-white"></i>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="item pt-5">
                                    <h2 className="mb-4 text-white">ABOUT FREELANCER</h2>
                                    <p className="text-white">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <footer className = {`${footerStyle.bg_footer} p-4 text-center`}>
          <span>Copyright © Your Website 2021</span>
        </footer>
    </>
  )
}
