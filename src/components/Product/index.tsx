import React from 'react';
import tshirtImage from '../../assets/tshirt.png';
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';


import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt = "T-shirt" src={tshirtImage}/>
          </Gallery>
          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o seu produto que está esperando ou devolvemos o seu dinheiro
          </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia eleifend arcu id tincidunt.
      Phasellus molestie justo mollis, consectetur massa ut, finibus diam. Duis commodo pulvinar lorem,
      venenatis tempor ex gravida eget. In vestibulum fringilla massa. Sed in nibh id magna efficitur mollis
      cursus ut enim. Aenean sodales egestas fringilla.
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED<br />
      - 1x LED<br />
      - 1x LED<br />
      - 1x LED<br />
      - 1x LED<br />
      <br />
      Sed vulputate odio iaculis aliquet commodo. Praesent ultrices nunc nec nunc pretium eleifend.
      Suspendisse suscipit nulla elit, sit amet eleifend odio luctus ac. Cras vitae dolor eget odio malesuada tempus.
       Integer congue suscipit diam, eu ultricies lorem aliquet at. Donec vel feugiat enim.
       Suspendisse rutrum sagittis facilisis. Mauris in leo accumsan, lobortis velit ut, dignissim erat.
       Etiam ut lectus ac velit finibus dictum.
    </p>

  </Description>
);

export default Product;
