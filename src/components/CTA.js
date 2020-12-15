import React from 'react'
import Lines from './Hero/Lines'
import logo from '../images/logo.png'

const CTA = () => {
    return (   
        <section className="cta">
            <div className="cta__copy">
                <img src={logo} alt="Logo"/>
                <h2>Your business has potential. <br/> Let us help you unlock it!</h2>
                <p>
                    <span className="cta-btn">
                        <a href="https://cfbi.typeform.com/to/orjd49ub">Apply Now</a>
                    </span>
                </p>
            </div>
            <Lines />
        </section>
    )
}

export default CTA