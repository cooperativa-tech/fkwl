import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import _ from 'lodash';
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
              fluid(maxWidth: 1200, quality: 95) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  const selection = _.slice(images, 0, 5);

  return (
    <div styleName="root">
      {_.map(selection, image => {
        return (
          <div styleName="frame">
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
