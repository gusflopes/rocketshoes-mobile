import styled from 'styled-components/native';
import colors from '../../styles/colors';

import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
  position: absolute;
  top: 0;
  flex: 0;
  background: ${colors.dark};
  flex-direction: row;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: #191919;
  color: #fff;
  font-size: 12;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
