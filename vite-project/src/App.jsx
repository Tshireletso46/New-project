import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
import AboutMe from './pages/AboutMe'
import Hero from './components/layout/MainNavigation'
import HomePage from './pages/HomePage'
import Contacts from './pages/contacts'
import Projects from './pages/projects'
import './App.css'

function App() {

  return (
    <>
    <Hero />
    
    <Switch>

      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path='/aboutme'>
      <AboutMe />
      </Route>

    <Route path='/contacts'>
      <Contacts />
    </Route>

    <Route path='/projects'>
      <Projects />
    </Route>

    </Switch>
    </>
  )
}

export default App
