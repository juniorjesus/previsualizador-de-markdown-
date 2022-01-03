import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="Footer">
    <span>
      Desarrollado por:{' '}
      <a
        className="Footer-link"
        href="https://twitter.com/jrjesus18"
        target="_blank"
        rel="noopener noreferrer"
      >
         Jr. Jesús López
      </a>
    </span>
    <span> | </span>
    <span>
      <a
        className="Footer-link"
        href="https://github.com/juniorjesus"
        target="_blank"
        rel="noopener noreferrer"
      >
       Link Repositorio
      </a>
    </span>
  </footer>
);

export default Footer;
