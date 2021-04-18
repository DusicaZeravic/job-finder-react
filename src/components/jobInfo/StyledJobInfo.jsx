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
    animation: slide 2s;

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

    @keyframes slide {
    from {
        opacity: 0;
        transform: translateY(150px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

    @media (max-width: 600px) {
        h3 {
            font-size: 14px;
        }
    }

    @media (max-width: 360px) {
        margin: 30px 0;
    }
`

export const JobTitle = styled.h1`
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 7px 7px 14px rgba(150, 150, 150, 0.83); 

    @media (max-width: 768px) {
        font-size: 22px;
    }

    @media (max-width: 600px) {
        font-size: 18px;
    }

    @media (max-width: 440px) {
        font-size: 12px;
    }
`

export const Experience = styled.h4`
    span {
        background: #4b4b4b;
        color: #fafafa;
        padding: 10px 30px;
        margin-left: 10px;
        border-radius: 2px;
        opacity: 0.85;
    }

    @media (max-width: 600px) {
        font-size: 14px;
    }
`

export const JobDescription = styled.p`
    text-indent: 100px;
    line-height: 30px;

    @media (max-width: 768px) {
        font-size: 13px;
    }

    @media (max-width: 600px) {
        line-height: 25px;
        text-indent: 60px;
    }
`

export const Contact = styled.p`
    span {
        padding: 10px 20px;
        border-radius: 2px;
        margin: 0 20px;
        opacity: 0.85;
        &:first-child {
            background: #fafafa;
        }
        &:last-child {
            background: #4b4b4b;
            color: #fafafa;
        }
    }

    @media (max-width: 768px) {
        span {
            padding: 5px 30px;
            display: block;
            text-align: center;
            margin: 5px 0;
        }
    }

    @media (max-width: 500px) {
        font-size: 14px;
    }

    @media (max-width: 440px) {
        font-size: 12px;
    }
`

