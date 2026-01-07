import React from 'react'
import Header from '../components/Header'

function HeaderLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default HeaderLayout