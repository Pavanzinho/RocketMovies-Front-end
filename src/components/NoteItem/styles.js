import styled from "styled-components";

export const Container=styled.div`
    display: flex;
    align-items: center;
    height: 56px;
    
    background: ${({theme,isNew})=>isNew? "transparent": theme.COLORS.BACKGROUND_INPUTS};
    border: ${({theme,isNew})=>isNew? `3px dashed ${theme.COLORS.PLACEHOLDER_INPUT}`:"none"};
    border-radius:10px;
   

    >button{
        border:none;
        color:${({theme})=>theme.COLORS.PINK};
        background:none;
        padding-right:16px;
        font-size:22px;
    }

    >input{
        
        height:56px;
        padding-left:16px;
        width:100%;
        line-height:24px;
        
       
        
        background:transparent;
        color:${({theme})=>theme.COLORS.WHITE};
        border:none;

        &&::placeholder{
            color:${({theme})=>theme.COLORS.PLACEHOLDER_INPUT};
        }


    }



`