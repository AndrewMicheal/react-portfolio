import React from 'react'
import homeStyle from './Home.module.css';
import homeImage from '../../images/home.svg';

export default function Home() {
  return (
    <React.Fragment>
       <div className={`${homeStyle.home} p-5`}>
                    <div className={`${homeStyle.home_content} text-center p-5 home-content`}>
                        <img src={homeImage} className = {homeStyle.image}  alt=""/>
                        <div className="home-info text-center my-4">
                            <h2 className = {`${homeStyle.homeTitle} text-uppercase text-white`}>start react</h2>
                        </div>
                        <div className={`${homeStyle.homeIcon} my-2 home-Icon`}>
                            <i className="fas fa-star fa-2x text-white"></i>
                        </div>
                        <div className = {`mt-4`}>
                            <h3 className = {`text-white ${homeStyle.homeSkills}`}>Graphic Artist - Web Designer - Illustrator</h3>
                        </div>
                    </div>
                </div>
    </React.Fragment>
  )
}
