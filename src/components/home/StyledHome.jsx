import styled from 'styled-components';

export const StyledHome = styled.div`
    width: 100%;
    min-height: 85vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url('/background.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
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

    @media (max-width: 768px) {
        height: 90vh;
        background-repeat: no-repeat;
        h1 {
            font-size: 35px;
        }
        a {
            font-size: 15px;
        }
    }

    @media (max-width: 440px) {
        h1 {
            font-size: 27px;
        }
    }

   @media (max-width: 360px) {
       width: 100%;
       h1 {
           font-size: 22px;
       }
       a {
           font-size: 13px;
       }
   }
`

export const StyledDiv = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        width: 75%;
    }

    @media (max-width: 360px) {
        width: 85%;
    }
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
                border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
            }

        @media (max-width: 768px) {
            font-size: 17px;
        }
        `

export const StyledPrevious = styled.div`
    font-size: 40px;
    color: #4b4b4b;
    text-shadow: 7px 7px 14px rgba(150, 150, 150, 0.83);
    opacity: 0.85;
    cursor: pointer;

    @media (max-width: 360px) {
        font-size: 30px;
    }
`

export const StyledNext = styled.div`
    font-size: 40px;
    color: #4b4b4b;
    text-shadow: 7px 7px 14px rgba(150, 150, 150, 0.83);
    opacity: 0.85;
    cursor: pointer;

    @media (max-width: 360px) {
        font-size: 30px;
    }
`