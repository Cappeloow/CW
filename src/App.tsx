import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import ContactPage from './pages/Contact/ContactPage';
import AboutPage from './pages/About/AboutPage';
import ProjectPage from './pages/Project/ProjectPage';
function App() {
  
  return (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectPage />} />
    </Routes>
  </Router>
  )
}

export default App
