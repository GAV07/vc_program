import React from 'react'
import logo from '../images/logo.png'

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer__copy">
                <a href="https://centerforblackinnovation.org"><img src={logo} alt="Logo"/></a>
                <p>Center for Black Innovation</p>
                <p>937 NW 3rd Ave.</p>
                <p>Miami, FL 33136</p>
                <p>© Center for Black Innovation</p>
            </div>
        </section>
    )
}

export default Footer