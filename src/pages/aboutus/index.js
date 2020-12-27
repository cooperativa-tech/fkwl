import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { graphql } from 'gatsby';

import Cta from 'root/components/Cta';
import Text from 'root/components/Text';
import TitleAbout from 'root/components/TitleAbout';
import Header from 'root/components/Header';
import SEO from 'root/components/SEO';
import Size from 'root/components/Text/size';
import Img from 'gatsby-image';

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

      <div styleName="mediumSpacing abtouUsTitle ">
        <TitleAbout size={Size.large}>
          <FormattedMessage id="aboutUsTitle" />
        </TitleAbout>
      </div>

      <div styleName="widtherSection  xxxlargeSpacing">
        <Text size={Size.left}>
          <div styleName="smallSpacing">
            <TitleAbout size={Size.normal}>
              <span styleName="coloredText yellow">
                <FormattedMessage id="educationTitle" />
              </span>
            </TitleAbout>
          </div>
          <div styleName="textBlock smallSpacing">
            <FormattedMessage id="educationText" />

            <div styleName="educationImage">
              <Img fluid={data.educationOne.childImageSharp.fluid} />
            </div>
            <div styleName="educationImageTwo">
              <Img fluid={data.educationTwo.childImageSharp.fluid} />
            </div>
          </div>
        </Text>
      </div>

      <div styleName="widtherSection reverse xxxlargeSpacing">
        <Text size={Size.right}>
          <div styleName="smallSpacing">
            <TitleAbout size={Size.normal}>
              <span styleName="coloredText orange">
                <FormattedMessage id="activitiesTitle" />
              </span>
            </TitleAbout>
          </div>
          <div styleName="textBlock smallSpacing">
            <FormattedMessage id="activitiesTextOne" />
          </div>
          <div styleName="textBlock smallSpacing">
            <FormattedMessage id="activitiesTextTwo" />
          </div>
        </Text>
        <div styleName="activitiesImageWrapper">
          <div styleName="activitiesImage">
            <Img fluid={data.activitiesOne.childImageSharp.fluid} />
          </div>
          <div styleName="activitiesImageTwo">
            <Img fluid={data.activitiesTwo.childImageSharp.fluid} />
          </div>
          <div styleName="activitiesImageThree">
            <Img fluid={data.activitiesThree.childImageSharp.fluid} />
          </div>
          <div styleName="activitiesImageFour">
            <Img fluid={data.activitiesFour.childImageSharp.fluid} />
          </div>
        </div>
      </div>

      <div styleName="widtherSection xxxlargeSpacing">
        <Text size={Size.medium}>
          <div styleName="smallSpacing">
            <TitleAbout size={Size.normal}>
              <span styleName="coloredText blue">
                <FormattedMessage id="feedingTitle" />
              </span>
            </TitleAbout>
          </div>
          <div styleName="textBlock smallSpacing">
            <FormattedMessage id="feedingText" />
          </div>
        </Text>
        <div styleName="feedingImageWrapper">
          <div styleName="feedingImage">
            <Img fluid={data.foodOne.childImageSharp.fluid} />
          </div>
        </div>
      </div>

      <div styleName="widtherSection reverse xxxlargeSpacing">
        <Text size={Size.medium}>
          <div styleName="smallSpacing">
            <TitleAbout size={Size.normal}>
              <span styleName="coloredText red">
                <FormattedMessage id="healthTitle" />
              </span>
            </TitleAbout>
          </div>
          <div styleName="textBlock smallSpacing">
            <FormattedMessage id="healthText" />
          </div>
        </Text>
        <div styleName="healthImageWrapper">
          <div styleName="healthImage">
            <Img fluid={data.healthOne.childImageSharp.fluid} />
          </div>
          <div styleName="healthImageTwo">
            <Img fluid={data.healthTwo.childImageSharp.fluid} />
          </div>
        </div>
      </div>

      <div styleName="widtherSection xxxlargeSpacing">
        <Text size={Size.medium}>
          <div styleName="smallSpacing">
            <TitleAbout size={Size.normal}>
              <span styleName="coloredText yellow">
                <FormattedMessage id="clothingTitle" />
              </span>
            </TitleAbout>
          </div>
          <div styleName="textBlock smallSpacing">
            <FormattedMessage id="clothingText" />
          </div>
        </Text>
        <div styleName="clothingImageWrapper">
          <div styleName="clothingImage">
            <Img fluid={data.clothesOne.childImageSharp.fluid} />
          </div>
          <div styleName="clothingImageTwo">
            <Img fluid={data.clothesTwo.childImageSharp.fluid} />
          </div>
        </div>
      </div>

      <div styleName="widtherSection reverse xxxlargeSpacing">
        <Text size={Size.medium}>
          <div styleName="smallSpacing">
            <TitleAbout size={Size.normal}>
              <span styleName="coloredText orange">
                <FormattedMessage id="familySupportTitle" />
              </span>
            </TitleAbout>
          </div>
          <div styleName="textBlock smallSpacing">
            <FormattedMessage id="familySupportText" />
          </div>
        </Text>
        <div styleName="familySupportImageWrapper">
          <div styleName="familySupportImage">
            <Img fluid={data.familySupportOne.childImageSharp.fluid} />
          </div>
          <div styleName="familySupportImageTwo">
            <Img fluid={data.familySupportTwo.childImageSharp.fluid} />
          </div>
        </div>
      </div>

      <div styleName="widtherSection xxlargeSpacing">
        <Text size={Size.medium}>
          <div styleName="smallSpacing">
            <TitleAbout size={Size.normal}>
              <span styleName="coloredText blue">
                <FormattedMessage id="microCreditTitle" />
              </span>
            </TitleAbout>
          </div>
          <div styleName="textBlock smallSpacing">
            <FormattedMessage id="microCreditText" />
          </div>
        </Text>
        <div styleName="microCreditimageWrapper">
          <div styleName="microCreditImage">
            <Img fluid={data.microCreditOne.childImageSharp.fluid} />
          </div>
        </div>
      </div>

      <div styleName="ctaSection">
        <Cta>
          <FormattedMessage id="aboutCtaText" />
          <div styleName="ctaImage">
            <Img fluid={data.clothesTwo.childImageSharp.fluid} />
          </div>
        </Cta>
      </div>
    </>
  );
};
export const query = graphql`
  query {
    activitiesOne: file(relativePath: { regex: "/activities_01/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    activitiesTwo: file(relativePath: { regex: "/activities_02/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    activitiesThree: file(relativePath: { regex: "/activities_03/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    activitiesFour: file(relativePath: { regex: "/activities_04/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    educationOne: file(relativePath: { regex: "/education_01/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    educationTwo: file(relativePath: { regex: "/education_02/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    foodOne: file(relativePath: { regex: "/food_01/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    healthOne: file(relativePath: { regex: "/health_01/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    healthTwo: file(relativePath: { regex: "/health_02/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clothesOne: file(relativePath: { regex: "/clothes_01/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clothesTwo: file(relativePath: { regex: "/clothes_02/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    familySupportOne: file(relativePath: { regex: "/family_support_01/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    familySupportTwo: file(relativePath: { regex: "/family_support_02/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    microCreditOne: file(relativePath: { regex: "/microcredit_01/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
