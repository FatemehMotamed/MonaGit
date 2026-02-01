import React from 'react'
import Header from '../modules/Header'

function HeaderLayout({ children }) {

    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default HeaderLayout