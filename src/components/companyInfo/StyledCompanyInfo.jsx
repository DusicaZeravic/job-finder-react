import styled from 'styled-components';

export const StyledCompanyInfo = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #4b4b4b;
    &::after {
        content: ' ';
        border-top: 90vh solid #fffa65;
        border-right: 100vW solid transparent;
        width: 0;
        position: absolute;
        z-index: -1;
    }

    h1 {
        text-transform: uppercase;
        text-shadow: 7px 7px 14px rgba(150, 150, 150, 0.83);    
    }

    div {
        display: flex;
    }
`

export const StyledLeftDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p:first-child {
        width: 70%;
        text-indent: 30px;
        line-height: 35px;
        margin-bottom: 70px;
    }

    p:last-child {
        text-transform: uppercase;
        font-weight: bold;
    }

    p span {
        padding: 70px 70px;
        background-color: #4b4b4b;
        border-radius: 50%;
        opacity: 0.75;
        color: #fafafa;
        font-size: 20px;
        margin-left: 30px;
    }
`

export const StyledRightDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    h3 {
        font-size: 25px;
        letter-spacing: 1px;
    }

    span {
        font-size: 25px;
        color: #fff200;
        margin-right: 20px;
    }

    li {
        list-style-type: none;
        margin-bottom: 20px;
    }

    a {
        color: #4b4b4b;
        text-decoration: none;
        background-color: #3d3d3d;
        opacity: 0.75;
        padding: 10px 20px;
        color: #fafafa;
        border-radius: 2px;
        &:hover {
            opacity: 1;
        }
    }

`