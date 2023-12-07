'use client'
import { useState, useEffect } from 'react'

interface Data {
  id: number;
  title: string;
}

const AboutPage: React.FC = () => {
  const [state, setState] = useState<number>(0)
  const [data, setData] = useState<Data[]>([])

  const handleClick = () => {
    if (state == 2) {
      setState(0)
    } else {
      setState((prev) => prev + 1)
    }
  }

  const obj = [
    {
      text: '1st',
      color: 'red',
      bg: 'blue'
    },
    {
      text: '2nd',
      color: 'blue',
      bg: 'grey'
    },
    {
      text: '3rd',
      color: 'green',
      bg: 'aqua'
    },

  ]

  const apiCall = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const json = await res.json()
    setData(json)
  }

  useEffect(() => {
    apiCall()
  }, [])

  return (
    <div>
      <div style={{ color: obj[state]?.color, backgroundColor: obj[state]?.bg }}>{obj[state]?.text}</div>
      <button onClick={handleClick}>Button</button>
      <ul>
        {data.length > 0 && data.map((item) => {
          return (
            <li key={item.id}>{item.title}</li>
          )
        })}
      </ul>
    </div >
  )
}

export default AboutPage