import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo900_obscuro_transparente.png'
import background from '../img/lauren-mancke-60627.jpg'

const Navbar = () => (
  <div
    className="full-width-image-container margin-top-0"
    style={{ backgroundImage: `linear-gradient(180deg, rgba(34, 71, 101, .65), rgba(34, 71, 101, .65)), url(${background})`,
    backgroundPosition: `0px 0px 50% - 94px`, backgroundSize: `auto, cover`, backgroundRepeat: `repeat, no-repeat`, backgroundAttachment: `scroll, scroll`}}
  >
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/home/" className="navbar-item">
            <figure className="image">
              <img src={logo} alt="Zauru" style={{ width: '76px' }} />
            </figure>
          </Link>
        </div>
        <div className="navbar-start">
          <a className="navbar-item" href="/home/#Modules">
            Módulos
          </a>
          <a className="navbar-item" href="/home/#Pricing">
            Precios
          </a>
          <Link className="navbar-item" to="/blog">
            Blog
          </Link>
        </div>
        <div className="navbar-end">
          <a
            className="navbar-item"
            href="https://app.zauru.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ingresar
          </a>
        </div>
      </div>
    </nav>
  </div>
)

export default Navbar
