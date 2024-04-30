import styled from 'styled-components';

export const PrimaryDiv = styled.div`
    text-align: center;

    &.conjunto_lado_a_lado {
        position: absolute;
        display: flex;
        align-items: center; 
        flex-direction: row;
        top: 5vmin;
    }
`

export const PrimaryHeader = styled.header`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`

export const Input = styled.input`
    
`

export const Logo = styled.img`
    height: 10vmin;
    pointer-events: none;
    margin-left: 20px
`

export const Capa = styled.img`
    width: 106%;
    height: 100%;
    transform: translate( -2%, -10%) rotateZ(-5deg);
`

export const Text = styled.text`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateZ(-90deg);
    font-size: 16vmax;
    width: 100%; 
`

