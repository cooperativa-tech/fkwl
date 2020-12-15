import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import Cta from 'root/components/Cta';
import Text from 'root/components/Text';
import TitleAbout from 'root/components/TitleAbout';
import Header from 'root/components/Header';
import SEO from 'root/components/SEO';
import Size from 'root/components/Text/size';
/* eslint-disable */
import educationOne from '!file-loader!../../assets/aboutUs/educationOne.png';
import educationTwo from '!file-loader!../../assets/aboutUs/educationTwo.png';
import activitiesOne from '!file-loader!../../assets/aboutUs/activitiesOne.png';
import activitiesTwo from '!file-loader!../../assets/aboutUs/activitiesTwo.png';
import activitiesThree from '!file-loader!../../assets/aboutUs/activitiesThree.png';
import activitiesFour from '!file-loader!../../assets/aboutUs/activitiesFour.png';
import foodOne from '!file-loader!../../assets/aboutUs/foodOne.png';
import healthOne from '!file-loader!../../assets/aboutUs/healthOne.png';
import healthTwo from '!file-loader!../../assets/aboutUs/healthTwo.png';
import clothesOne from '!file-loader!../../assets/aboutUs/clothesOne.png';
import clothesTwo from '!file-loader!../../assets/aboutUs/clothesTwo.png';
import familySupportOne from '!file-loader!../../assets/aboutUs/familySupportOne.png';
import familySupportTwo from '!file-loader!../../assets/aboutUs/familySupportTwo.png';
import microCreditOne from '!file-loader!../../assets/aboutUs/microCreditOne.png';
/* eslint-enable */

import './index.css';

const IndexPage = () => {
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
            <img
              styleName="educationImage"
              src={educationOne}
              alt="kids playing spider man"
            />
            <img
              styleName="educationImageTwo"
              src={educationTwo}
              alt="kids playing spider man"
            />
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
          <img
            styleName="activitiesImage"
            src={activitiesOne}
            alt="kids playing spider man"
          />
          <img
            styleName="activitiesImageTwo"
            src={activitiesTwo}
            alt="kids playing spider man"
          />
          <img
            styleName="activitiesImageThree"
            src={activitiesThree}
            alt="kids playing spider man"
          />
          <img
            styleName="activitiesImageFour"
            src={activitiesFour}
            alt="kids playing spider man"
          />
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
          <img
            styleName="feedingImage"
            src={foodOne}
            alt="kids playing spider man"
          />
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
          <img
            styleName="healthImage"
            src={healthOne}
            alt="kids playing spider man"
          />
          <img
            styleName="healthImageTwo"
            src={healthTwo}
            alt="kids playing spider man"
          />
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
          <img
            styleName="clothingImage"
            src={clothesOne}
            alt="kids playing spider man"
          />
          <img
            styleName="clothingImageTwo"
            src={clothesTwo}
            alt="kids playing spider man"
          />
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
          <img
            styleName="familySupportImage"
            src={familySupportOne}
            alt="kids playing spider man"
          />
          <img
            styleName="familySupportImageTwo"
            src={familySupportTwo}
            alt="kids playing spider man"
          />
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
          <img
            styleName="microCreditImage"
            src={microCreditOne}
            alt="kids playing spider man"
          />
        </div>
      </div>

      <div styleName="ctaSection">
        <Cta>
          <FormattedMessage id="aboutCtaText" />
          <img
            styleName="ctaImage"
            src={clothesTwo}
            alt="kids playing spider man"
          />
        </Cta>
      </div>
    </>
  );
};

export default IndexPage;
