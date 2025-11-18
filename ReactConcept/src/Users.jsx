import React, { useEffect } from 'react'

function Users() {
    useEffect(()=>{

       const  getUsers = async ()=>{

        try{

            const res = await  fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json()
            console.log(data);
            
        }

        catch(errors){

            console.log(errors);
            

        }

       
    }
       getUsers()

    },[])
    return (
        <div>Users</div>
    )
}

export default Users