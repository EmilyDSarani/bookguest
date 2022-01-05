import { useContext, createContext, useState } from 'react'

//Create Context
//Remember that this is the start of our recipe
const UserContext = createContext()

//Create Provider
//Remember that the provider is giving us access to the recipe book
const UserProvider = ({ children }) =>{
    const [user, setUser] = useState('')

//adding to the recipe, we now have a login and logout component. 
//this is how we are checking our auth

//if login is successful, then it will set the user
    const login = (email, password) => {
        const loginSuccessful =
          email === process.env.AUTH_EMAIL &&
          password === process.env.AUTH_PASSWORD;
        if (loginSuccessful) setUser( email );
        return loginSuccessful;
      };
    
      //logout is set to null and then the callback function will send it back to the main
      const logout = (callback) => {
        setUser(null);
        callback();
      };


    return <UserContext.Provider value={{ user, setUser, login, logout }}>{children}</UserContext.Provider>   
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