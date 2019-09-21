import React from "react";

import BankDetails from "root/components/BankDetails";
import Text from "root/components/Text";
import Header from "root/components/Header";
import Image from "root/components/Image";
import Layout from "root/components/Layout";

/* eslint-disable */
import photo from "!file-loader!../assets/fkwl_kid.jpg";
/* eslint-enable */

import "./index.css";

const IndexPage = () => (
  <Layout>
    <Header />
    <Text>
      <div styleName="textBlock">Olá,</div>
      <div styleName="textBlock">
        O <span styleName="bold">From Kibera With Love</span> é um projeto
        criado pela portuguesa Marta Baeta em Janeiro de 2013 que tem como
        objetivo dar oportunidades de crescimento a crianças de Kibera, uma das
        maiores favelas do mundo.
      </div>
      <div styleName="textBlock">
        No Quénia ter-se acesso à educação é um luxo e a maioria das crianças de
        Kibera não tem essa sorte, simplesmente porque muitas delas não têm uma
        família que consiga assegurar o seu futuro.
      </div>
      <div styleName="textBlock">
        Graças a amigos, conhecidos e estranhos que rapidamente se tornam
        amigos, conseguimos garantir educação a mais de 100 crianças.
      </div>
    </Text>
    <Text>
      <div styleName="textBlock">
        Para falar connosco, envia-nos um email para:
        <p styleName="bold text ">hello@fromkiberawithlove.com</p>
      </div>
    </Text>
    <BankDetails
      nib="0065 0924 00195900000 75"
      iban="PT 065 0924 00195900000 75"
      swift="BESZ PT PL"
    />
    <Text>
      <div styleName="textBlock">
        E aqui podes encontrar mais informação sobre nós:
      </div>
      <div styleName="textBlock">
        <p styleName="bold">Facebook</p>
        <p styleName="bold">Instagram </p>
      </div>
      Asante Sana(Muito obrigado),
      <p>From Kibera with Love</p>
    </Text>
    <Image src={photo} alt="Happy kid fkwl" />
  </Layout>
);

export default IndexPage;
