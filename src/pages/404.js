import React from 'react'
import Layout from '../components/Layout'
import Background from '../img/bench-accounting-49909.jpg'

const NotFoundPage = () => (
  <Layout>
    <section className="hero is-large" style={{ backgroundImage: `linear-gradient(180deg, rgba(34, 71, 101, .65), rgba(34, 71, 101, .65)), url(${Background})`, backgroundPosition: `0px 0px, 50% -94px`, backgroundRepeat: `repeat, no-repeat`, backgroundAttachment: `scroll, scroll`, backgroundSize: `auto, cover`}}>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title" style={{ color: `white`, fontSize: `500%`}}>404</h1>
          <h2 className="subtitle" style={{ color: `white`}}>Parece que la p&aacute;gina buscada no existe.</h2>
          <a href="/home/" className="button special">Regrese a p&aacute;gina inicial</a>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
