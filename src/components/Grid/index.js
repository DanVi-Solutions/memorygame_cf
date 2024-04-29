import { Gride, Texto } from "./styled";
import Card from "../Card";
import { useRef, useState } from "react";
import { duplicateRegenerateSortArray } from '../../utils/card_utils'

function Grid( {cards} ) {
    
    const [stateCards, setStateCards] = useState(() => {
        return duplicateRegenerateSortArray(cards);
    })
    const first = useRef(null);
    const second = useRef(null);
    const unflip = useRef(false);
    const [matches, setMatches] = useState(0);
    const [moves, setMoves] = useState(0);

    const handleClick = (id) => {
        const newStateCards = stateCards.map((card) => {
            //se o id do cartao nao for o id clicado, nao faca nada
            if(card.id !== id) return card;
            //Se o cartao ja estiver virado, nao faca nada
            if(card.flipped) return card;

            //desviro pessiveis cartas erradas
            if(unflip.current && first.current && second.current){
                //A pessoa errou
                first.current.flipped = false;
                second.current.flipped = false;
                first.current = null;
                second.current = null;
                unflip.current = false;
            }
            //virar o card
            card.flipped = true;

            //configura o primeiro e segundo card clicados
            if(first.current == null){
                first.current = card;
            } else if(second.current == null) {
                second.current = card;
            }

            //Se eu tenho dois cartoes virados
            //Posso checar se estao corretos
            if(first.current && second.current){
                if(first.current.back === second.current.back){
                    //A pessoa acertou
                    first.current = null;
                    second.current = null;
                    setMatches((m) => m + 1);
                } else {
                    unflip.current = true;
                }

                setMoves((m) => m + 1);
            }

            return card;
        });
        setStateCards(newStateCards);
    }

    return(
        <>
        <Texto>
            <h1>Jogo da Memoria</h1>
        <p>Movimentos: {moves} | Acertos: {matches}</p>
        </Texto>
            <Gride>
                {stateCards.map((card) => {
                return <Card {...card} key={card.id} handleClick={handleClick}/>;
                })}
            </Gride>
        </>
    )
}

export default Grid;