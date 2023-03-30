import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area:header;
    
    display: flex;
    gap: 64px;
    align-items: center;
    justify-content: space-between;
    
    padding: 24px 123px;
    
    width: 100%;
    height: 116px;

    border-bottom: 1px solid ;
    border-bottom-color: ${({ theme }) => theme.COLORS.BORDER_HEADER_COLOR};

    >a{
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PINK};
        line-height: 32px;
        font-size: 24px;
        align-self: flex-end;
    }
    
    >div:nth-last-of-type(2){
        width: 100%;
        display: flex;
        align-items: center;
   
        /* background-color: ${({theme})=>theme.COLORS.BACKGROUND_INPUTS}; */
        background-color: ${({theme})=>theme.COLORS.BACKGROUND_INPUTS};
        border-radius: 10px;
    
        >input{
        background-color: transparent;
        border: none;
        height: 56px;
        padding: 19px 24px; 
        color:${({theme})=>theme.COLORS.WHITE};
        width: 100%;

            &&::placeholder{
                color:${({theme})=>theme.COLORS.PLACEHOLDER_INPUT} ;
                font-size: 16px;
                font-weight: 400;
                line-height: 18.5px;
            }
        }
    }
`;

export const Profile = styled.div`
    display: flex;
    text-align: justify;
    align-items: center;
    gap: 9px;
    height: 70px;
    min-width: 200px;
    max-width: 250px;
    
    

    >div{
        display: flex;
        flex-direction: column;
        font-size: 16px;
        width: 100px;
        
        
        
        button{
            align-self: flex-end;
            line-height: 18.5px;
            color: ${({ theme }) => theme.COLORS.PLACEHOLDER_INPUT};
            border: none;
            background-color: transparent;
        }
        
        a{
            display: flex;
            justify-content: flex-end;
            
            strong{
            align-self: flex-end;
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.WHITE};
            }
        }
        

    }
    >img{
        height: 64px;
        width: 64px;
        border-radius: 50%;
        border: 2px solid ;
        border-color: ${({ theme }) => theme.COLORS.PLACEHOLDER_INPUT};
        box-sizing: border-box;
    }

`



