import React from 'react'

const Win = ({icon, name, details}) => {
    return (   
        <div className="mission__outcomes__wins__win">
            <span>{icon}</span>
            <h3>{name}</h3>
            <p>{details}</p>
        </div>
    )
}

export default Win