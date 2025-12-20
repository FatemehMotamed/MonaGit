import React from 'react'
import Card from '../components/Card'

function CardLayout({ children }) {
    return (
        <>
            <Card>
                {children}
            </ Card>

        </>
    )
}

export default CardLayout