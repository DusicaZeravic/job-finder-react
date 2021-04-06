import styled from 'styled-components';

export const StyledSavedJob = styled.div`
    width: 100%;
    min-height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    margin-bottom: 40px;
    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    .v-line {
        border-right: 0.5px solid #777777;
        height: 150px;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 20px 0;
        .v-line {
            border: none;
            height: 0;
            border-bottom: 0.5px solid #777777;
            width: 90%;
            margin-top: 20px;
        }
    }
`

export const StyledDate = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    margin-right: 20px;
    i {
        font-size: 35px;
    }
    @media (max-width: 768px) {
        width: 100%;
        margin: 0;
    }
`

export const StyledContent = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    a {
        color: #4b4b4b;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
        a:last-child {
            font-size: 15px;
        }
    }
    p {
        font-size: 14px;
    }

    @media (max-width: 768px) {
        text-align: center;
    }
`