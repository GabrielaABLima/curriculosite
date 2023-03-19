import React from 'react'
import '../index.css';
import { Link, animateScroll as scroll } from "react-scroll";

function Menu() {
  const handleClick = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuint",
    });
  };
  return (
    <div className='menu'>
        <div>
        <a href="#main" onClick={handleClick}>
          <p>Home</p>
        </a>
            
            <a href='#sobre'>
              <p>Sobre</p>
            </a>
            <a href='#formacaoAcademica'>
              <p>Formação Acadêmica</p>
            </a>
            
            <a href='#projetos'>
              <p>Projetos</p>
            </a>
            <a href='#habilidade'>
              <p>Habilidades</p>
            </a>
            
        </div>
    </div>
  )
}

export default Menu