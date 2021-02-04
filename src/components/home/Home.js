import React from 'react'
import { Link } from 'gatsby'

const Hero = () => {

    return (
        <section className="home__hero">
            <div className="motifs">
                <svg id="watermark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 241 288">
                    <g strokeWidth=".7" fill="none" fillRule="evenodd">
                        <path d="M29.241 66.222l-.001 133.632 95.071 54.745 83.104-47.43 28.322 15.713L124.387 287l-.138-.237-.137.237L1 216.108l.021-.036h-.013V81.748L29.24 66.222zM67.699 1v91.091l53.71-30.583.002-.002v.001l.008-.004.005.011 77.634 44.704-.037.062.84 87.846.037.064-77.634 44.703-.006.011-.007-.004v.002l-.002-.003-81.112-47.529.106-.184h-.098V1h26.554zM240 134.412l-.002 76.105-28.233-15.601.002-60.504H240zM120.975 93.77l-53.276 30.678v51.635l53.588 30.858 49.515-28.513v-55.966L120.975 93.77zm3.19-80.593l108.79 63.74-26.913 16.779-82.839-47.499-42.76 24.515V37.53l43.7-24.35.009.016.014-.02z" stroke="#000" fill="#000"/>
                        <path stroke="#0EB5BB" fill="#0EB5BB" d="M240 125h-27.998L212 104.555 240 91z"/>
                    </g>
                </svg>
            </div> 
            <div className="home__hero__copy">
                <p id="name">VC in Residence</p>
                <h1>We close the gap between investors, founders, and capital.</h1>
                <p>
                The VC-in-Residence program seeks to increase the number of minority-founded, venture-backed, high-growth businesses in the U.S. 
                and the number of minority VC and angels that seek to fund these ventures.
                </p>
            </div>
            <div className="home__hero__ctas">
                <div className="home__hero__ctas__cta">
                    <h3>Pre-Accelerator Program</h3>
                    <p>First cohort applications are open for entrepreneurs looking to join our tribe.</p>
                    <Link className="cta-btn-alt" to="/startup/">Learn More</Link>
                </div>
                <div className="home__hero__ctas__cta">
                    <h3>Investor Academy</h3>
                    <p>Learn how to invest conciously, grow your capital, and build the black economy.</p>
                    <Link className="cta-btn-alt" to="/investor/">Learn More</Link>
                </div>
            </div>
        </section>
    )
}

export default Hero