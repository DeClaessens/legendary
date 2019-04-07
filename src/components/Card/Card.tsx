import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

interface IProps {
  name: string;
  cost: number;
  recruitValue?: number;
  fightValue?: number;

  onPlay: () => void;
}

const Container = styled.div`
  background-color: #eee;
  border: 1px solid black;
  height: 300px;
  width: 150px;
`;

export const Card: React.SFC<IProps> = (props): ReactElement<any> | null => {
  const { name, onPlay } = props;
  return (
    <Container>
      <p>{name}</p>

      <button type="button" onClick={onPlay}>
        Play
      </button>
    </Container>
  );
};

export default Card;
