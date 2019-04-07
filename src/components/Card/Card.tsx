import React, { ReactElement } from 'react';

interface IProps {
  recruitValue: number;
  fightValue: number;
  name: string;
}

export const Card: React.SFC<IProps> = (props): ReactElement<any> | null => {
  return <p>Hi!</p>;
};

export default Card;
