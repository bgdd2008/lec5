import { useEffect, useState } from 'react'
import './App.css'
import Child from './components/Child'
import RedBox from './components/RedBox'
import Box from './components/Box'
import Time from './components/Time'
import ChangeBox from './components/ChangeBox'


function App() {

  const [count,setCount] = useState(0)
  const [show, setShow] = useState(true)
  const [clientXY , setClientXY] = useState({x:0 , y:0})
  const [word,setWord] = useState('')
 
  const bgColord = ['red' , 'green', 'blue']
  const [index ,setIndex] = useState(0)



  useEffect(() => {
    console.log("this runs once")
    
  }, [count])

  useEffect(() => {
   window.addEventListener('mousemove' , (e) => {
    setClientXY({ x: e.clientX , y: e.clientY})
   })

   window.addEventListener('keyup' , (e) => {
    setWord(prev => prev + e.key)
   })
  }, [])

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
      <div>
        {show ? <RedBox /> : null }
        <button style={{backgroundColor:  bgColord[index]}} onClick={() => setShow(!show)}>show/hide</button>
        <Box />
        <Time />
        <Child />
        <h1>Hello World</h1>
        <button onClick={() => setCount(count + 1)}> increase counter</button>
        <h1>X: {clientXY.x} Y: {clientXY.y}</h1>
        <h4>{word}</h4>
        <ChangeBox />
      </div>
  )
}
export default App
