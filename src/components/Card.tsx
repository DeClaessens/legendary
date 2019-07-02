import React, { ReactElement, Fragment, useState } from 'react';
import { Manager, Reference, Popper } from 'react-popper';
import styled from '@emotion/styled';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '@/helpers/constants';
import CardHover from './CardHover';

const CardWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const CardContainer = styled.div`
  background-image: url(${(props: any) => props.backgroundImage});
  background-size: contain;
  border-radius: 4px;
  margin: 5px;
  width: 105.495px;
  height: 150px;

  transition: 0.2s all ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  visibility: ${(props: any) => (props.isDragging ? 'hidden' : 'visible')};

  &.isDragging {
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
  const [hovering, setHovering] = useState(false);
  const [{ isDragging }, drag] = useDrag({
    item: { card, type: defineCardType() },
    begin: () => handleMouseOut(),
    end: () => handleMouseOut(),
    canDrag: () => location === ItemTypes.LOCATIONS.HAND,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  let hoverTimout;
  const handleMouseOver = () => {
    hoverTimout = setTimeout(() => {
      setHovering(true);
    }, 400);
  };
  const handleMouseOut = () => {
    clearTimeout(hoverTimout);
    setHovering(false);
  };

  return (
    <CardWrapper onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <CardContainer
        ref={drag}
        className={isDragging && 'isDragging'}
        IsDragging={isDragging}
        backgroundImage={card.imageUrl}
        onClick={onInteract}
      />
      {hovering && !isDragging && <CardHover card={card} />}
    </CardWrapper>
  );
};

export default Card;
