import { useState } from 'react';
import encantoLogo from '/LOGO3.png'; 
import './pages_css/Header.css';
import { HashLink } from 'react-router-hash-link';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100; // Altura do cabeçalho (ajuste conforme necessário)
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <HashLink to="#gourmet" className="logoContainer" scroll={el => scrollWithOffset(el)}>
        <img src={encantoLogo} className="logo" alt="Encanto Logo" />
      </HashLink>
      <button className="menuToggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
        <span className='verticalMenu'>______________________________________________</span>
        <HashLink to="#gourmet" scroll={el => scrollWithOffset(el)} onClick={closeMenu}>
          <button className="navButton">
            <span className='verticalMenu'>★</span> Linha Gourmet <span className='verticalMenu'>➤</span>
          </button>
        </HashLink>
        <HashLink to="#integral" scroll={el => scrollWithOffset(el)} onClick={closeMenu}>
          <button className="navButton">
            <span className='verticalMenu'>♥</span> Linha Integral <span className='verticalMenu'>➤</span>
          </button>
        </HashLink>
        <HashLink to="#aboutus" scroll={el => scrollWithOffset(el)} onClick={closeMenu}>
          <button className="navButton">
            <span className='verticalMenu'>ツ</span> Sobre nós <span className='verticalMenu'>➤</span>
          </button>
        </HashLink>
        <HashLink to="#contact" scroll={el => scrollWithOffset(el)} onClick={closeMenu}>
          <button className="navButton">
            <span className='verticalMenu'>✉</span> Fale conosco <span className='verticalMenu'>➤</span>
          </button>
        </HashLink>
      </nav>
    </header>
  );
}

export default Header;