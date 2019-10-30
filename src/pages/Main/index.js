import React from 'react';
import { FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/logo.png';

import {
  Container,
  Testando,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

class Main extends React.Component {
  state = {
    products: [],
  };

  renderProduct = () => {
    return (
      <Product>
        <ProductImage source={logo} />
        <ProductTitle>Tenis</ProductTitle>
        <ProductPrice>129,00</ProductPrice>
        <AddButton>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#fff" size={20} />
            <ProductAmountText>3</ProductAmountText>
          </ProductAmount>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton>
      </Product>
    );
  };

  render() {
    return (
      <Container>
        <Product>
          <ProductImage
            source={{
              uri:
                'https://static.netshoes.com.br/produtos/tenis-nike-zoom-gravity-masculino/14/HZM-1749-014/HZM-1749-014_detalhe2.jpg?ims=326x',
            }}
          />
          <ProductTitle>Tenis</ProductTitle>
          <ProductPrice>129,00</ProductPrice>
          <AddButton>
            <ProductAmount>
              <Icon name="add-shopping-cart" color="#fff" size={20} />
              <ProductAmountText>3</ProductAmountText>
            </ProductAmount>
            <AddButtonText>ADICIONAR</AddButtonText>
          </AddButton>
        </Product>
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Main',
};

export default Main;
