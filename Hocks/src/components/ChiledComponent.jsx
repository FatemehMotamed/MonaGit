import React, { memo } from 'react'

function ChiledComponent({number, numberHandler}) {
    console.log("child rendered")
  return (
    <div>number in child {number}</div>
  )
}

export default memo(ChiledComponent)