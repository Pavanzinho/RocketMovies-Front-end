import styled from "styled-components";



export const Container=styled.button`
    width: 100%;
   

    border: none;
    padding: 32px;

    background: ${({theme})=>theme.COLORS.BACKGROUND_NOTE};
    border-radius: 16px;

    display: flex;
    flex-direction: column;
    gap: 15px;

    >p{
        color: ${({theme})=>theme.COLORS.GRAY_TEXT_NOTE};
        text-align: justify;
    }
    
    >h1{
        color:${({theme})=>theme.COLORS.WHITE} ;
    }
    
    >div{
        margin-top:-8px
    }
        
        svg{
            color: ${({theme})=>theme.COLORS.PINK} ;
        }

    >footer{
        display: flex;
        gap: 8px;

        
        
        
    }
    
        


`