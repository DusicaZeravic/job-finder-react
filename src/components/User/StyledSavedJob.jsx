import styled from 'styled-components';

export const StyledSavedJob = styled.div`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 20px;
    margin-bottom: 40px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    .v-line {
        border-right: 0.5px solid #777777;
        height: 150px
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
`

export const StyledContent = styled.div`
    width: 75%;
    margin-left: 20px;
    p {
        font-size: 15px;
    }
`