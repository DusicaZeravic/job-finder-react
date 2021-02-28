import styled from 'styled-components';

export const StyledRegisterFront = styled.div`
    width: 100%;

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 30px;
        box-shadow: 1px 5px 12px 0px rgba(0,0,0,0.4);
        text-align: center;
        color: #4b4b4b;

    h2 {
        text-transform: uppercase;
        margin: 50px 0 20px 0;
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
    }
        ul  li  label {
            flex: 1 0 120px;
            margin-right: 50px
        }

        ul  li  label + * {
            flex: 1 0 220px;
        }

        ul li input {
            border: 2px solid #eee;
            border-radius: 3px;
            outline: none;
            padding: 8px 20px;
            &:hover,
            &:focus-within {
                background-color: #eee;

            }
        }

        input[type="submit"] {
            cursor: pointer;
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

        .error-msg,
        .unique-error {
            font-size: 13px;
            color: #e05555;
            text-align: center;
            font-weight: bold;
        }
    }
`
