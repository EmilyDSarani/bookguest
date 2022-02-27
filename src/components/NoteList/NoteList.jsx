import React from 'react'
import Note from '../Note/Note'
import { useNotes } from '../../context/NoteContext'

export default function NoteList() {
    const { notes } = useNotes()

    return (
        <div>
            <h1>Message Board</h1>
            <ul>
             {notes.map((note, i)=> {
                 return(
                    <li key={`${note.name}-${note.message}-${i}`}>
                    <Note note={note} />
                    </li> 
                 )
             })}   
            </ul>
        </div>
    )
}
