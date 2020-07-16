import React from 'react';
import Gallery from './gallery.js'
import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const {
    allFile: { edges: images }
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { absolutePath: { regex: "assets/gallery/" } }) {
        edges {
          node {
            absolutePath
            id
            childImageSharp {
              fluid(maxWidth: 500, quality: 95) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return <Gallery images={images}/>
}
