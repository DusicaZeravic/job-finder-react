import styled from 'styled-components';

export const StyledPagination = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    button {
        cursor: pointer;
        padding: 8px 15px;
        font-size: 15px;
        background-color: rgba(75, 75, 75, 0.8);
        border: 1px solid #fafafa;
        outline: none;
        border-radius: 4px;
        color: #fafafa;
    }

    @media (max-width: 768px) {
        button {
            padding: 7px 15px;
        }
    }

    @media (max-width: 500px) {
        margin: 20px auto;
        .button {
            padding: 3px 8px;
        }
    }

    @media (max-width: 360px) {
        margin: 30px auto;
        
    }
`

export const StyledButtons = styled.div`
    width: 600px;
    text-align: center;

    @media (max-width: 600px) {
        width: 500px;
    }

    @media (max-width: 500px) {
        width: 300px;
    }

    @media (max-width: 360px) {
        width: 200px;
    }
`