import React from 'react'
import Note from '../Note/Note'
import { useNote } from '../../context/NoteContext'

export default function NoteList() {
    const { notes } = useNote()

    return (
        <div>
            <h1>Notes</h1>
            <ul>
             {notes.map((note)=> {
                 return(
                    <li key={`${note.name}`}>
                    <Note note={note} />
                    </li> 
                 )
             })}   
            </ul>
        </div>
    )
}
