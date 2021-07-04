// import React from 'react'

// export const Footer = (stands) => {
//     return (
//         <div>
//             <footer className="bg-green-500">&copy;2021</footer>
//             <p>{stands.length} Locations World Wide</p> 
            
//         </div>
//     )
// }
export default function Footer(props) {
    return (
        <footer className="bg-green-300 pt-1 ... pb-1 ...">
            <p className="p-3 flex justify-center">
                {props.branches} Locations World Wide
            </p>
        </footer>
    )
}