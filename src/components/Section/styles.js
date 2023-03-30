import styled from "styled-components";

export const Container=styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 40px 0;

    >h2{
        margin-bottom: 24px;
    }
    
    >div{
       background: ${({theme})=>theme.COLORS.BACKGROUND_CONTAINER_NEWNOTE};
       width: 100%;
       height:88px;
       display: flex;
       padding: 16px;
       gap: 24px;
       border-radius: 8px;
    }

`