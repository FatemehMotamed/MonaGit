import React, { useRef, useState } from 'react'
import { InputRefContext } from './InputRefContext'

function InputRefprovider({ children }) {
    const inputRef = useRef()
    const [headerInput, setheaderInput] = useState(false)
    const [input, setInput] = useState('')

    return (

        <>
            <InputRefContext.Provider value={{ inputRef, headerInput, setheaderInput, input, setInput }}>
                {children}
            </ InputRefContext.Provider>
        </>
    )
}

export default InputRefprovider