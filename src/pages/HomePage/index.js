import logo from '../../images/LogoCaixa.svg'
import './App.css';
import { PrimaryDiv, PrimaryHeader } from './style';
import React, { useState } from 'react';

//Componentes
import TextInput from '../../components/TextInput';
import PrimaryButton from '../../components/Button';

function HomePage() {

   //States
   const [login, setLogin] = useState('');
   const [password, setPassword] = useState('');

   //Mudando o dado no input do email
   const handleChangeEmail = (event) => {
       setLogin(event.target.value);
   }

   //Mudando o dado no input da Senha
   const handleChangePassword = (event) => {
    setPassword(event.target.value);
}

  return (
    <PrimaryDiv>
      <PrimaryHeader>
        <img src={logo} className="App-logo" alt="logo" />
        <TextInput tipo="email" value={login} onChange={handleChangeEmail} placeholder="Insira seu email"/>
        <TextInput tipo="password" value={password} onChange={handleChangePassword} placeholder="Insira sua senha"/>
        <PrimaryButton text="Pressione"/>
      </PrimaryHeader>
    </PrimaryDiv>
  );
}

export default HomePage;
