import styled from 'styled-components';

export const StyledJobInfo = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &::after {
        content: ' ';
        border-top: 90vh solid transparent;
        border-right: 100vW solid #fffa65;
        width: 0;
        position: absolute;
        z-index: -1;
    } 
`

export const StyledInnerDiv = styled.div`
    width: 80%;
    color: #4b4b4b;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        text-transform: uppercase;
        letter-spacing: 2px;
        text-shadow: 7px 7px 14px rgba(150, 150, 150, 0.83);    
    }


    h4 span {
        background: #4b4b4b;
        color: #fafafa;
        padding: 10px 30px;
        margin-left: 10px;
        border-radius: 2px;
        opacity: 0.85;
    }

    p {
        text-indent: 100px;
        line-height: 30px;
    }

    p span {
        padding: 10px 30px;
        border-radius: 2px;
        margin: 0 20px;
        opacity: 0.85;
    }

    p span:first-child {
        background: #fafafa;
    }

    p span:last-child {
        background: #4b4b4b;
        color: #fafafa;
    }
`