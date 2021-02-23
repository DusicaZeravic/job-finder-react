import styled from 'styled-components';

export const StyledRegisterBack = styled.div`
        width: 100%;
        height: 500px;

    div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 1px 5px 12px 0px rgba(0,0,0,0.4);
        text-align: center;
        color: #4b4b4b;

        i {
            font-size: 130px;
            color: rgba(0, 128, 0, 0.4);
            margin-bottom: 30px;
        }

        p {
            padding: 10px 100px;
            background-color: rgba(0, 128, 0, 0.4);
            color: #fafafa;
            margin-bottom: 100px;
            font-weight: bold;
            border-radius: 2px;
            letter-spacing: 1px;
        }

        a {
            font-size: 20px;
            color: #4b4b4b;
            text-decoration: none;
            text-transform: uppercase;
            padding: 10px 30px;
            border-radius: 2px;
            font-weight: bold;
            background-color: rgba(255, 250, 101, 0.5);
            &:hover {
                background-color: rgba(255, 250, 101, 1);
            }
        }
    }
      
`