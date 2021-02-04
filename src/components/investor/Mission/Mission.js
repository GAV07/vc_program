import React from 'react'
import {FaMoneyBill, FaNetworkWired} from 'react-icons/fa'
import Win from './Win'

const Mission = () => {
    return (
       <section className="mission">
            <div className="mission__copy">
                <h2>We guide black professionals through investing approaches to grow their capital around like minded investors</h2>
                <p>
                    The VCIR Investor Academy is a program takes high net worth black individuals and connect them with education and
                    opportunities togive back while growing their capital.
                </p>
            </div>
            <div className="mission__outcomes">
                <div className="mission__outcomes__wins">
                    <Win 
                        icon= {<FaMoneyBill />}
                        name = "Learn Seasoned Investing Approaches"
                        details = "Financing ventures and understanding how to create a fund takes expertise. Let us help you set a foundation."
                    />
                    <Win 
                        icon= {<FaNetworkWired />}
                        name = "Develop you Investor Network"
                        details = "Investing with others who share the same goals as you reduces the risk of investments that you want to make."
                    />
                </div>
            </div>
       </section>
    )
}

export default Mission