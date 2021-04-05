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
    height: 200px;
    background-color: #fff;
    margin: 50px auto 0 auto;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        border-radius: 50%;
        width: 150px;
        margin-right: 100px;
    }

    p {
        font-size: 30px;
    }
`