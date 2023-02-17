import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: center;
`;
export const Form = styled.form`
padding: 20px;
`;
export const Input = styled.input`
border: none;
width: 320px;
    border-bottom: 1px solid;
    font-size: 20px;
    color: #57606f;

`;
export const ListSearchMovie = styled.ul`
display: flex;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;
`;
export const Section = styled.section`
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