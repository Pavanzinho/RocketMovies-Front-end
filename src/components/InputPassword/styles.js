import styled from "styled-components";




export const Container=styled.div`
    width: 100%;
    display: flex;
    align-items: center;
   
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_INPUTS};
    border-radius: 10px;

    >button{
        background: transparent;
        border: none;

        svg{
           color: ${({theme})=>theme.COLORS.WHITE}
        }
    }
    

    .caps-lock-warning{
        font-size:12px
    }

    >input{
        background-color: transparent;
        border: none;
        height: 56px;
        padding: 19px 24px; 
        color:${({theme})=>theme.COLORS.WHITE};
        width: 100%;

    

        &&::placeholder{
            color:${({theme})=>theme.COLORS.PLACEHOLDER_INPUT} ;
            font-size: 16px;
            font-weight: 400;
            line-height: 18.5px;
        }
    }

`

