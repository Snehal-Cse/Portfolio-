
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/header'
import Main from './Components/Main/main'
import Footer from './Components/Footer/footer'
import About from './Components/About/about'
import Contact from './Components/Contact/contact'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path = "/" element={<Main />} />
          <Route path = "/about" element={<About />} />
          <Route path = "/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
