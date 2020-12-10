import React from 'react'
import Landing from './landing/landing'
import AnimatedCursor from "react-animated-cursor"
import Content from './content/content'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Welcome from './landing/welcome'
import Contentpage from './content/contentpage'

function App() {
  return (
   <Router>
   <AnimatedCursor outerSize={40}/>
    <main>
   <Route path="/" exact>
      <Welcome/>
   </Route>
   <Route path="/landing" exact>
      <Landing/>
   </Route>
   <Route path="/content" exact>
      <Content/>
   </Route>
   <Route path="/contentpage" exact>
      <Contentpage/>
   </Route>
    </main>
    </Router>
  )
}

export default App
