import './App.css'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'

function App() {

  return (
    <>
      <div className='font-inter'>
       <Home />
       <About />
       <Services />
       <Portfolio />
       {/* <Faq /> */}
       {/* <Blog /> */}
       {/* <Contact /> */}
      </div>
    </>
  )
}

export default App
