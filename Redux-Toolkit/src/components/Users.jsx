import React, { useEffect } from 'react'
import { fetchUsers } from '../featurs/users/UsersSlice'
import { useDispatch, useSelector } from 'react-redux'
function Users() {
 const dispath = useDispatch()
 const users = useSelector((state)=>state.users)
 console.log(users);
 
 useEffect(()=>{
    dispath(fetchUsers()) 
 }, [])
 
  return (

    <>
    </>
  )
}

export default Users