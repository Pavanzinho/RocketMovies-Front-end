import styled from "styled-components";



export const Container=styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "content";
    
    >main{
        grid-area:content;
        padding: 0 114px;
        width: 100%;
        margin: 0 auto ;
        overflow-y: scroll;
    }


`; 
    
export const Form=styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 40px;
    padding-bottom: 85px;



    

        >div{ //<Link> é construido com tag "a"
            display: flex;
            align-items: center;
            gap: 8px;
            line-height: 22px;
            
            margin-bottom: -16px;

            svg{
                font-size:16px;
                color: ${({theme})=>theme.COLORS.PINK};
            }

            span{
                color: ${({theme})=>theme.COLORS.PINK};
            }

            button{
                background-color: transparent;
                border: none;
            }
        }

        >div:nth-of-type(1){
            display: flex;
            gap: 40px;
            
        }
        
        .tags{
            display: flex;
            gap:24px;
            background:${({theme})=>theme.COLORS.BACKGROUND_CONTAINER_NEWNOTE};
            height: 88px;
            align-items: center;
            padding:0 16px;
            border-radius: 8px;  
        }

        >footer{
            display: flex;
            width: 100%;
            gap:40px;
            margin-bottom: auto;

            .darkButton{
                background: #0D0C0F;
                color: ${({theme})=>theme.COLORS.PINK};
            }
        }
 
`;


