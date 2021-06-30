// import React from 'react'
import Link from "next/link";
export const Header = (props) => {
    return (
        <header>
            <div className="bg-green-500">

            <h1 className= "text-2xl font-medium" >{props.title}</h1>
      
            <nav>
                <Link href="/overview">
                    <a >Overview</a>
                </Link >
           </nav>

             </div>
            
        </header>
    )
}