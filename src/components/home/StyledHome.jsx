import styled from 'styled-components';

export const StyledHome = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url('/background.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.85;

    h1 {
        text-transform: uppercase;
        color: #4b4b4b;
        font-size: 40px;
        letter-spacing: 5px;
        margin-top: 100px;
        text-shadow: 7px 7px 14px rgba(150, 150, 150, 0.83);    
    }

    a {
        color: #4b4b4b;
        text-decoration: none;
        margin-top: -50px;
        font-size: 18px;
        &:hover {
            text-decoration: underline;
        }
    }
`

export const StyledQuotes = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledCurrent = styled.div`
        width: 80%;
        height: 40vh;
        margin: 80px auto;
        border: 3px solid #4b4b4b;
        box-shadow: 1px 5px 16px 2px #d6cb2e;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 23px;
        border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
        letter-spacing: 1px;
        text-align: center;
        position: relative;
            &::before {
                content: '';
                border: 2px solid #fff200;
                display: block;
                width: 100%;
                height: 100%;
                position: absolute;
                /* transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg); */
                border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
            }
`

export const StyledPrevious = styled.div`
    font-size: 40px;
    color: #4b4b4b;
    text-shadow: 7px 7px 14px rgba(150, 150, 150, 0.83);
    opacity: 0.85;
    cursor: pointer;
`

export const StyledNext = styled.div`
    font-size: 40px;
    color: #4b4b4b;
    text-shadow: 7px 7px 14px rgba(150, 150, 150, 0.83);
    opacity: 0.85;
    cursor: pointer;
`