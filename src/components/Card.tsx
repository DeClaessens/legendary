import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

const CardContainer = styled.div`
  background-image: url(${(props: any) => props.backgroundImage});
  background-size: contain;
  border: 1px solid black;
  border-radius: 4px;
  margin: 5px;

  width: 70.333px;
  height: 100px;
  display: inline-block;
`;

interface IProps {
  card: any;
  onPlay: () => void;
}

export const Card: React.SFC<IProps> = ({ card, onPlay }): ReactElement<any> | null => {
  return <CardContainer onClick={onPlay} backgroundImage={card.imageUrl} />;
};

export default Card;
