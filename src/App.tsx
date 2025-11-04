import { useState } from 'react'
import Card from '../components/card'
import './App.css'

function App() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <Card card_number={1} />
      </div>
    </>
  )
}

export default App
