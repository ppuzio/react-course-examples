import styled from 'styled-components';

export const CardWrapper = styled.div`
  margin: 20px 25px;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid black;
  max-width: 400px;
  & a {
    text-decoration: none;
    color: black;
  }
`;

export const Name = styled.p`
  color: ${({ color }) => `rgb(${color})`};
`;

// // styling React.Elements
// import { Link } from 'react-router-dom';

// export const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: black;
// `;
