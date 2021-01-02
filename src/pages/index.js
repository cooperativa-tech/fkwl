import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Text from 'root/components/Text';
import Title from 'root/components/Title';
import Cta from 'root/components/Cta';
import Header from 'root/components/Header';
import SEO from 'root/components/SEO';
import Size from 'root/components/Title/size';

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
      <Text size={Size.normal}>
        <div styleName="section xl">
          <FormattedMessage id="hello" />,
        </div>
        <div styleName="textBlock">
          <FormattedMessage id="home1" />
        </div>
        <div styleName="textBlock">
          <span styleName="coloredText yellow">
            <FormattedMessage id="coloredTextSection2" />
          </span>
          <FormattedMessage id="home2" />
          <div styleName="textBlockImage">
            <div styleName="section1">
              <Img fluid={data.imageOne.childImageSharp.fluid} />
            </div>
          </div>
        </div>
        <div styleName="textBlock">
          <span styleName="coloredText orange">
            <FormattedMessage id="coloredTextSection3" />
          </span>
          <FormattedMessage id="home3" />
        </div>
        <div styleName="textBlock">
          <span styleName="coloredText blue">
            <FormattedMessage id="coloredTextSection4" />
          </span>
          <FormattedMessage id="home4" />
          <div styleName="textBlockImage">
            <div styleName="section2">
              <Img fluid={data.imageTwo.childImageSharp.fluid} />
            </div>
          </div>
        </div>
        <div styleName="textBlock section xl">
          <span styleName="coloredText red">
            <FormattedMessage id="coloredTextSection5" />
          </span>
          <FormattedMessage id="home5" />
        </div>

        <div styleName="section xxl">
          <Title>
            <FormattedMessage id="title" />
          </Title>
        </div>
      </Text>

      <div styleName="ctaSection">
        <Cta>
          <div styleName="cta">
            <Img fluid={data.imageThree.childImageSharp.fluid} />
          </div>
          <FormattedMessage id="ctaHomePage" />
        </Cta>
      </div>
    </>
  );
};

export const query = graphql`
  query {
    imageOne: file(relativePath: { regex: "/homepage_01/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { regex: "/homepage_02/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { regex: "/homepage_03/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
