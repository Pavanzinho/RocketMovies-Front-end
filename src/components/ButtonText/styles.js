import styled from "styled-components";
import { Link} from "react-router-dom";

export const Container=styled(Link)`
    border: none;
    background: transparent;

    color: ${({theme})=>theme.COLORS.PINK};
    
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;

`