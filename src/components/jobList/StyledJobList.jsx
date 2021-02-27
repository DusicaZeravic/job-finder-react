import styled from 'styled-components';

export const StyledJobList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 100px auto 30px auto;
    color: #4b4b4b;

    .current-state {
        text-align: center;
        font-size: 30px;
        margin-bottom: 20px;
    }

    .empty-filter {
        margin: 0 auto;
        padding: 8px 120px;
        border-radius: 30px;
        background-color: rgba(255, 250, 101, 0.5);
        font-weight: bold;
        letter-spacing: 1px;
    }

    @media (max-width: 768px) {
        .current-state {
            font-size: 25px;
        }
    }

    @media (max-width: 600px) {
        .current-state {
            font-size: 20px;
        }
    }

    @media (max-width: 360px) {
        .current-state {
            font-size: 12px;
        }

        .empty-filter {
            padding: 5px 40px;
        }
    }
`

export const StyledCreateNew = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 40px;

    button {
        cursor: pointer;
        padding: 10px 50px;
        border: none;
        outline: none;
        font-size: 17px;
        background-color: #fffa65;
        color: #4b4b4b;
        border-radius: 2px;
        &:before {
            content: '+';
            padding-right: 20px;
            font-size: 17px;
        } 
        &:hover {
            background-color: #fff200;
        }
    }

    @media (max-width: 360px) {
        button {
            padding: 10px 30px;
            font-size: 15px;
        }
    }
`
