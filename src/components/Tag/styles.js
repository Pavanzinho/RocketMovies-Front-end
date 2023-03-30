import styled from "styled-components";

export const Container=styled.span`
    padding: 5px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px; 

    font-size: 12px;
    line-height: 14px;
    
    background-color:${({theme})=>theme.COLORS.BACKGROUND_800} ;

    color: ${({theme})=>theme.COLORS.COLOR_TEXT_TAG} ;



`