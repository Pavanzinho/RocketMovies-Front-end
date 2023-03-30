import styled from "styled-components";


export const Container=styled.div`
    width: 100%;
    height: 100vh;

`

export const Main=styled.main`
    width: 100%;
    margin: 40px auto 156px;
    padding: 0 114px;
    
    >button{ //Botão de voltar ****COLOCAR ENVOLVER EM LINK DEPOIS.
        display: flex;
        align-items: center;
        gap: 8px;
        line-height: 22px;
        background: transparent;
        border: none;
        
        margin-bottom: 24px;

        svg{
            font-size:16px;
            color: ${({theme})=>theme.COLORS.PINK};
        }

        span{
            color: ${({theme})=>theme.COLORS.PINK};
        }
    }

    >div:nth-of-type(1){ // Título e nota
        display: flex;
        align-items: center;
        margin-bottom: 24px;
       
        h1{
            margin-right: 9px;
            line-height: 50px;
            font-weight: 500;
            font-size: 36px;
        }

        svg{
            margin-left: 10px;
            font-size: 20px;
            color:${({theme})=>theme.COLORS.PINK} ;
        }

        

    }
    

    >div:nth-of-type(2){  //imagem do usuário e data de criação da nota
        display: flex;
        align-items: center;
        gap: 8px;


        img{
            height: 16px;
            width: 16px;
            border-radius: 50%;
            border: 1px solid ;
            border-color: ${({theme})=>theme.COLORS.PLACEHOLDER_INPUT};
            box-sizing: border-box;
        }

        svg{
            color: ${({theme})=>theme.COLORS.PINK};

        }
    }

    >div:nth-of-type(3){ //tags da nota
        margin: 40px 0;
        display: flex;
        gap: 8px;
        
        span{
            background: ${({theme})=>theme.COLORS.BACKGROUND_NOTE};
            height: 24px;
            font-size: 12px;
            line-height: 14px;
        }
 
    }

    >div:nth-of-type(4){  //descrição da nota
        text-align: justify;
        margin-bottom: 123px;
    }

    >footer{
        button{
            background-color: ${({theme})=>theme.COLORS.PINK};;
            width: 10rem;
            height: 4rem;
            border-radius: 10px;

            >span{
                color: black;
                font-weight: bold;
                font-size: 1.2rem;
            }
        }
    }

`


