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
      <Header contact="Contacta-nos" />
      <Text>
        <div styleName="textBlock">Olá,</div>
        <div styleName="textBlock">
          <span>O</span>
          <span styleName="bold"> From Kibera With Love </span>
          <span>
            é um projeto criado pela portuguesa Marta Baeta em Janeiro de 2013
            que tem como objetivo dar oportunidades de crescimento a crianças de
            Kibera, uma das maiores favelas do mundo.
          </span>
        </div>
        <div styleName="textBlock">
          No Quénia ter-se acesso à educação é um luxo e a maioria das crianças
          de Kibera não tem essa sorte, simplesmente porque muitas delas não têm
          uma família que consiga assegurar o seu futuro.
        </div>
        <div styleName="textBlock">
          Graças a amigos, conhecidos e estranhos que rapidamente se tornam
          amigos, conseguimos garantir educação a mais de 100 crianças.
        </div>
      </Text>
      <Gallery />
      <Text>
        <div styleName="textBlock">
          Para falar connosco, envia-nos um email para:
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
      <Text>Para donativos, aqui tens a informação que precisas:</Text>
      <BankDetails
        nib="0065 0924 00195900000 75"
        iban="PT 065 0924 00195900000 75"
        swift="BESZ PT PL"
      />
      <Text>
        <div styleName="textBlock">
          E aqui podes encontrar mais informação sobre nós:
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
