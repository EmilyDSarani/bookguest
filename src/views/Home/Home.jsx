import React from 'react'
import NoteList from '../../components/NoteList/NoteList'
import GuestBook from '../../components/GuestBook/GuestBook'
import { NoteProvider } from '../../context/NoteContext'

// we wrap <GuessBook /> and <NoteList /> in the NoteProvider tag that was imported in so that everything that is in App will get access to that specific state 
export default function Home() {
    return (
        <div>
            <NoteProvider>
            <GuestBook />
            <NoteList />
            </NoteProvider>
        </div>
    )
}
