import styled from 'styled-components';

export const StyledRegister = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        width: 40%;
        display: flex;
        flex-direction: column;
        box-shadow: 1px 5px 12px 0px rgba(0,0,0,0.4);
        text-align: center;
        padding: 30px 10px;
        color: #4b4b4b;

    h2 {
        text-transform: uppercase;
        margin-bottom: 50px;
        letter-spacing: 1px;
    }

    ul {
        list-style-type: none;
        padding: 0;
        max-width: 800px;
        margin: 0 auto;

        li {
            display: flex;
            flex-wrap: wrap;
            align-items: center;

            label {
                padding: 8px;
                font-weight: 300;
                letter-spacing: 1px;
                text-transform: uppercase;
            }
        }

        > li:not(:last-child) {
            margin-bottom: 20px;
        }
    }

        ul > li > label {
            flex: 1 0 120px;
            margin-right: 50px
        }

        ul > li > label + * {
            flex: 1 0 220px;
        }

        ul li input {
            padding: 15px; 
            border: none;
            outline: none;
            padding: 8px 16px;
        }

        input[type="submit"] {
            margin-left: auto;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-radius: 2px;
            background-color: #4b4b4b;
            color: #fafafa;
            opacity: 0.85;
            &:hover {
                opacity: 1;
            }
        }
    }
`
    