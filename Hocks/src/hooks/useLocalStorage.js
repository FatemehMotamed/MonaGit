import { useEffect, useState } from "react"

const useLocalStorage = (key, initialValue) =>{

    const [value, setValue] = useState(()=>{
        const localValue = localStorage.getItem(initialValue)
        return localValue ? JSON.parse.apply(localValue) : initialValue
    })

    useEffect (()=>{

        localStorage.setItem(key, JSON.stringify(value))

    }, [value])

    return [value, setValue]
}

export {useLocalStorage}