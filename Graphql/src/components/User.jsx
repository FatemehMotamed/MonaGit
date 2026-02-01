import { useQuery } from '@apollo/client/react'
import React, { useState } from 'react'
import { GET_USER } from '../graphql/queries'

function User() {
    const [id, setId] = useState(2)
    const {data, loading, error} = useQuery(GET_USER,{
        variables:{
            id:id
        }
    })
    console.log(data)
    if (loading) return <h3>Loading...</h3>
    if (error) return <h3>Somthing went wrong</h3>
  return (
    <>
        <input type="text"  value={id} onChange={(e) => setId(e.target.value)}/>    
    </>
  )
} 

export default User