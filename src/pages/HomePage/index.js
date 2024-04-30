import logo from '../../images/LogoCaixa.svg'
import './App.css';
import { PrimaryDiv, PrimaryHeader } from './style';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Componentes
import TextInput from '../../components/TextInput';
import PrimaryButton from '../../components/Button';
import { createUser } from '../../services/userServices';

function HomePage() {
  
  //States
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  //navigate
  const navigate = useNavigate();

  //Rota para ir para o jogo
  const goToGame = () => {
    upUser(login, password);
  };


   //Mudando o dado no input do email
   const handleChangeEmail = (event) => {
       setLogin(event.target.value);
   }

   //Mudando o dado no input da Senha
   const handleChangePassword = (event) => {
    setPassword(event.target.value);
}

    async function upUser(data1, data2){
      try{
        const response = await createUser(data1, data2);
        console.log(response);
      } catch(err){
        console.log(err);
      }
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
