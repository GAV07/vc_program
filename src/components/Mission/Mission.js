import React from 'react'
import {FaDesktop, FaMicrophone, FaFileInvoiceDollar, FaRoute} from 'react-icons/fa'
import Win from './Win'
//import Background from '../../images/black.jpg'

// const style = {
//     backgroundImage: `url(${Background})`
// }

const Mission = () => {
    return (
       <section className="mission">
            <div className="mission__copy">
                <h2>Mission</h2>
                <p>
                    The VC-in-Residence program is an inclusive entrepreneurship initiative that seeks to increase the number  of minority-founded, venture-backed, high-growth businesses in the U.S. by identifying, cultivating and  showcasing minority entrepreneurial talent; connecting this talent to investment opportunities;  identifying and cultivating potential minority accredited investors; connecting minority accredited  investors to local capital markets; and making targeted ecosystems inclusive and connected nationally. 
                </p>
            </div>
            <div className="mission__outcomes">
                <h2> Investor Readiness</h2>
                <div className="mission__outcomes__wins">
                    <Win 
                        icon= {<FaDesktop />}
                        name = "Acquire your Digital Real Estate"
                        details = "We help our ventures create or improve websites that help promote and/or sell their products or services."
                    />
                    <Win 
                        icon= {<FaRoute />}
                        name = "Expand your Market Strategy"
                        details = "Ventures who complete this program will walk out with a go to market strategy specific to their audience and a comprehensive digital marketing plan to make sure their audience feels their presence."
                    />
                    <Win 
                        icon= {<FaMicrophone />}
                        name = "Go beyond a Pitch Deck"
                        details = "Pitching is only one part of the equation, we make sure you learn how to build relationships with investors."
                    />
                    <Win 
                        icon= {<FaFileInvoiceDollar />}
                        name = "Build a Business Foundation"
                        details = "A business plan is no longer enough to set a business up for success. Entrepreneurs must learn how to integrate data and technology to leverage more growth."
                    />
                </div>
            </div>
       </section>
    )
}

export default Mission