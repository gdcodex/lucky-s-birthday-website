import React from 'react'
import Landing from './landing/landing'
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <main>
   <AnimatedCursor outerSize={40}/>
      <Landing/>
    </main>
  )
}

export default App
