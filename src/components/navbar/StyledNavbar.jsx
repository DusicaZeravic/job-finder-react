import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 15px;
    background-color: #fffa65;

    a {
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        color: #4b4b4b;

        &:focus {
            font-size: 17px;
        }
    }

    .logged-user {
        width: 20%;
        display: flex;
        justify-content: space-between;
        
        span {
            background-color: rgba(255, 242, 0, 0.8);
            padding: 10px 30px;
            color: #4b4b4b;
            font-size: 17px;
            letter-spacing: 1px;
            border-radius: 5px;
        }

        button {
            background-color: rgba(75, 75, 75, 0.6);
            color: #fafafa;
            padding: 0.6rem 2rem;
            border: none;
            outline: none;
            border-radius: 5px;
            font-size: 17px;
            letter-spacing: 1px;
            cursor: pointer;
            transition: all 0.5s;
            position: relative;
            &::after {
                content: "\f2f5";
                font-family: "Font Awesome 5 Free";
                font-weight: 700;
                position: absolute;
                left: 80%;
                top: 50%;
                right: 0;
                bottom: 0;
                opacity: 0;
                transform: translate(-50%, -50%);
            }
            &:hover {
                background-color: rgba(75, 75, 75, 0.9);
                transition: all 0.5s;
                border-radius: 10px;
                padding: 0.6rem 3rem 0.6rem 1.5rem;
                color: #ffffff;
                    &::after {
                        opacity: 1;
                        transition: 0.5s;
                        color: #fff;
                    }
            }
        }
    }

    @media (max-width: 768px) {
        .logged-user {
            width: 30%;
        }
         span {
            margin-right: 10px;
        }
    }

    @media (max-width: 600px) {
        .logged-user {
            width: 40%;
        }
    }
`

export const LeftStyledNavbar = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-around;
    margin-left: -70px;

    @media (max-width: 768px) {
        width: 30%;
    }

    @media (max-width: 600px) {
        margin-left: -20px;
    }

    @media (max-width: 360px) {
        width: 50%;
        margin-left: -5px;
    }
`
export const RightStyledNavbar = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-between;
    margin-left: 70px;

    @media (max-width: 768px) {
        width: 30%;
    }

    @media (max-width: 360px) {
        width: 60%;
    }
`


