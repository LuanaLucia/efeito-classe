import './App.css';
import Card from './Card';
import Imagem from './Imagem';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
          <ul>
            <li>
              <Link to="/">Girar</Link>
            </li>
            <li>
              <Link to="/imagem">Imagem</Link>
            </li>
          </ul>
          <hr />
          <Routes>
            <Route path='/' element={<Card />} />
            <Route path='/imagem' element={<Imagem />} />
          </Routes>

      </Router>

    </div>
  );
}

export default App;
