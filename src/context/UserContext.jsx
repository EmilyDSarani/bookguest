import { useContext, createContext, useState, useEffect } from 'react'

//Create Context
//Remember that this is the start of our recipe
const UserContext = createContext()

//Create Provider
//Remember that the provider is giving us access to the recipe book
const UserProvider = ({ children }) =>{
    const [user, setUser] = useState(
        //might need to drop a useEffect here later on


    {})
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>   
}

//Create Custom Hook
const useUser = () => {
    const context = useContext(UserContext)

    if(context === undefined){
        throw new Error('useUser needs to be defined in the UserContext Provider')
    }

    return context
}

export {UserProvider, useUser}