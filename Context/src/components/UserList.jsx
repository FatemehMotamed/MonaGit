import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserProvider'

function UserList() {
    const {users, author} = useContext(UserContext)
    return (
        <>
                 
            {users.map((user) => (<p key = {user.id}>{user.name}</p>))}

            <p>Author: {author}</p>
        
        
        </>


    )
}

export default UserList