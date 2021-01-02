import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Text from 'root/components/Text';
import Header from 'root/components/Header';
import Gallery from 'root/components/Gallery';
import SEO from 'root/components/SEO';
import Size from 'root/components/Text/size';

import './index.css';

const IndexPage = ({ data }) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <SEO
        title="From Kibera With Love"
        description={formatMessage({ id: 'home1' })}
        keywords={formatMessage({ id: 'keywords' })}
      />

      <Header />

      <Text>
        <div styleName="xlargeSpacing imageWrapper">
          <div styleName="image">
            <Img
              alt="kids playing spider man"
              fluid={data.findUs.childImageSharp.fluid}
            />
          </div>
        </div>
        <div styleName="textBlock">
          <FormattedMessage id="findusOne" />
        </div>
        <div styleName="textBlock">
          <FormattedMessage id="findusTwo" />
        </div>
      </Text>
      <Gallery />
      <div styleName="coloredWrapper orange">
        <Text size={Size.large}>
          <div styleName="coloredSection">
            <FormattedMessage id="findusCta" />
            <br />
            <span styleName="bold contact">
              <a href="mailto:tour@fromkiberawithlove.com">
                <FormattedMessage id="findusEmail" />
              </a>
            </span>
          </div>
        </Text>
      </div>
    </>
  );
};

export const query = graphql`
  query {
    findUs: file(relativePath: { regex: "/photoKidFkwl/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
