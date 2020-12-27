import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Text from 'root/components/Text';
import Title from 'root/components/Title';
import Header from 'root/components/Header';
import SEO from 'root/components/SEO';
import Size from 'root/components/Text/size';
import Button from 'root/components/Button';

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

      <div styleName="xlargeSpacing">
        <Title size={Size.large}>
          <FormattedMessage id="helpUsTitle" />
        </Title>
      </div>

      <div styleName="coloredWrapper green xlargeSpacing">
        <Text size={Size.large}>
          <div styleName="smallSpacing">
            <Title size={Size.normal}>
              <FormattedMessage id="patronizeTitle" />
            </Title>
          </div>
          <div styleName="textBlock smallSpacing">
            <FormattedMessage id="patronizeText" />
            <div styleName="button sponsership ">
              <Button>
                <FormattedMessage id="godfatherButton" />
              </Button>
            </div>
          </div>
        </Text>
      </div>

      <div styleName="xlargeSpacing">
        <Text>
          <div styleName="smallSpacing">
            <Title size={Size.normal}>
              <FormattedMessage id="donative" />
            </Title>
          </div>
          <div styleName="textBlock">
            <FormattedMessage id="donativeOne" />
            <div styleName="separator" />
            <FormattedMessage id="donativeTwo" />
          </div>
        </Text>
      </div>

      <div styleName="xlargeSpacing coloredWrapper green">
        <Text size={Size.large}>
          <div styleName="smallSpacing">
            <Title size={Size.normal}>
              <FormattedMessage id="volunteeringKenia" />
            </Title>
          </div>
          <div styleName="textBlock">
            <FormattedMessage id="volunteeringKeniOne" />
            <div styleName="separator" />
            <FormattedMessage id="volunteeringKeniaTwo" />
            <div styleName="button volunteering">
              <Button>
                <FormattedMessage id="volunteeringButton" />
              </Button>
            </div>
          </div>
        </Text>
      </div>

      <div styleName="xlargeSpacing">
        <div styleName="image volunteering">
          <Img fluid={data.helpUsOne.childImageSharp.fluid} />
        </div>
        <Text>
          <div styleName="smallSpacing">
            <Title size={Size.normal}>
              <FormattedMessage id="volunteeringPortugal" />
            </Title>
          </div>
          <div styleName="mediumSpacing">
            <FormattedMessage id="volunteeringPortugalText" />
          </div>
        </Text>

        <Text>
          <div styleName="image partners">
            <Img fluid={data.helpUsTwo.childImageSharp.fluid} />
          </div>

          <div styleName="smallSpacing">
            <Title size={Size.normal}>
              <FormattedMessage id="partnersTitle" />
            </Title>
          </div>
          <div styleName="textBlock smallSpacing">
            <FormattedMessage id="partnersText" />
          </div>
        </Text>
      </div>

      <div styleName="coloredWrapper orange">
        <Text size={Size.large}>
          <div styleName="smallSpacing coloredSection">
            <FormattedMessage id="helpUsCtaVounteering" />
            <br />
            <span styleName="bold email">
              <a href="mailto:volunteers@fromkiberawithlove.com">
                <FormattedMessage id="volunteersEmail" />
              </a>
            </span>
          </div>
          <div styleName="coloredSection">
            <FormattedMessage id="helpUsCtaHelpUs" />
            <br />
            <span styleName="bold email">
              <a href="mailto:sponsors@fromkiberawithlove.com">
                <FormattedMessage id="sponsprsEmail" />
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
    helpUsOne: file(relativePath: { regex: "/helpUs_01/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    helpUsTwo: file(relativePath: { regex: "/helpUs_02/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
