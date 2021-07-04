// import React from 'react'

export const Head = (props) => {
    return (
        <div>
            <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
            <title>{props.title}</title>
        </div>
    )
}
