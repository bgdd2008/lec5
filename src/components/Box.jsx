import React from 'react'
import { useState } from 'react'

export default function Box() {
    const [boxColor , setBoxColor] = useState('red')

    const handleChangeBoxColor = () => {
    if(boxColor === 'red'){
      setBoxColor('yellow')
    }
    else if(boxColor === 'yellow'){
      setBoxColor('green')
    }
    else if(boxColor === 'green'){
      setBoxColor('red')
    }
  }
  return (
    <div>
      <div style={{backgroundColor: boxColor}} className='Box'></div>
        <br />
        <button onClick={handleChangeBoxColor}>Next</button>
    </div>
  )
}
