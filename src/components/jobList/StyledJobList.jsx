import styled from 'styled-components';

export const StyledJobList = styled.div`
    width: 100%;
    min-height: 85vh;
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
        margin: 100px 0 10px 0;
        .current-state {
            font-size: 25px;
        }
    }

    @media (max-width: 600px) {
        .current-state {
            font-size: 20px;
        }
    }

    @media (max-width: 440px) {
        .empty-filter {
            padding: 10px;
            text-align: center;
            font-size: 15px;
            margin: 20px 0 100px 0;
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
        font-weight: bold;
        background-color: #fffa65;
        color: #4b4b4b;
        border-radius: 2px;
        box-shadow: 0.3em 0.3em 0 0 #fff200, inset 0.3em 0.3em 0 0 #fff200;
        &:before {
            content: '+';
            padding-right: 20px;
            font-size: 18px;
        }
        &:hover,
        &:focus {
            box-shadow: 0 0 0 #fff200, inset 6em 3.5em 0 0 #fff200;
            color: #4b4b4b;
        } 
        &:hover {
            background-color: #fffa65;
        }
    }

    @media (max-width: 360px) {
        button {
            padding: 10px 30px;
            font-size: 15px;
        }
    }
`
