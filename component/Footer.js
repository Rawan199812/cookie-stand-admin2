import React from 'react'

export const Footer = (stands) => {
    return (
        <div>
            <footer className="bg-green-500">&copy;2021</footer>
            <p>{stands.length} Locations World Wide</p> 
            
        </div>
    )
}