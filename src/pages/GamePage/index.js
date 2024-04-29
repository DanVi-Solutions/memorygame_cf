// import logo from '../../images/LogoCaixa.svg'
import { PrimaryDiv, PrimaryHeader } from './style';
import React from 'react';

import { cards } from '../../data/cards'
import Grid from '../../components/Grid';

const handleClick = (id) => {
  console.log(id)
}

function MemoryGame() {

  return (
    <PrimaryDiv>
      <PrimaryHeader>
        <Grid cards={cards} />
      </PrimaryHeader>
    </PrimaryDiv>
  );
}

export default MemoryGame;
