import styled from 'styled-components';

export const StyledUser = styled.div`
    width: 100%;
    min-height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #4b4b4b;
`

export const StyledUserInfo = styled.div`
    width: 70%;
    height: 150px;
    background-color: #fff;
    margin: 120px auto 0 auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 250, 101, 0.5);
    img {
        border-radius: 50%;
        border: 8px solid #fafafa;
        width: 150px;
        margin-top: -50px;
    }

    p {
        font-size: 30px;
        letter-spacing: 1px;
    }
`