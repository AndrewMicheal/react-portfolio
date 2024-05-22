import React from 'react'
import contactStyle from './Contact.module.css';

const Contact = () => {
    return (
        <>
            <section className="mt-5">
                <h2 className={`${contactStyle.contactTitle} ${contactStyle.contactColor} text-center pt-5 text-uppercase `}>contact me</h2>
                <div className={`my-3 text-center ${contactStyle.contactIcon} contact-icon`}>
                    <i className={`fas fa-star fa-2x ${contactStyle.contactColor}`}></i>
                </div>
                <div className="container">
                    <div className="my-4 py-4 d-flex align-items-center flex-column align-items-center">
                        <div className={`form-floating ${contactStyle.formWidth} mb-3`}>
                            <input type="text" className={`form-control ${contactStyle.formInput} border-0 border-bottom rounded-0`} id="userName" />
                            <label for="userName">userName</label>
                        </div>
                        <div className={`form-floating ${contactStyle.formWidth} mb-3`}>
                            <input type="number" className={`form-control ${contactStyle.formInput} border-0 border-bottom rounded-0`} id="userAge" />
                            <label for="userAge">userAge</label>
                        </div>
                        <div className={`form-floating ${contactStyle.formWidth} mb-3`}>
                            <input type="email" className={`form-control ${contactStyle.formInput} border-0 border-bottom rounded-0`} id="userEmail" />
                            <label for="userEmail">userEmail</label>
                        </div>
                        <div className={`form-floating ${contactStyle.formWidth} mb-3`}>
                            <input type="password" className={`form-control ${contactStyle.formInput} border-0 border-bottom rounded-0`} id="userPassword" />
                            <label for="userPassword">userPassword</label>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Contact