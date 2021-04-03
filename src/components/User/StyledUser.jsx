import styled from 'styled-components';

export const StyledUser = styled.div`
    width: 100%;
    min-height: 85vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const StyledUserInfo = styled.div`
    width: 80%;
    height: 200px;
    background-color: #fff;
    margin: 40px auto;
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