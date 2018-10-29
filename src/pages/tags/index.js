import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import Background from '../../img/lauren-mancke-60627.jpg'
import TwitterIcon from '../../img/twitter-icon-white.svg'
import FacebookIcon from '../../img/facebook-icon-white.svg'

const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Layout>
    <section className="hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(34, 71, 101, .65), rgba(34, 71, 101, .65)), url(${Background})`, backgroundPosition: `0px 0px, 50% -94px`, backgroundRepeat: `repeat, no-repeat`, backgroundAttachment: `scroll, scroll`, backgroundSize: `auto, cover`}}>
      <div className="hero-head">
        <Navbar />
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title" style={{ color: `white`}}>Etiquetas</h1>
        </div>
      </div>
      <div className="hero-foot hero-social">
        <h6 className="hero-foot-header" style={{ color: `white`}}>Síguenos en</h6>
        <div className="hero-foot-line"></div>
        <div className="social-icons">
          <a href="https://twitter.com/zauru_erp" target="_blank" rel="noopener noreferrer">
            <img src={TwitterIcon} alt="Twitter" />
            </a>
          <a href="https://facebook.com/zauruerp" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook" />
          </a>
        </div>
      </div>
    </section>
    <section className="section">
      <Helmet title={`Etiquetas | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <ol>
              {group.map(tag => (
                <li key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="columns">
          <div className="column is-10 is-offset-1 post-bottom-info">
            <Link to={`/blog`} className="button is-small">← Regresar al Blog</Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
