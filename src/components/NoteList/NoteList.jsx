import React from 'react'
import Note from '../Note/Note'
import { useNotes } from '../../context/NoteContext'

export default function NoteList() {
    const { notes } = useNotes()

    return (
        <div>
            <h1>Notes</h1>
            {/* <ul>
             {notes.map((note)=> {
                 return(
                    <li key={`${note.name}-${note.message}`}>
                    <Note note={note} />
                    </li> 
                 )
             })}   
            </ul> */}
        </div>
    )
}
