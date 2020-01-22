import styled from 'styled-components';

const typeColor = {
  Grass: '#98FB98',
  Fighting: '#D2B48C',
  Fairy: '#FFC0CB',
  Metal: '#d5d5d7',
  Psychic: '#E6E6FA',
  Lightning: '#FFFACD',
  Water: '#b8ccd1',
  Darkness: '#696969',
  Fire: '#cf6035',
  Colorless: '#d3d3d3',
};

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px 25px;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid black;
  max-width: 400px;
  & a {
    text-decoration: none;
    color: black;
  }
  background-color: ${({ type }) => (type ? `${typeColor[type]}` : '#FFFFFF')};
`;

// // styling React.Elements
// import { Link } from 'react-router-dom';

// export const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: black;
// `;
