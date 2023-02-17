import styled from 'styled-components';

export const Title = styled.h1`
letter-spacing: 13px;
    font-family: auto;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: #40407a;
`;
export const ListMovie = styled.ul`
display: flex;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;
`;
export const SectionStyled = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin-left: auto;
margin-right: auto;
max-width: 1280px;
padding-left: 32px;
padding-right: 32px;

@media screen and (min-width: 320px) and (max-width: 767.98px) {
& {
    max-width: 320px;
    padding-left: 20px;
    padding-right: 20px;
}
}

@media screen and (min-width: 768px) and (max-width: 1279.98px) {
& {
    width: 768px;
}
}
`;
export const Button = styled.button`
margin: 12px auto;
padding: 8px 16px;
border-radius: 6px;
background-color: #dfe6e9;
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
text-align: center;
display: inline-block;
border: 0;
text-decoration: none;
cursor: pointer;
font-family: inherit;
font-size: 18px;
line-height: 24px;
font-style: normal;
font-weight: 500;
min-width: 180px;
box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
  0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

&:hover {
  background-color: #7ed6df;
}

`;
