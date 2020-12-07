import React from 'react';
import { Container, Text } from './styles';
import Option from '../../components/Option';

const Dashboard: React.FC = () => (
  <Container>
    <Text>Qual sessão da nossa loja mais te interessa?</Text>
    <Option>Roupas</Option>
    <Option>Calçados</Option>
    <Option>Acessórios</Option>
    <Option>Perfumes</Option>
  </Container>
);

export default Dashboard;
