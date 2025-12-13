
import React, { useEffect } from 'react'
import api from '../servises/config';

function Get() {
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await api.get("/posts")
                console.log(res);

            } catch (error) {
                console.log(error.message)
            }
        }
        getData()
    }, [])
    return (
        <div>Get</div>
    )
}

export default Get