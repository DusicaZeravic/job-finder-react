import styled from 'styled-components';

export const StyledSavedJobs = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    margin: 100px auto;
`

export const MainHeader = styled.div`
    margin-bottom: 50px;
    p:first-child {
        font-size: 25px;
        text-transform: uppercase;
    }
`

export const EmptyMessage = styled.div`
    width: 50%;
    margin: 0 auto;
    text-align: center;
    padding: 5px 5px;
    border-radius: 5px;
    background-color: rgba(75, 75, 75, 0.4);
    p, a {
        color: #fafafa;
        font-size: 18px;
        text-decoration: none;
    }
    a {
        text-transform: uppercase;
    }

    @media (max-width: 768px) {
        width: 60%;
    }

    @media (max-width: 500px) {
        width: 80%;
    }

    @media (max-width: 360px) {
        width: 100%;
        p, a {
            font-size: 15px;
        }
    }
`