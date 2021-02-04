import React from 'react'
import {FaDesktop, FaMicrophone, FaFileInvoiceDollar, FaRoute} from 'react-icons/fa'
import Win from './Win'

const Mission = () => {
    return (
       <section className="mission">
            <div className="mission__copy">
                <h2>We guide entrepreneurs through pathways to capital</h2>
                <p>
                    The VCIR Pre-Accelerator is a program meant to level up the founders who have ventures they are passionate about.
                    Before founders are ready to have capital conversations, their business must learn how to operate pre-capital.
                </p>
            </div>
            <div className="mission__outcomes">
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