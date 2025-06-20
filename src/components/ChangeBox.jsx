import React, { useState, useEffect } from 'react'

export default function ChangeBox() {

 const bgC = ['red' , 'green', 'blue']
 const [index ,setIndex] = useState(0)

  useEffect(() => {
   let interval =  setInterval(() => {
     setIndex(prev => {
       if(prev === 2){
         return 0
       }else{
         return prev + 1
       }
     })
    }, 1000)
 
    return () => {
     clearInterval(interval)
    }
   }, [])
  return (
    <div style={{backgroundColor:  bgC[index] }} className='rr'>
    </div>
  )
}
