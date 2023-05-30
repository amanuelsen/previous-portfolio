import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Experience from './Pages/Experience'
import Projects from './Pages/Projects'
import Navbar from './Componets/Navbar'
import Footer from './Componets/Footer'
import ProjectsDisplay from './Pages/ProjectsDisplay'
import Contact from './Pages/Contact'
function App() {

  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/project/:id' element={<ProjectsDisplay/>}/>
        <Route path='/contact' element={<Contact/>}/>



      </Routes>
      <Footer/>
     </Router>
    </div>
  )
}

export default App
