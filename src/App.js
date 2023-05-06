import './App.css';
import Card from './Card';
import Imagem from './Imagem';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import logo from "./logo.svg"

function App() {
  return (
    <div className="App">
      <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/imagem">Imagem</Link>
            </li>
          </ul>
          <hr />
        <div className='teste'>
          <Routes>
            <Route path='/' element={<Card />} />
            <Route path='/imagem' element={<Imagem />} />
          </Routes>
          </div>

          <img src={logo} alt='' />

      </Router>

    </div>
  );
}

export default App;
