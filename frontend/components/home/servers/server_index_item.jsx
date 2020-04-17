import React from 'react'
import {NavLink, Link } from 'react-router-dom'

const ServerIndexItem = ({server, channels}) => {
     
    const icon = server.photoUrl ? (<img className="server-image-icon" src={server.photoUrl}></img>) : (<li>
        <p>
            {server.name[0]}
        </p>
    </li>)
     
    return (
        <NavLink to={ server.name === "Home" ? ('/channels/@me') : (`/channels/${server.id}/${server.activeChannel}`)} activeClassName="server-name-active" className="server-hover">
            <div className="server-name" >
                {icon}
            </div>
            <div className="server-name-hover">{server.name}</div>
        </NavLink> 
    )
}

export default ServerIndexItem