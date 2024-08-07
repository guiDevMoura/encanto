import { useState } from 'react';
import { Link } from 'react-router-dom';
import encantoLogo from '/LOGO3.png'; 
import './Header.css';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };




  return (
    <header className="header">
      <Link to="/" className="logoContainer">
        <img src={encantoLogo} className="logo" alt="Encanto Logo" />
      </Link>
      <button className="menuToggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
      <span className='verticalMenu'>______________________________________________</span>
        <Link to="/gourmet">
          <button className="navButton">
          <span className='verticalMenu'>★</span> Linha Gourmet <span className='verticalMenu'>➤</span></button>
        </Link>
        <Link to="/integral">
          <button className="navButton">
          <span className='verticalMenu'>♥</span> Linha Integral <span className='verticalMenu'>➤</span></button>
        </Link>
        <Link to="/aboutus">
          <button className="navButton">
          <span className='verticalMenu'>ツ</span> Sobre nós <span className='verticalMenu'>➤</span></button>
        </Link>
        <Link to="/contact">
          <button className="navButton">
          <span className='verticalMenu'>✉</span> Fale conosco <span className='verticalMenu'>➤</span></button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;