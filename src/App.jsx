import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/home/Home.jsx'
import NavBar from './components/layout/navbar/NavBar.jsx';
function App() {


  return (
    <Router>
    <div className='relative z-0'>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
