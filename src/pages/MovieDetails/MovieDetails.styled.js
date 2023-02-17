import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  margin: 20px 40px;
  color: #2f3542;
`;

export const BtnGoBack = styled(Link)`
  margin: 12px auto;
  padding: 8px 16px;
  border-radius: 6px;
  background-color: #dfe6e9;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  border: 0;
  color: #000;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  min-width: 80px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: #7ed6df;
  }
`;

export const ArticleStyled = styled.article`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  justify-content: center;
`;
 
export const TitleInfo = styled.p`
display: flex;
gap: 12px;
font-size: 20px;
 font-weight: 700;
`;
export const Info = styled.span`
 font-weight: 400;
 font-size: 20px;
`;
export const MoreInfoList = styled.ul`
display: flex;
    gap: 40px;
    font-size: 24px;
`;
export const MoreInfoLink = styled(Link)`
font-size: 24px;
color:#000;
text-decoration: none;
&:hover {
  color: #6c5ce7;
  text-decoration: underline;
}
`;