import styled from "styled-components";

export const Container=styled.textarea`
    
    width: 100%;
    
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_INPUTS};
    border: none;
    border-radius: 10px;
    height: 274px;
    padding: 19px 24px; 

    resize: none;

    color:${({theme})=>theme.COLORS.WHITE};
    
   
    
        &&::placeholder{
            color:${({theme})=>theme.COLORS.PLACEHOLDER_INPUT};
        }
    
    
`


