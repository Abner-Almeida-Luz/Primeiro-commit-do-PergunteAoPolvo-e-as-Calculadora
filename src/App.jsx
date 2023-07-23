import './App.css';
import { Outlet,Link } from 'react-router-dom';

function App() {
  return (
        <div id="App">
          <header id='Cabecalho'>
          <p>Se voce quiser ir para os conteudos acesse este link <Link to="/pergunteaopolvo">pergunteaopolvo</Link>
        . <Link to="/calculadoradeinvestimentos">calculadoradeinvestimentos</Link>
        e <Link to="/">Home</Link>
        </p>
          </header>
        <Outlet/>
      </div>
  );
}

export default App;
