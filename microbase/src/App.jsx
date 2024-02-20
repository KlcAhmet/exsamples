import React from 'react'
import { useState } from 'react'
import Header from 'microHeader/Header'
/*import Body from 'microBody/Body'*/
import './App.css'

function App() {
const [count, setCount] = React.useState(0)
  return (
    <div className="container">
      <Header count={count} setCount={setCount} />
      <Body />
    </div>
  )
}

export default App
