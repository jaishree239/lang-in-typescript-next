'use client'
import { useState } from 'react'
import {getDictionary} from '../../../getDictionary'


export default async function Home({params}) {
// export default  function Home({params}) {
  const lang = await getDictionary(params.lang)
  // const lang =  getDictionary(params.lang)
  
  // const [state, setState] = useState(false)
  // const handleClick = () => {
  //   setState(!state)
  // }

  console.log('params from home', lang)

  return (
    <main>
      {lang.form.title}

      {/* <div>
        <p 
        style={{color: state ? 'green': 'red' }}
        onClick={handleClick}></p>
      </div> */}
    </main>
  )
}
