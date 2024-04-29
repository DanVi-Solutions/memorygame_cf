import styled from 'styled-components';

export const Card_game = styled.div`
`

export const Card_content = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
    transform-style: preserve-3d;
    transition: transform 600ms ease-in-out;

    &.Card_content_flipped {
        transform: rotateY(180deg);
    }
`

//Tomar cuidado com o Position disso aqui
export const Card_face = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8rem;
    cursor: pointer;
`

export const Card_face_Front = styled(Card_face)`
    background: var(--color-primary);
    color: var(--color-text-light);
`

export const Card_face_Back = styled(Card_face)`
    background: var(--color-secondary);
    color: var(--color-text-dark);
    transform: rotateY(180deg);
`