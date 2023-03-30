import styled from "styled-components";

import BackGround_SignIn from "../../images/BackGround_SignIn.png"


export const Container=styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
`

export const Form=styled.form`
    width: 44.2%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;

    

    >div {
    
        width: 350px;

        h1{
            font-weight: 700;
            line-height: 64px;
            font-size: 48px;
            color: ${({theme})=>theme.COLORS.PINK};
        }

        span{
            font-size: 14px;
            font-weight: 400;
            line-height: 19px;

            color: ${({theme})=>theme.COLORS.GRAY_DESCRIPTION};
        }

        h2{
            margin: 48px 0;
            font-weight: 500;
            font-size: 24px;
            line-height: 32px;
        }

        fieldset{
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom : 24px;
            border: none;

            div{
                padding: 0 16px;
            }

            
        }
            
    }

    >a{
        margin-top: 42px;
        display: flex;
        align-items: center;
        gap: 8px;

        border: none;
        background: transparent;

        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        
        svg{
            color: ${({theme})=>theme.COLORS.PINK};
            height: 16px;
            width: 16px;
        }
        
        >span{
            background:transparent;
            font-size: 16px;
            color: ${({theme})=>theme.COLORS.PINK};   
        }

    }
        
`
export const Background=styled.div`
    width: auto;

    background: url(${BackGround_SignIn}) no-repeat, center, center;
    flex: 1;
    
    background-size: cover;
    



`

