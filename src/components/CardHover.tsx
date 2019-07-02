import React, { ReactElement, Fragment, useState } from 'react';
import styled from '@emotion/styled';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '@/helpers/constants';

const CardHoverContainer = styled.div`
  position: absolute;
  top: -200px;
  background-image: url(${(props: any) => props.backgroundImage});
  background-size: contain;
  border-radius: 4px;

  width: 210px;
  height: 300px;
  box-shadow: 0px 0px 7px 7px purple;

  pointer-events: none;
  z-index: 999;

  visibility: ${(props: any) => (props.isDragging ? 'hidden' : 'visible')};
`;

interface IProps {
  card: any;
}

export const CardHover: React.SFC<IProps> = ({ card }): ReactElement<any> | null => {
  return (
    <Fragment>
      <CardHoverContainer backgroundImage={card.imageUrl} />
    </Fragment>
  );
};

export default CardHover;
