
import { useQuery } from '@apollo/client/react'
import React from 'react'
import { GET_USERS } from '../graphql/queries'



function Users() {

    const {data,loading, error} = useQuery(GET_USERS)
    console.log(data)
    if (loading) return <h3>Loading...</h3>
    if (error) return <h3>Somthing went wrong</h3>
    
  return (

        data.users.data.map((user) =>(<p key={user.id}>{user.name}</p>))
    )
}

export default Users