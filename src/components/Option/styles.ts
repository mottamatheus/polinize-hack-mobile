import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 90px;
  background: #f7b731;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const ButtonText = styled.Text`
  color: #234478;
  font-size: 22px;
`;
