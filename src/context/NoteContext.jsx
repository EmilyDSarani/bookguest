import { useContext, createContext, useState } from 'react'

//Create Context
//Remember that this is the start of our recipe
const NoteContext = createContext()

//Create Provider
//Remember that the provider is giving us access to the recipe book
const NoteProvider = ({ children }) =>{
    const [notes, setNotes] = useState([])
    return <NoteContext.Provider value={{notes, setNotes}}>{children}</NoteContext.Provider>   
}

//Create Custom Hook
const useNotes = () => {
    const context = useContext(NoteContext)

    if(context === undefined){
        throw new Error('useUser needs to be defined in the NoteContext Provider')
    }

    return context
}

export {NoteProvider, useNotes}