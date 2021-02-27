import styled from 'styled-components';

export const StyledCreateJob = styled.div`
   width: 100%;
   display: flex; 
   flex-direction: column;
   justify-content: center;
`

export const StyledForm = styled.form`
    width: 70%;
    margin: 60px auto;
    box-shadow: 1px 2px 10px -2px rgba(0,0,0,0.55);
    background-color: #fff;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style-type: none;
        li {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin-left: 100px;
            width: 90%;
            label:not(.seniority-label), 
            p {
                width: 100%;
                letter-spacing: 1px;
                font-weight: 600;
            }
            
            input:not([type="radio"]), 
            textarea, 
            select {
                width: 80%;
                border: none;
                outline: none;
                background-color: #fafafa;
                padding: 10px 10px;
                margin: 10px 0 20px 0;
                border: 2px solid #eee;;
                border-radius: 2px;
            }
        }
    }

    h3 {
        border-bottom: 1px solid #dadada;
        margin: 20px 0  0 20px;
        font-size: 25px;
        font-weight: 600;
        color: #fff200;
    }

    @media (max-width: 768px) {
       ul li {
           margin-left: 10px;
           label {
               padding-bottom: 10px;
           }
       }
    }

    @media (max-width: 600px) {
        width: 85%;
    }

    @media (max-width: 500px) {
        ul li {
            input:not([type="radio"]), 
            textarea, 
            select {
                width: 350px;
            }
        }
    }

    @media (max-width: 440px) {
        width: 80%;
        ul li {
            input:not([type="radio"]), 
            textarea, 
            select {
                width: 300px;
            }
        }   
    }

    @media (max-width: 360px) {
        ul li {
            margin-left: 0;
            label:not(.seniority-label), 
            p {
                width: 250px;
            }
            input:not([type="radio"]), 
            textarea, 
            select {
                width: 250px;
            }
        } 
    }
`
export const StyledJobInfo = styled.div`
    .seniority {
        margin-bottom: 20px; 
        input {
            margin-right: 10px;
            vertical-align: middle;
        }
        label {
            margin-right: 30px;
            vertical-align: middle;
        }
    }

    @media (max-width: 440px) {
        .seniority {
            width: 90px;
            label {
                margin-right: 30px;
            }
        }
    }
`
export const StyledCompanyInfo = styled.div`
    
`

export const StyledErrorMsg = styled.div`
    .error-msg {
        width: 60%;
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        text-align: center;
        border-radius: 2px;
        color: #fafafa;
        background-color: rgba(233, 30, 30, 0.5);
    }
`

export const StyledSuccessMsg = styled.div`
    .success-msg {
        width: 60%;
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        text-align: center;
        border-radius: 2px;
        color: #fafafa;
        background-color: rgba(33, 119, 47, 0.4);
    }
`

export const StyledButton = styled.div`
    display: flex;
    justify-content: flex-end;
   input[type="submit"] {
            padding: 8px 60px;
            margin: 20px auto;
            cursor: pointer;
            outline: none;
            border: none;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-radius: 2px;
            background-color: #4b4b4b;
            color: #fafafa;
            opacity: 0.85;
            font-weight: 600;
            &:hover {
                opacity: 1;
            }
        }
` 
