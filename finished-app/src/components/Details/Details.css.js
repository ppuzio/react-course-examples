import styled from 'styled-components';

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const BackArrow = styled.div`
  border-radius: 5rem;
  width: 1.4rem;
  height: 1.4rem;
  border: 1px solid black;
`;

export const AttackWrapper = styled(CardHeader)`
  align-items: end;
  height: 22px;
  font-weight: bold;
`;

export const ArtistParagraph = styled.p`
  background-color: #eeeeee;
  transform: skew(-7deg);
  margin-left: 40%;
  padding: 0 10px;
  text-align: end;
`;
