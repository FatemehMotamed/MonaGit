import { useLazyQuery } from '@apollo/client/react'
import React, { useState } from 'react'
import { GET_USER } from '../graphql/queries'

function UserOnclick() { 

    const [id, setId] = useState(2)
    const [getUser, {data, loading, error,called}] = useLazyQuery(GET_USER)
    console.log({data, loading, error,called})

    if (loading) return <h3>Loading...</h3>
    if (error) return <h3>Somthing went wrong</h3>
    
  return (
    <>
        <input type="text"  value={id} onChange={(e) => setId(e.target.value)}/> 
        <input type="button" value="send" onClick={()=> getUser({variables:{id:id}})} />   
    </>
  ) 
}

export default UserOnclick