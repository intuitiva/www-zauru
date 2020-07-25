# www.zauru.com site with Gatsby + Netlify CMS (webflow for static pages)

**Note:** This starter uses the [Gatsby v2 Beta](https://www.gatsbyjs.org/blog/2018-06-16-announcing-gatsby-v2-beta-launch/).

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

### Access Locally
```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ npm install
$ gatsby develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ npm run serve
```

## Netlify Identity (links from email not working)

In order to the links from the email to work (invitations, confirmations, password recovery, email change) we need to add the index.js back (copy from src/pages/blog/index.js) push it and delete the redirects configuration netlify.toml and gatsby-node.js

## NOTES

We kept gatsby 2.20.28 as it is the last one that doesnt give an ugly error when building/develop.

