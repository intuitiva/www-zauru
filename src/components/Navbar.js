import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo900_obscuro_transparente.png'

const Navbar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="blog" className="navbar-item">
        <figure className="image">
          <img src={logo} alt="Zauru" style={{ width: '76px' }} />
        </figure>
        <div class="logo-blog-text" style={{ color: `white`}}> &nbsp; // Blog</div>
      </Link>
    </div>

    <div className="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a className="navbar-item button" href="/home/#Modules">
            Conoce m&aacute;s de Zauru
          </a>
          <a className="navbar-item button" href="https://app.zauru.com" target="_blank" rel="noopener noreferrer">
            Ingresar
          </a>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
