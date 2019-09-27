import React from 'react';

import BankDetails from 'root/components/BankDetails';
import SocialDetails from 'root/components/SocialDetails';
import Text from 'root/components/Text';
import Logo from 'root/components/Logo';
import Layout from 'root/components/Layout';

/* eslint-disable */
import fkwlGif from '../assets/fkwlGif.gif';
import logo from '!file-loader!../assets/logoFkwl.svg';
/* eslint-enable */

import './index.css';

const IndexPage = () => (
  <Layout>
    <Text>
      <div styleName="textBlock">Hi,</div>
      <div styleName="textBlock">
        <span styleName="bold">From Kibera With Love</span>
        is a project created
        by Marta Baeta in January 2013 with the goal of providing growth
        opportunities for the children of Kibera, on of the world’s biggest
        slums.
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
    <Text>
      <div styleName="textBlock">
        To get in touch, email us at hello@fromkiberawithlove.com.
        <p styleName="bold text ">hello@fromkiberawithlove.com</p>
      </div>
    </Text>
    <BankDetails
      nib="0065 0924 00195900000 75"
      iban="PT 065 0924 00195900000 75"
      swift="BESZ PT PL"
    />
    <Text>
      <div styleName="textBlock">And you’ll find more info about us here:</div>
      <SocialDetails />
      Asante Sana(Thank you very much),
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

export default IndexPage;
