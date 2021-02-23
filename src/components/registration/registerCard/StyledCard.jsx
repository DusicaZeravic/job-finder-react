import styled from 'styled-components';

export const StyledCard = styled.div`
        transition: transform 2s;
        width: 50%;
        /* margin: 0 auto; */
        /* display: flex; */
        /* flex-direction: column; */
        /* align-items: center; */
        /* justify-content: center; */
    &.rotate {
        transform: rotateY(360deg);
    }
`