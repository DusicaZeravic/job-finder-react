import styled from "styled-components";

export const StyledJobItem = styled.div`
    position: relative;
    width: 80%;
    margin: 0 auto;
    box-shadow: 1px 5px 12px 0px rgba(0,0,0,0.4);
    margin-bottom: 30px;
    padding: 10px 20px;
    &:last-child {
        margin-bottom: 100px;
    }
    &:hover .text {
         opacity: 0.4;
         filter: blur(2px);
    }
    &:hover .overlay {
        opacity: 1;   
    }

    .text {
        opacity: 1;
        display: block;
        width: 100%;
        height: auto;
        transition: 0.5s ease;
        backface-visibility: hidden;
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
    .location,
    .createdAt {
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
    .createdAt {
        width: 125px;
            i {
                color: rgba(75, 75, 75, 0.8);
                font-size: 25px;
        }
    }
    }
    
    .overlay {
        width: 100%;
        transition: 0.5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .buttons {
            display: flex;
            justify-content: center;
            align-items: center;
            button {
                width: 70px;
                height: 70px;
                border-radius: 50%;
                margin-right: 40px;
                border: none;
                outline: none;
                background: rgba(75, 75, 75, 0.7);
                i {
                    font-size: 30px;
                    transition: transform 1s;
                    color: rgba(255, 242, 0, 1);
                    cursor: pointer;
                }
                &:hover {
                    transform: scale(1.1);
                }
            }
            
        }
    }
    @media (max-width: 500px) {
        .buttons {
            button {
                width: 50px;
                height: 50px;
                margin-left: 30px;
            }
        }
    }

    @media (max-width: 360px) {
        .buttons {
            display: flex;
            flex-direction: column;
            button {
                margin-bottom: 40px;
            }
            &:last-child {
                margin-top: 40px;
            }
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

export const StyledMessage = styled.div`
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    padding: 5px 10px;
    color: #2a832a;
@media (max-width: 500px) {
    font-size: 18px;
}
`