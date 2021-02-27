import styled from 'styled-components';

export const StyledJobInfo = styled.div`
    width: 100%;
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &::after {
        content: ' ';
        border-top: 85vh solid transparent;
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
    align-items: center;

    h1 {
        text-transform: uppercase;
        letter-spacing: 2px;
        text-shadow: 7px 7px 14px rgba(150, 150, 150, 0.83);    
    }

    a {
        color: #3d3d3d;
        &:hover {
            text-decoration: underline;
            color: #0d0d79;
        }
        &:active {
            color: #0d0daf;
        }

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
        padding: 10px 20px;
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

    @media (max-width: 768px) {
        h1 {
            font-size: 22px;
        }

        p {
            font-size: 13px;
        }

        p:last-child {
            text-indent: 10px;
            span {
                padding: 1px 30px;
                display: block;
                text-align: center;
                margin-bottom: 5px;
            }
        }
    }

    @media (max-width: 600px) {
        h1 {
            font-size: 15px;
        } 
        h3, h4 {
            font-size: 14px;
        }
        p {
            line-height: 25px;
            text-indent: 60px;
        }
    }

    @media (max-width: 440px) {
        h1 {
            font-size: 12px;
        }
    }
`