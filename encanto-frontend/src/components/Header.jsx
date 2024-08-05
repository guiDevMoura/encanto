import { Link } from 'react-router-dom';
import encantoLogo from '/LOGO3.png'
import './Header.css'

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={encantoLogo} className="logo" alt="encanto logo" />
      </Link>
      <Link to="/aboutus">
        <button>Sobre nós</button>
      </Link>
      <Link to="/transfers">
        <button>Transferências</button>
      </Link>
      <Link to="/accounts">
        <button>Contas</button>
      </Link>
      <Link to="/profile">
        <button>Perfil</button>
      </Link>
    </header>
  );
}

export default Header;
