import React from 'react';
import { Image } from 'react-native';
import { Container, Text } from './styles';
import endomorfo from '../../assets/endomorfo.png';
import ectomorfo from '../../assets/ectomorfo.png';
import mesomorfo from '../../assets/mesoformo.png';

const BodyType: React.FC = () => (
  <Container>
    <Text>Qual seu tipo de corpo?</Text>
    <Image source={endomorfo} />
    <Image source={ectomorfo} />
    <Image source={mesomorfo} />
  </Container>
);

export default BodyType;
