import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "content"
`;

export const Content = styled.div`
    grid-area: content;
    padding: 50px 106px 60px 123px;
    overflow-y: auto;
    overflow-x: none;

    >div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    
        button{
            height: 48px;
            width: 207px;
            padding: 13.5px 32px;
            border: none;
            color: ${({ theme }) => theme.COLORS.COLOR_TEXT_BUTTONS};
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 8px;
            background: ${({ theme }) => theme.COLORS.PINK};

        };

        h1{
            font-weight: normal;
            font-size: 32px;
            line-height:43px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }

    >main{
        margin: 40px 0 0;
        width: 100%;
        max-height: 704px;
        display: flex;
        flex-direction: column;
        gap: 24px;
        overflow-y: scroll;

        ::-webkit-scrollbar{
            width: 8px;
            height: 90px;
            
           
        }

        ::-webkit-scrollbar-thumb{
            background: ${({ theme }) => theme.COLORS.PINK};
            border-radius: 8px;
            
            
        }

        

    }
`





export const containerSearchInput = styled.input`
    
    width: 100%;
    display: flex;
    align-items: center;
   
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_INPUTS};
    border-radius: 10px;
`