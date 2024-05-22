import React from 'react'
import portfolioStyle from './Portfolio.module.css';
import portfolioImage1 from '../../images/Portfolio/portfolio1.png';
import portfolioImage2 from '../../images/Portfolio/portfolio2.png';
import portfolioImage3 from '../../images/Portfolio/portfolio3.png';

const Portfolio = () => {
  return (
    <section className = "portfolio my-4 py-3">
      <div className="pt-5">
      <h2 className = {`${portfolioStyle.portfolioTitle} ${portfolioStyle.portfolioColor} text-center text-uppercase pt-4`}>portfolio component</h2>
    <div className={`my-3 text-center ${portfolioStyle.portfolioIcon} portfolio-icon`}>
        <i className={`fas fa-star fa-2x ${portfolioStyle.portfolioColor}`}></i>
    </div>
    <div className="container">
        <div className="row mt-4 py-3">
            <div className="col-lg-4 my-3">
                <div className = "portfolioItem position-relative">
                    <img src={portfolioImage1} className = "w-100" alt=""/>
                    <div className = {`${portfolioStyle.portfolioOverlay} position-absolute d-flex justify-content-center align-items-center`}>
                        <i className="fas fa-plus text-white fa-3x"></i>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 my-3">
                <div className = "portfolioItem position-relative">
                    <img src={portfolioImage2} className = "w-100" alt=""/>
                    <div className = {`${portfolioStyle.portfolioOverlay} position-absolute d-flex justify-content-center align-items-center`}>
                        <i className="fas fa-plus text-white fa-3x"></i>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 my-3">
                <div className = "portfolioItem position-relative">
                    <img src={portfolioImage3} className = "w-100" alt=""/>
                    <div className = {`${portfolioStyle.portfolioOverlay} position-absolute d-flex justify-content-center align-items-center`}>
                        <i className="fas fa-plus text-white fa-3x"></i>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 my-3">
                <div className = "portfolioItem position-relative">
                    <img src={portfolioImage1} className = "w-100" alt=""/>
                    <div className = {`${portfolioStyle.portfolioOverlay} position-absolute d-flex justify-content-center align-items-center`}>
                        <i className="fas fa-plus text-white fa-3x"></i>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 my-3">
                <div className = "portfolioItem position-relative">
                    <img src={portfolioImage2} className = "w-100" alt=""/>
                    <div className = {`${portfolioStyle.portfolioOverlay} position-absolute d-flex justify-content-center align-items-center`}>
                        <i className="fas fa-plus text-white fa-3x"></i>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 my-3">
                <div className = "portfolioItem position-relative">
                    <img src={portfolioImage3} className = "w-100" alt=""/>
                    <div className = {`${portfolioStyle.portfolioOverlay} position-absolute d-flex justify-content-center align-items-center`}>
                        <i className="fas fa-plus text-white fa-3x"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
</section>
  )
}

export default Portfolio