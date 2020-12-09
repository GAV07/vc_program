import React from 'react'
import Lines from './Hero/Lines'
import logo from '../images/logo.png'

const CTA = () => {
    return (   
        <section className="cta">
            <div className="cta__copy">
                <img src={logo} alt="Logo"/>
                <h2>Why wouldn't you sign up for this great program that is the greatest of all time!</h2>
                <p>
                    <span className="cta-btn">
                        <a href="typeform link">Sign Up</a>
                    </span>
                </p>
            </div>
            <Lines />
        </section>
    )
}

export default CTA