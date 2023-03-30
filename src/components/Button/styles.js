import styled from "styled-components";

export const Container=styled.button`
    height: 48px;
    width: 100%;
    
    padding: 13.5px 32px;
    border: none;
    
    color: ${({theme})=>theme.COLORS.COLOR_TEXT_BUTTONS};
    background: ${({theme})=>theme.COLORS.PINK};
    
    border-radius: 8px;

    font-weight: 500;
    

`