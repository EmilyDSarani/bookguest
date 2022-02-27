import React from 'react'
import { useUser } from '../../context/UserContext'

export default function Header() {
    const { user } = useUser()
    return (
        <header>
            {user ? (
                <p>Signed in as <div>{user}</div></p>
            ) : (
                <p>Who is Signing?</p>
            )}
        </header>
    )
}
