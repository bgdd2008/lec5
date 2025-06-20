import React, { useEffect } from 'react'

export default function RedBox() {

    useEffect(() => {

        return () => {
            console.log("unmounted")
        }
    } , [])
  return (
    <div className="box"></div>
  )
}
