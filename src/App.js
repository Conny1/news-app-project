
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Nav, About } from './components/Imports'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/about' element={ <About/> } />
        
      </Routes>
      
    </div>
  );
}

export default App;
