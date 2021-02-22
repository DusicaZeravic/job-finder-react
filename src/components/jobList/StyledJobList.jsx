import styled from 'styled-components';

export const StyledJobList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 100px auto 50px auto;
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
`