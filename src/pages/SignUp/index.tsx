import React, { useRef, useCallback } from 'react';
import { Alert } from 'react-native';
import * as Yup from 'yup';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, Subscribed, SubscribedText } from './stlyes';

interface SignIn {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleSignUp = useCallback(
    async (data: SignIn) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/usuario', data);
        Alert.alert('Cadastro realizado com sucesso!');

        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [navigation],
  );

  return (
    <Container>
      <Title>Faça seu cadastro!</Title>
      <Form ref={formRef} onSubmit={handleSignUp}>
        <Input name="name" icon="user" placeholder="Nome" />
        <Input
          autoCorrect={false}
          name="email"
          autoCapitalize="none"
          icon="mail"
          placeholder="E-mail"
        />
        <Input secureTextEntry name="senha" icon="lock" placeholder="Senha" />
        <Button
          onPress={() => {
            formRef.current?.submitForm();
          }}
        >
          Cadastrar
        </Button>
      </Form>
      <Subscribed>
        <SubscribedText>Já possui cadastro? Clique aqui</SubscribedText>
      </Subscribed>
    </Container>
  );
};

export default SignUp;
