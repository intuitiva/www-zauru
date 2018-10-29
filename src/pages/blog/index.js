import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import Background from '../../img/lauren-mancke-60627.jpg'
import TwitterIcon from '../../img/twitter-icon-white.svg'
import FacebookIcon from '../../img/facebook-icon-white.svg'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="hero is-medium" style={{ backgroundImage: `linear-gradient(180deg, rgba(34, 71, 101, .65), rgba(34, 71, 101, .65)), url(${Background})`, backgroundPosition: `0px 0px, 50% -94px`, backgroundRepeat: `repeat, no-repeat`, backgroundAttachment: `scroll, scroll`, backgroundSize: `auto, cover`}}>
          <div className="hero-head">
            <Navbar />
          </div>
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title" style={{ color: `white`}}>Blog</h1>
              <h2 className="subtitle" style={{ color: `white`}}>Ideas, ejemplos y opiniones</h2>
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
          <div className="container">
            {posts
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Leer Más →
                    </Link>
                  </p>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "DD/M/YYYY")
          }
        }
      }
    }
  }
`
