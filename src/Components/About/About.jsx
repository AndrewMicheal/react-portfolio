import React from 'react'
import aboutStyle from './About.module.css';

const About = () => {
  return (
    <>
      <section className = {`mt-4 ${aboutStyle.about} p-5`}>
        <div className = "pt-5">
        <h2 className = {`text-uppercase text-center text-white ${aboutStyle.title}`}>about component</h2>
                    <div className={`my-3 text-center ${aboutStyle.aboutIcon} about-icon`}>
                        <i className={`fas fa-star fa-2x ${aboutStyle.aboutColor} text-white`}></i>
                    </div>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-lg-6">
                                <div className={`text-white`}>
                                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={`text-white`}>
                                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>             
      </section>
    </>
  )
}

export default About