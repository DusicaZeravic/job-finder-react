import  styled  from "styled-components";

export const StyledJobItem = styled.div`
    width: 80%;
    margin: 0 auto;
    box-shadow: 1px 5px 12px 0px rgba(0,0,0,0.4);
    margin-bottom: 30px;
    padding: 10px 20px;
    &:last-child {
        margin-bottom: 100px;
    }

    h3 {
       color: #3d3d3d;
    }

    a {
        text-decoration: none;
        color: #3d3d3d;
        &:hover {
            text-decoration: underline;
        }
    }

    .location {
        width: 100px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        i {
            color: #fff200;
            font-size: 25px;
            margin-top: 10px; 
        }
    }

    button:first-child {
        background-color: #fffa65;
        border: none;
        outline: none;
        padding: 10px 20px;
        opacity: 0.75;
        font-size: 15px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            opacity: 1;
        }
    }
`

export const StyledDeleteButton = styled.button`
    margin-left: 15px;
    border: none;
    outline: none;
    padding: 10px 20px;
    font-size: 15px;
    border-radius: 5px;
    color: #4b4b4b;
    background-color: rgba(167, 14, 14, 0.4);
    cursor: pointer;
    &:hover {
        background-color: rgba(167, 14, 14, 0.6);
    }
`