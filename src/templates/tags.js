import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Background from '../img/lauren-mancke-60627.jpg'
import TwitterIcon from '../img/twitter-icon-white.svg'
import FacebookIcon from '../img/facebook-icon-white.svg'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <span>{post.node.frontmatter.title}</span>
        </Link>
      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } etiquetados con “${tag}”`

    return (
      <Layout>
        <section className="hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(34, 71, 101, .65), rgba(34, 71, 101, .65)), url(${Background})`, backgroundPosition: `0px 0px, 50% -94px`, backgroundRepeat: `repeat, no-repeat`, backgroundAttachment: `scroll, scroll`, backgroundSize: `auto, cover`}}>
          <div className="hero-head">
            <Navbar />
          </div>
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title" style={{ color: `white`}}>{tagHeader}</h1>
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
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <ol>{postLinks}</ol>
                <p>
                  <Link to="/tags/" className="button is-small">Ver todas las etiquetas</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
