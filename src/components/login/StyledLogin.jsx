import styled from 'styled-components';

export const StyledLogin = styled.div`
    width: 100%;
    min-height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &::after {
        content: '';
        background-image: url('/job-finder-react/background1.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.3;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
}

    @media (max-width: 768px) {
        &::after {
            background-size: 100% 100%;
        }
    }
`

export const StyledLoginFormDiv = styled.div`
    width: 400px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #4b4b4b;        
    box-shadow: 1px 5px 12px 0px rgba(0,0,0,0.4);

   @media (max-width: 768px) {
       min-height: 550px;
       margin: 60px 0;
   }

   @media (max-width: 360px) {
      height: 600px;
      width: 330px;
      form input {
        width: 300px;
      }
   }
`

export const StyledLogo = styled.div`
    background-color: #fffa65;
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border-radius: 50%;
    margin-bottom: 10px;
    i {
        font-size: 70px;
        line-height: 150px;
        display: flex;
        justify-content: center;
    }

    @media (max-width: 360px) {
        width: 100px;
        height: 100px;
        i {
            font-size: 50px;
            line-height: 100px;
        }
    }
`

export const Title = styled.h2`
    text-transform: uppercase;
    letter-spacing: 1px;

    @media (max-width: 360px) {
        font-size: 18px;
    }
`

export const StyledForm = styled.form`
        width: 100%;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
   a {
       text-align: center;
       margin-top: 50px;
       text-decoration: none;
       &:hover {
        text-decoration: underline;
       }
   }
`

export const InputContainer = styled.div`
    position: relative;
    input {
        font-size: 15px;
        padding: 10px 20px 10px 5px;
        border: none;
        outline: none;
        margin-top: 20px;
        width: 350px;
        border-radius: 2px;
        text-indent: 25px
    }
    input:focus:not(input[type="submit"]) {
        box-shadow: 0 0 0 2px rgba(216, 219, 33, 0.4);
    }
    input[type="submit"] {
        cursor: pointer;
        background-color: #4b4b4b;
        opacity: 0.85;
        color: #fafafa;
        text-transform: uppercase;
        letter-spacing: 1px;
        &:hover {
            opacity: 1;
        }
    }
    i {
        position: absolute;
        left: 5px;
        top: 30px;
        color: #4b4b4b;
        font-size: 18px;
    }

`

export const ErrorMessage = styled.p`
    font-size: 13px;
    color: #e05555;
    text-align: center;
    font-weight: bold;
`