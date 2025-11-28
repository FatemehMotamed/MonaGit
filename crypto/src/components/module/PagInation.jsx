import React from 'react'

function PagInation({ page, setPage }) {
  const decrease = () => {
    if (page > 1) {
      setPage(page => page - 1)
    }
  }

  const increase = () => {
     if (page < 10) {
      setPage(page => page + 1)
    }
  }

  return (
    <>
      <button onClick={decrease}>previous</button>
      <p>1</p>
      <p>2</p>
      <p>...</p>
      <p>
      {page>2 && page< 9 ? page : ''}
      </p>
      <p>9</p>
      <p>10</p>
      <button onClick={increase}>next</button>
    </>
  )
}

export default PagInation