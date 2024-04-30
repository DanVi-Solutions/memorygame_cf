import logo from '../../images/LogoCaixa.svg';
import capa from '../../images/CapinhaCaixa.png';
import { Text, Logo, PrimaryDiv, PrimaryHeader, Capa } from './style';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css"; // Importa os estilos padrão
import './button.css';

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
      <Capa src={capa}/>
      <PrimaryHeader>
        <PrimaryDiv className="conjunto_lado_a_lado">
          <Logo src={logo} alt="logo" />
        </PrimaryDiv>
        <Text>Jogo da <br/> Memoria</Text>
        {/* <TextInput tipo="email" value={login} onChange={handleChangeEmail} placeholder="Insira seu email"/>
        <TextInput tipo="password" value={password} onChange={handleChangePassword} placeholder="Insira sua senha"/> */}
        <AwesomeButton type='primary' onPress={() => goToGame()} style={{ position:'absolute', bottom:'5vmin', width:'90%', height: '20vmin', fontSize:50}} className='aws-btn' size="large">Iniciar jogo</AwesomeButton>
      </PrimaryHeader>
    </PrimaryDiv>
  );
}

export default HomePage;
