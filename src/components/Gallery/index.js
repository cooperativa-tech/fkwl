import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image/withIEPolyfill';

import './index.css';

const Gallery = () => {
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

  return (
    <div styleName="root">
      {images.map(image => {
        return (
          <div styleName="frame" key={image.node.id}>
            <Image
              styleName="image"
              fluid={image.node.childImageSharp.fluid}
              alt="Image from kibera project"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
