import styled from 'styled-components';

export const StyledRegister = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &::after {
        content: '';
        background-image: url('/job-finder-react/background1.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.3;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
    }

    @media (max-width: 768px) {
        &::after {
            background-size: 100% 100%;
        }
    }
`
