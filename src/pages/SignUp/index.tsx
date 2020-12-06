import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, Subscribed, SubscribedText } from './stlyes';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Title>Faça seu cadastro!</Title>
      <Input name="name" icon="user" placeholder="Nome" />
      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="senha" icon="lock" placeholder="Senha" />
      <Button
        onPress={() => {
          console.log('ok');
        }}
      >
        Cadastrar
      </Button>
      <Subscribed>
        <SubscribedText>Já possui cadastro? Clique aqui</SubscribedText>
      </Subscribed>
    </Container>
  );
};

export default SignUp;
