'use client'
import { useState } from 'react'
  
const AboutPage = () => {
    const [state, setState] = useState(true)
  const handleClick = () => {
    setState(!state)
  }

  return (
    <div>

       <p
        style={{color: state ? 'green': 'red' }}
        >{state ? 'change the text': 'text changed'}</p>
        <button 
        onClick={handleClick}
        >click me</button>
      
    </div>
  )
}

export default AboutPage