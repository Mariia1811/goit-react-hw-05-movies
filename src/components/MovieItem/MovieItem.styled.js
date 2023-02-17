import styled from "styled-components";
import { Link} from 'react-router-dom';

export const LinkSstyled = styled(Link)`
text-decoration: none;
text-align: center;
overflow: hidden;
`;

export const TextWrap = styled.div`
max-width: 320px;
padding: 4px;
color: #1B1464;
`;
export const Title = styled.p`
font-weight: 700;
text-transform: uppercase;
`;
export const Data = styled.p`
display: inline;
margin-right: 8px;
font-weight: 700;
color: #000;

`;
export const Vote = styled.span`
font-weight: 500;
    padding: 2px 12px;
    margin: 2px;
    border-radius: 5px;
    background: #dfe6e9;
`;
export const ImgStyled = styled.img`
border-radius: 2%;
`;

