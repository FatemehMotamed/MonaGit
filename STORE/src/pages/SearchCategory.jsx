import React from 'react'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom'

function SearchCategory({ catName }) {
       const navigate = useNavigate()
    const goHome = () => {
        navigate('/', { replace: true })
    }
    return (
        <>
       <button onClick={goHome}>HOME</button>
            ##################
            {
              catName &&  catName.map(product => <Card key={product.id} product={product} />)
            }

        </>
    )
}

export default SearchCategory