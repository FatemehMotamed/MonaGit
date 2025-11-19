import React, { useEffect, useState } from 'react'

function Users() {
    const [users, setUsers] = useState([])
    const [isLoad, setIsLoad] = useState(false)
    const [error, setError] = useState(false)
    const [id, setId] = useState("")
    let timeoutId 

    useEffect(() => {

        const controller = new AbortController()
        const getUsers = async () => {

            if(!id){
                setUsers([])
                return
            }

            try {

                const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`,
                    {signal : controller.signal}
                )
                if (!res.ok) throw new Error(res.status)
                const data = await res.json()
                console.log(data);
                if(id){
                    setUsers([data])
                }
                
                setIsLoad(true)

            }

            catch (error) {
                if (error.name !== "AbortError" && !controller.signal.aborted){
                    console.log(error);
                    setError(error.message)

                }


            }


        }
        timeoutId = setTimeout(getUsers, 500);

        return () =>{
            clearTimeout(timeoutId)
            controller.abort()
            console.log("Aborted");
            
        }

    }, [id])

    const ChangeHandler = (event) => {
        setId(event.target.value)
    }
    return (
        <>
            <input type="text" onChange={ChangeHandler} />
            {!isLoad && !error && <h3>Loading...</h3>}
            {error && <p>Error: {error}</p>}
            <ul>

                {
                    users.map((user) => (<li key={user.id}>{user.title}</li>))
                }
            </ul>
        </>
    )
}

export default Users