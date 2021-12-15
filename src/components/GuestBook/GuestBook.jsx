import { useState } from 'react'
import { useNote } from '../../context/NoteContext'
import { useUser } from '../../context/UserContext'


export default function GuestBook() {
    const [name, setName] = useState('')
    const [inputNote, setInputNote] = useState('')
    //now we we need to access the Note state and User state 
    const { notes, setNotes } = useNote()
    const { user, setUser} = useUser()

    function NameUpdate(){
        //I need to be able to update the name of the user here...
        //if it is not a note from the user, return
        if (!inputNote) return
        //I will need to take the guestNote and return their note? when the setUser gets set... 
        setUser(name)
        //then...with setNotes, I will need to set the message of that user
        //we want to spread the notes so that it will render all of the notes we have
        //we then want to be able to set the user name and their message
        //this is the larger notes that is being kept globally
        setNotes([...notes, {name, message: inputNote}])
        //then i will need to setGuessNote...to maybe an empty string?
        //after user hits the button to add the note, this will render an empty string to clear it out
        setInputNote('')
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        NameUpdate()
    }

const nameDisplay =(
    <div>
        <div>
            <label>
                Your Name
            </label>
        </div>
        {/* all of the user name info will go here */}
        <input 
        id="name"
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}/>
    </div>
)
    return (
        <>
            <h1>GuestBook</h1>
            <form onSubmit={handleSubmit}>
                {/* {user ? null : nameDisplay} */}
            <div>
                <div>
                    <label>
                        Enter Message
                    </label>
                </div>
                <div>
                    {/* textarea apperently collects user inputs like comments or reviews, A text area can hold an unlimited number of characters, and the text renders in a fixed-width font, the guestNote state stuff will go here*/}
                    <textarea 
                    id="inputNote"
                    value={inputNote}
                    onChange={(e)=> setInputNote(e.target.value)} />
                </div>
            </div>
            <div>
                <button>
                    Sign
                </button>

                <button>
                    Not User?
                </button>
            </div>
            </form>
        </>
    )
}
