import React from 'react'

const Win = ({icon, name, details}) => {
    return (   
        <div className="mission__outcomes__wins__win">
            <h3>{icon} {name}</h3>
            <p>{details}</p>
        </div>
    )
}

export default Win