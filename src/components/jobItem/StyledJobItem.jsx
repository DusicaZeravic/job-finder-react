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

    button {
        background-color: #fffa65;
        border: none;
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