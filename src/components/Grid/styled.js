import styled from 'styled-components';

export const Gride = styled.div`
    max-width: 640px;
    min-width? 320px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 0.2rem;
`

export const Texto = styled.text`
    padding: 2rem 0;
`