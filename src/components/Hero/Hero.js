import React from 'react'
import Lines from './Lines'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__copy">
                <p id="name">Center for Black Innovation</p>
                <h1>Your Ideas. Accelerated.</h1>
                <p>
                    CFBI is seeking talented black founders to join the first cohort of our pre-accelerator program.  
                </p>
                <p>
                    Application deadline: <br/> <span className="hero__copy__dates">Feb 10, 2021</span> <br/>
                    Program Date: <br/> <span className="hero__copy__dates">Feb 22 – April 16</span> 
                </p>
                <p>
                    <span className="cta-btn">
                        <a href="https://cfbi.typeform.com/to/orjd49ub">Apply Now</a>
                    </span>
                </p>
            </div>
            <div className="hero__logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3141 3767">
                    <g strokeWidth="7" fill="none" fillRule="evenodd">
                        <path className="angle" d="M375 861v1755.904l1245.913 719.328L2710 2713l371.15 206.465-1459.252 842.5-1.797-3.114-1.798 3.114-1613.405-931.5.268-.465H5V1065l370-204zM879 4v1196.927l703.879-401.859.019-.033.019.011.083-.046.075.137 1017.403 587.398-.475.82 10.993 1154.277.482.833L1594.1 3129.847l-.1.153-.081-.048-.021.013-.021-.037-1062.979-624.516 1.392-2.412H531V4h348zm2258.024 1753L3137 2757l-370-205 .024-795h370zm-1559.837-534.023L879 1626.076v678.477l702.276 405.46 648.911-374.65v-735.376l-653-377.01zM1619 164l1425.694 837.535L2692 1222 1606.384 597.881 1046 920V484l572.694-319.965.133.23.173-.265z" stroke="#000" fill="#000"/>
                        <path stroke="#0EB5BB" fill="#0EB5BB" className="alternate" d="M3137.024 1625h-370l-.024-270 370.024-179z"/>
                    </g>
                </svg>
            </div>
            <Lines />
        </section>
    )
}

export default Hero