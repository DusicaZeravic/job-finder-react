import styled from 'styled-components';

export const StyledRegisterFront = styled.div`
    width: 100%;
    min-height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        width: 100%;
        min-height: 500px;
        display: flex;
        flex-direction: column;
        padding: 10px 30px;
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
            &:hover:not(input[type="submit"]),
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

    @media (max-width: 768px) {
       form {
           min-height: 500px;
           h2 {
               font-size: 20px;
               margin: 20px 0 10px 0;
           }
           ul li label {
               font-size: 12px;
               margin: 0 auto;
           }
           ul li input {
            padding: 5px 20px;
           }
           input[type="submit"] {
               margin-top: 40px;
           }
           .error-msg {
               margin: 1px 0;
           }
       }
    }

    @media (max-width: 500px) {
        form {
            width: 150%;
            h2 {
                font-size: 15px;
            }
        }
        
    }
`