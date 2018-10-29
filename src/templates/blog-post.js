import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Content, { HTMLContent } from '../components/Content'
import Background from '../img/lauren-mancke-60627.jpg'
import TwitterIcon from '../img/twitter-icon-white.svg'
import FacebookIcon from '../img/facebook-icon-white.svg'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  helmet,
  date,
  tags,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <PostContent content={content} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="post-bottom-info">
              <div>Posteado el</div>
              <div className="post-bottom-date">{date}</div>
              <div>con etiqueta</div>
              {tags && tags.length ? (
                <div>
                  {tags.map(tag => (
                    <span key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`} className="post-bottom-tag">{tag}</Link>
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-10 is-offset-1 post-bottom-info">
            <Link to={`/blog`} className="button is-small">← Regresar al Blog</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <section className="hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(34, 71, 101, .65), rgba(34, 71, 101, .65)), url(${Background})`, backgroundPosition: `0px 0px, 50% -94px`, backgroundRepeat: `repeat, no-repeat`, backgroundAttachment: `scroll, scroll`, backgroundSize: `auto, cover`}}>
        <div className="hero-head">
          <Navbar />
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            {post.frontmatter.tags && post.frontmatter.tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <ul className="taglist">
                  {post.frontmatter.tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`} className="button is-small">{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <h1 className="title" style={{ color: `white`}}>{post.frontmatter.title}</h1>
            <h2 className="subtitle" style={{ color: `white`}}>{post.frontmatter.description}</h2>
          </div>
        </div>
        <div className="hero-foot hero-social">
          <h6 className="hero-foot-header" style={{ color: `white`}}>Compártelo</h6>
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
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={<Helmet title={`${post.frontmatter.title} | Zauru Blog`} />}
        date={post.frontmatter.date}
        tags={post.frontmatter.tags}
      />

    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD/M/YYYY")
        title
        description
        tags
      }
    }
  }
`
