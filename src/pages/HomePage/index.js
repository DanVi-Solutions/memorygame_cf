import logo from '../../images/LogoCaixa.svg'
import './App.css';
import { PrimaryDiv, PrimaryHeader } from './style';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Componentes
import TextInput from '../../components/TextInput';
import PrimaryButton from '../../components/Button';

function HomePage() {

  //navigate
  const navigate = useNavigate();

  //Rota para ir para o jogo
  const goToGame = () => {
    navigate('/game');
  };

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
        <PrimaryButton text="Pressione" onClick={goToGame}/>
      </PrimaryHeader>
    </PrimaryDiv>
  );
}

export default HomePage;
