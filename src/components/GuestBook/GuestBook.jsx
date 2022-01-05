import { useState } from 'react'
import { useNotes } from '../../context/NoteContext'
import { useUser } from '../../context/UserContext'


export default function GuestBook() {
    const [name, setName] = useState('')
    const [inputNote, setInputNote] = useState('')
    //now we we need to access the Note state and User state 
    const { notes, setNotes } = useNotes()
    const { user, setUser} = useUser()

    function NameUpdate(){
        //I need to be able to update the name of the user here...
        //if it is not a note from the user, return
        if (!inputNote) return
         
        
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
            <label className="labelText" htmlFor="user">
                Your Name
            </label>
        </div>
        {/* all of the user name info will go here */}
        <input 
        id="user"
        type="text"
        placeholder="Your name"
        value={user.name}
        onChange={(e) => setName(e.target.value)}/>
    </div>
)
    const displayMessage = user ? `Thanks ${name}!` : 'Sign Book!'
    return (
    
        <>
        <h1>{displayMessage}</h1>
            <form onSubmit={handleSubmit}>
                {user ? null : nameDisplay}
            <div>
                <div>
                    <label className="labelText" htmlFor="inputNote">
                        Enter Message
                    </label>
                </div>
                <div>
                    {/* textarea apperently collects user inputs like comments or reviews, A text area can hold an unlimited number of characters, and the text renders in a fixed-width font, the guestNote state stuff will go here*/}
                    <textarea 
                    id="inputNote"
                    value={inputNote}
                    placeholder="Your Note!"
                    onChange={(e)=> setInputNote(e.target.value)} />
                </div>
            </div>
            <div>
                <button className= "button" type="submit">
                    Sign
                </button>
                {user && (
                <button
                type="button"
                onClick={()=>{
                    setUser('')
                    setName('')
                }}>
                    Not {name}?
                </button>
                 )}  
            </div>
            </form>
        </>
    )
}
