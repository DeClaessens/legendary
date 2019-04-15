import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

const CardContainer = styled.div`
  background-color: #eee;
  border: 1px solid black;
  border-radius: 4px;
  margin: 5px;
`;

interface IProps {
  name: string;
  onPlay: () => void;
}

export const Card: React.SFC<IProps> = ({ name, onPlay }): ReactElement<any> | null => {
  return (
    <CardContainer>
      {name}
      <button onClick={onPlay}>play</button>
    </CardContainer>
  );
};

export default Card;
