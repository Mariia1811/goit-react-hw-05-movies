import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: #40407a;
`;
export const ListMovie = styled.ul`
display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 30px;
    justify-items: center;
    max-width: 1024px;
}
`;
export const SectionStyled = styled.section`
display: flex;
flex-direction: column;
align-items: center;
}
`;
