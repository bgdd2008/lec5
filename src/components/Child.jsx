import React, { useEffect } from 'react'

export default function Child() {
  useEffect(() => {
    console.log("mounted copmponent")
  }, [])
  
  return (
    <div>Child</div>
  )
}
