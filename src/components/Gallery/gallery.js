import React from 'react';
import Image from 'gatsby-image/withIEPolyfill';

import './index.css';

const Gallery = ({ images }) => (
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

export default Gallery;
