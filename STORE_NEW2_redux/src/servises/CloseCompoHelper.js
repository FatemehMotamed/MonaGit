import React, { useEffect } from 'react'

function CloseCompoHelper(ref , setState) {
   useEffect(() => {
  
          const onMouseDown = (event) => {
  
              if (ref.current && !ref.current.contains(event.target)) {
                  setState(false)
              }
          }
  
          document.addEventListener('mousedown', onMouseDown)
          return () => document.removeEventListener('mousedown', onMouseDown)
          
      }, [setState])
}

export default CloseCompoHelper