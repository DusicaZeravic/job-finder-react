import styled from 'styled-components';

export const StyledFilter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 100px;
    width: 80%;
    padding: 25px;
    margin: 0 auto 80px auto;
    background-color: rgba(75, 75, 75, 0.8);
    border-radius: 2px;

    select, 
    input {
        flex: 1 1 auto;
        margin: 5px;
        height: 50px;
        border: none;
        outline: none;
        border-radius: 5px;
        font-size: 17px;
        color: #4b4b4b;
        background-color: #fafafa;
        text-indent: 5px;
        &:focus {
            box-shadow: 1px 5px 10px 0px #9e9e9e;
        }
        option {
            &:checked {
                font-weight: bold;
                background-color: rgba(75, 75, 75, 0.1)
            }
        }
    }
    @media (max-width: 768px) {
        select, 
        input {
           width: 180px;
           font-size: 12px;
        }
    }

    @media (max-width: 600px) {
        select, 
        input {
            width: 400px;
            margin: 0 auto;
            margin-bottom: 10px;
        }
    }
`
