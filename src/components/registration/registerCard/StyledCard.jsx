import styled from 'styled-components';

export const StyledCard = styled.div`
        transition: transform 2s;
        width: 50%;
    &.rotate {
        transform: rotateY(360deg);
    }
`