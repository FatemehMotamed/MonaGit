import React, { createContext } from 'react'
import { useState } from "react"
export const UserContext = createContext()
function UserProvider({children}) {

    const [users, setUsers] = useState([
        { id: 1, name: "mona" },
        { id: 2, name: "fatemeh" }
    ])
    return (
        <>
        <UserContext.Provider value={{users, setUsers, author:"mona"}}>

          {children}

        </UserContext.Provider>

        
        </>
    )
}

export default UserProvider