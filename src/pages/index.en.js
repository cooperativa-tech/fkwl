import React from 'react';

import BankDetails from 'root/components/BankDetails';
import SocialDetails from 'root/components/SocialDetails';
import Text from 'root/components/Text';
import Logo from 'root/components/Logo';
import Header from 'root/components/Header';
import Layout from 'root/components/Layout';
import Gallery from 'root/components/Gallery';

/* eslint-disable */
import fkwlGif from '../assets/fkwlGif.gif';
import logo from '!file-loader!../assets/logoFkwl.svg';
/* eslint-enable */

import './index.css';

const IndexPage = () => {
  return (
    <Layout>
      <Header contact="Contact us" />
      <Text>
        <div styleName="textBlock">Olá,</div>
        <div styleName="textBlock">
          <span>O</span>
          <span styleName="bold"> From Kibera With Love </span>
          <span>
            is a project created by Marta Baeta in January 2013 with the goal of
            providing growth opportunities for the children of Kibera, one of
            the world’s biggest slums.
          </span>
        </div>
        <div styleName="textBlock">
          In Kenya, having access to education is a luxury that most children
          can’t afford, simply because most of them don’t have a family that can
          ensure their future.
        </div>
        <div styleName="textBlock">
          Thanks to our friends, acquaintances and strangers who rapidly became
          friends, we are already able to ensure the education of over 100
          children.
        </div>
      </Text>
      <Gallery />
      <Text>
        <div styleName="textBlock">
          To get in touch, email us at:
          <p styleName="bold text ">
            <a
              styleName="emailAddress"
              href="mailto:hello@fromkiberawithlove.com"
            >
              hello@fromkiberawithlove.com
            </a>
          </p>
        </div>
      </Text>
      <Text>For donations, here’s the info you’ll need:</Text>
      <BankDetails
        nib="0065 0924 00195900000 75"
        iban="PT 065 0924 00195900000 75"
        swift="BESZ PT PL"
      />
      <Text>
        <div styleName="textBlock">
          And you’ll find more info about us here:
        </div>
        <SocialDetails />
        Asante Sana(Muito obrigado),
        <p>From Kibera with Love</p>
      </Text>
      <div styleName="imageSection ">
        <div styleName="logo">
          <Logo src={logo} alt="From Kibera With Love Logo" />
        </div>
        <Logo src={fkwlGif} alt="Happy kid fkwl" />
      </div>
    </Layout>
  );
};

export default IndexPage;
