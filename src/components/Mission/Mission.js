import React from 'react'
import {FaDesktop} from 'react-icons/fa'
import Win from './Win'

const Mission = () => {
    return (
       <section className="mission">
            <div className="mission__copy">
                <h2>Mission</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat pretium nibh ipsum consequat nisl vel. Faucibus pulvinar elementum integer enim neque volutpat ac. Fames ac turpis egestas sed. Tincidunt ornare massa eget egestas purus viverra accumsan. Est placerat in egestas erat imperdiet sed.</p>
            </div>
            <div className="mission__outcomes">
                <h2> Investor Readiness</h2>
                <div className="mission__outcomes__wins">
                    <Win 
                        icon= {<FaDesktop />}
                        name = "Website"
                        details = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo."
                    />
                    <Win 
                        icon= {<FaDesktop />}
                        name = "Market Strategy"
                        details = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo."
                    />
                    <Win 
                        icon= {<FaDesktop />}
                        name = "Pitch Deck"
                        details = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo."
                    />
                    <Win 
                        icon= {<FaDesktop />}
                        name = "Business Plan"
                        details = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo."
                    />
                </div>
            </div>
       </section>
    )
}

export default Mission