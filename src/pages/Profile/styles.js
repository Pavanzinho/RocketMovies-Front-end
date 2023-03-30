import styled from "styled-components";

export const Container=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;

    >header{
        display: flex;
        gap: 8px;
        padding-left: 144px;

        align-items: center;
        justify-content: start;
        
        width:100%;
        height: 144px;

        background-color: ${({theme})=>theme.COLORS.BACKGROUND_NOTE};

        svg{
            color: ${({theme})=>theme.COLORS.PINK};
            width: 20px;
            height: 20px;
        }
        
        span{
            font-size: 20px;
            font-weight: 400;
            line-height: 22px;

            color: ${({theme})=>theme.COLORS.PINK};
        }

        button{
            background-color: transparent;
            border: none;
            
        }

    }

`

export const Form=styled.form`
    width: 340px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 8px;

    >div:nth-child(3){
        margin-bottom: 16px ;
    }

    .SvgMarginInInputs>svg{
        margin-left: 16px;
        margin-right: -8px;
    }
    

    >button{
        margin-top: 16px;
    }
    

`

export const Avatar=styled.div`
    width: 186px;
    height: 186px;
    align-self: center;

    position: relative;
   
   

    margin-top: -100px;
    margin-bottom: 64px;

    border: none;
   

    background-size: cover;

    >img{
        border-radius: 50%;
        width: 186px;
        height: 186px;
    }
    >label{
        
        width: 48px;
        height: 48px;

        border-radius: 50%;
        background: ${({theme})=>theme.COLORS.PINK};

        display: flex;
        align-items: center;
        justify-content: center;
        
        

        position: absolute;
        right: 6px;
        bottom:6px;

        svg{
            height: 20px;
            width: 20px;
            color:${({theme})=>theme.COLORS.BACKGROUND_800} ;
           
        }
    
        input{
            
            display: none;
        }
    }


`