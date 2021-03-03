import styled from 'styled-components';

export const StyledCompanyInfo = styled.div`
    width: 100%;
    min-height: 85vh;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    animation: appear 2s;

    
    @keyframes appear {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
`

export const StyledLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto;
    width: 40%;
    height: 550px;
    margin: 30px 30px;
    background-color: #fffa65;
    box-shadow: 1px 1px 6px 0px rgba(50, 50, 50, 0.48);
    h2 {
        font-size: 30px;
        padding: 20px 40px;
        position: relative;
        &::after, 
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            border: 2px solid #000;
            transition: transform .2s;
        }
        &::after {
            transform: translate(3px, 3px);
        }
        &::before {
            transform: translate(-3px, -3px)
        }
        &:hover::after,
        &:hover::before {
            transform: translate(0);
        }
    }

    h3 {
        font-size: 20px;
        letter-spacing: 1px;
    } 

    div {
        display: flex;
        align-items: center;
        span {             
            font-size: 25px;
            color: #3d3d3d;             
            margin-right: 20px;         
        }
    } 

    ul {
        margin-left: -30px;
        span {
            vertical-align: middle;
        }
        li {
            list-style-type: none;
            margin-bottom: 20px;
            vertical-align: middle;
     }
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

    @media (max-width: 768px) {
        margin-bottom: 60px;
    }

    @media (max-width: 440px) {
        h2 {
            font-size: 23px;
            padding: 15px 10px;
        }
        div {
            margin-left: 20px;
        }
    }

    @media (max-width: 360px) {
        h2 {
            font-size: 20px;
            padding: 15px 10px;
        }
        h3 {
            font-size: 18px;
        }
        div {
            margin-left: 20px;
        }
        div span {
            font-size: 20px;
            margin: 0 10px;
        }
        ul li {
            font-size: 15px;
            margin-left: 50px;
        }
    }
`

export const StyledRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 1 auto;
    width: 50%;
    height: 550px;
    margin: 30px 30px 30px 30px;
    background-color: #f5f5f5;
    box-shadow: 1px 1px 6px 0px rgba(50, 50, 50, 0.48);
    p {
        padding: 20px 30px;
        line-height: 40px;
        word-spacing: 2px;
    }

    p:last-child {
        font-weight: 600;
    }

    @media (max-width: 440px) {
        p:first-child {
            font-size: 13px;
            padding: 10px 10px;
            margin: 0;
        }
        p:last-child {
            font-size: 14px;
        }
    }

    @media (max-width: 360px) {
        p:first-child {
            font-size: 12px;
            padding-top: 50px;
            margin: 0;
        }

        p:last-child {
            font-size: 13px;
            margin: 0;
            padding: 0 0 40px 30px;
        }
    }
`