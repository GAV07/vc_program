import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const CTA = () => {
    return (   
        <section className="cta">
            <svg id="watermark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 241 288">
                <g strokeWidth=".7" fill="none" fillRule="evenodd">
                    <path d="M29.241 66.222l-.001 133.632 95.071 54.745 83.104-47.43 28.322 15.713L124.387 287l-.138-.237-.137.237L1 216.108l.021-.036h-.013V81.748L29.24 66.222zM67.699 1v91.091l53.71-30.583.002-.002v.001l.008-.004.005.011 77.634 44.704-.037.062.84 87.846.037.064-77.634 44.703-.006.011-.007-.004v.002l-.002-.003-81.112-47.529.106-.184h-.098V1h26.554zM240 134.412l-.002 76.105-28.233-15.601.002-60.504H240zM120.975 93.77l-53.276 30.678v51.635l53.588 30.858 49.515-28.513v-55.966L120.975 93.77zm3.19-80.593l108.79 63.74-26.913 16.779-82.839-47.499-42.76 24.515V37.53l43.7-24.35.009.016.014-.02z" stroke="#000" fill="#000"/>
                    <path stroke="#0EB5BB" fill="#0EB5BB" d="M240 125h-27.998L212 104.555 240 91z"/>
                </g>
            </svg>
            <svg id="left-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 237 223">
                <g fill="#000" stroke="#000" strokeWidth=".7" fillRule="evenodd">
                    <path d="M1.008 16.747L29.24 1.222v149.85H1.008z"/>
                    <path d="M1 151.108l14.117-24.386 123.112 70.892L124.112 222z"/>
                    <path d="M124.387 222l-14.117-24.386 97.145-55.445 28.322 15.713z"/>
                </g>
            </svg>
            <svg id="right-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 161 241">
                <g fill="#000" stroke="#000" strokeWidth=".7" fillRule="evenodd">
                    <path d="M1.137 191.37l13.277-22.936 82.802 47.68-14.958 22.79z"/>
                    <path d="M82.25 238.902l-14.116-24.387 77.647-44.711 14.117 24.386z"/>
                    <path d="M159.861 194.155l-29.058 2.55V107.28l28.219-1.028z"/>
                    <path d="M159.058 106.218l-14.116 24.386-77.648-44.712 14.117-24.386z"/>
                    <path d="M81.419 61.503l13.237 24.39-77.647 44.711-14.117-24.386z"/>
                    <path d="M1.145 1h26.554v190.186H1.145z"/>
                </g>
            </svg>
            <div className="cta__copy">
                <h2>Invest with your Tribe</h2>
                <p>Get access to a community with both investor and founders with the knowledge needed to find your success.</p>
                <p>
                    <OutboundLink className="cta-btn" href="https://cfbi.typeform.com/to/BMSSrHM5">Join Waitlist</OutboundLink>
                </p>
            </div>
        </section>
    )
}

export default CTA