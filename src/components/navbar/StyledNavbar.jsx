import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    width: 100%;
    height: 10vh;
    position: sticky;
    top: 0;
    z-index: 999;
    font-size: 15px;
    background-color: #fffa65;
        label,
        #hamburger {
            display: none;
        }
    
    .items {
        display: flex;
        a {
            width: 25%;
            padding: 28px;
            font-size: 15px;
            text-decoration: none;
            text-align: center;
            text-transform: uppercase;
            font-weight: bold;
            color: #4b4b4b;
            &:hover {
                background-color: #fff200;
            }
        }
        .logged-user {
        width: 45%;
        padding: 15px;
        display: flex; 
        justify-content: space-around;
        
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
}

    @media (max-width: 768px) {
        label {
            display: inline-block;
            color: #4b4b4b;
            background-color: #fff200;
            font-size: 25px;
            font-weight: bold;
            padding: 16px;
        }

        input:checked ~ .items {
            display: block;
        }

        .items {
            display: none;
        }

        .items a {
            display: block;
            width: 100%;
            border-top: 1px solid #fff200;
            background-color: rgba(255, 250, 101, 1);
            padding: 20px;
            &:hover {
                background-color: #fff200;
            }
        }
        .items {
            .logged-user {
                display: block;
                width: 100%;
                border-top: 1px solid #fff200;
                background-color: rgba(255, 250, 101, 1);
                text-align: center;
                padding: 10px;
                &:hover {
                    background-color: #fff200;
                    span {
                        background-color: #fffa65;
                    }
                }
                span {
                    margin-right: 50px;
                }
        }
        }
        
    }
`


