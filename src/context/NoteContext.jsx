import { useContext, createContext, useState, useEffect } from 'react'

//Create Context
//Remember that this is the start of our recipe
const NoteContext = createContext()

//Create Provider
//Remember that the provider is giving us access to the recipe book
const NoteProvider = ({ children }) =>{
    const [note, setNote] = useState(
        //might need to drop a useEffect here later on


    {})
    return <NoteContext.Provider value={{note, setNote}}>{children}</NoteContext.Provider>   
}

//Create Custom Hook
const useNote = () => {
    const context = useContext(NoteContext)

    if(context === undefined){
        throw new Error('useUser needs to be defined in the NoteContext Provider')
    }

    return context
}

export {NoteProvider, useNote}