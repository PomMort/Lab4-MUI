import './App.css'
import Navigation from './components/Navigation';
import Film from './components/Film';
import Footer from './components/Footer';
import Detail from './components/Detail';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom'
import News from './components/News';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Film />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
