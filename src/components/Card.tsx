import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '@/helpers/constants';

const CardContainer = styled.div`
  background-image: url(${(props: any) => props.backgroundImage});
  background-size: contain;
  border: 1px solid black;
  border-radius: 4px;
  margin: 5px;

  width: 105.495px;
  height: 150px;

  display: inline-block;

  visibility: ${(props: any) => (props.isDragging ? 'hidden' : 'visible')};

  &.isDragging {
    display: none;
    background-color: red !important;
    background-image: unset !important;
  }
`;

interface IProps {
  card: any;
  location: string;
  onInteract?: any;
}

export const Card: React.SFC<IProps> = ({ card, onInteract, location }): ReactElement<any> | null => {
  const defineCardType = () => {
    switch (location) {
      case ItemTypes.LOCATIONS.HAND:
        return ItemTypes.CARDS.FROM_HAND;
      case ItemTypes.LOCATIONS.HEADQUARTERS:
        return ItemTypes.CARDS.FROM_HEADQUARTERS;
      default:
        return ItemTypes.CARDS.FROM_HAND;
    }
  };
  const [{ isDragging }, drag] = useDrag({
    item: { card, type: defineCardType() },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  console.log(isDragging);

  return (
    <CardContainer
      className={isDragging && 'isDragging'}
      ref={drag}
      IsDragging={isDragging}
      backgroundImage={card.imageUrl}
      onClick={onInteract}
    />
  );
};

export default Card;
