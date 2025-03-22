import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/home/Home.jsx'
import NavBar from './components/layout/navbar/NavBar.jsx';
import Footer from './components/layout/footer/Footer.jsx';
import Recipes from './pages/recipes/Recipes.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import RecipeForm from './pages/add-recipe/RecipeForm.jsx';
import Prototype from './pages/add-recipe/Prototype.jsx';
function App() {


  return (
    <Router>
      <ScrollToTop/>
      <div className='flex flex-col min-h-screen'>
        <NavBar/>
        <main className='flex-1'> {/* Главный контент должен растягиваться */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/add-recipe" element={<RecipeForm />} />
            <Route path="/prototype" element={<Prototype />} />
          </Routes>
        </main>
        <Footer className='mt-auto'/> {/* Добавляем mt-auto для подстраховки */}
      </div>
    </Router>
  )
}

export default App
