import React from 'react'

export default function Note({note:{name, message}}) {
    return (
        <div>
            <div>
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
        </div>
    )
}
