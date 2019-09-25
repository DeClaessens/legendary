import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import playingArea from '@/reducers/playingArea';
import { ItemTypes } from '@/helpers/constants';

interface IKOFromDiscardPileOrHandModal {
  discardPile: any[];
  hand: any[];
  amount: number;
  cardType: string;
  isMandatory: string;
  onSubmit?: (result) => void;
}

const StyledDiscardPileDiv = styled.div``;
const StyledHandDiv = styled.div``;
const StyledListItem = styled.li`
  ${(props: any) => (props.selected ? `background-color: green` : ``)};
`;

const KOFromDiscardPileOrHandModal: React.SFC<IKOFromDiscardPileOrHandModal> = ({
  discardPile,
  hand,
  amount,
  cardType,
  isMandatory,
  onSubmit,
}) => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [discardPileCards, setDiscardPileCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [handCards, setHandCards] = useState([]);

  useEffect(() => {
    let discardPileCards = discardPile;
    let handCards = hand;
    if (cardType) {
      discardPileCards = discardPileCards.filter(card => card.type === cardType);
      handCards = handCards.filter(card => card.type === cardType);
    }

    setDiscardPileCards(discardPileCards);
    setHandCards(handCards);
    setCards([...discardPileCards, ...handCards]);
  }, []);

  const handleSelectCard = (card, from) => {
    if (selectedCards.find(c => c.id === card.id)) return setSelectedCards(selectedCards.filter(c => c.id !== card.id));
    if (selectedCards.length === amount) return;
    return setSelectedCards([...selectedCards, { ...card, from }]);
  };

  const isCardSelected = card => {
    return selectedCards.find(c => c.id === card.id);
  };

  const isButtonDisabled = () => {
    //if not mandatory, never disable
    if (!isMandatory) return false;
    // if mandatory, but no cards, never deisable
    if (cards.length === 0) return false;
    // if not cards.length is smaller than amount, but all cards are selected, do not disable
    if (cards.length < amount && selectedCards.length === cards.length) return false;
    //if mandatory, cards, and equal amount of cards selected as amount value, never disable
    if (selectedCards.length === amount) return false;

    return true;
  };

  const renderHeader = () => {
    if (isMandatory) return <p>YOU MUST KO {amount} CARDS</p>;

    return <p>KO UP TO {amount} CARDS</p>;
  };

  return (
    <>
      {renderHeader()}
      <StyledDiscardPileDiv>
        <h2>DiscardPile</h2>
        <ul>
          {discardPileCards.map(card => (
            <StyledListItem
              key={card.id}
              selected={isCardSelected(card)}
              onClick={() => handleSelectCard(card, ItemTypes.CARDS.FROM_DISCARD_PILE)}
            >
              {card.name}
            </StyledListItem>
          ))}
        </ul>
      </StyledDiscardPileDiv>
      <StyledHandDiv>
        <h2>Hand</h2>
        <ul>
          {handCards.map(card => (
            <StyledListItem
              key={card.id}
              selected={isCardSelected(card)}
              onClick={() => handleSelectCard(card, ItemTypes.CARDS.FROM_HAND)}
            >
              {card.name}
            </StyledListItem>
          ))}
        </ul>
      </StyledHandDiv>
      <button type="button" disabled={isButtonDisabled()} onClick={() => onSubmit({ cards: selectedCards })}>
        SUBMIT
      </button>
    </>
  );
};

const mapStateToProps = state => ({
  discardPile: state.discardPile,
  hand: state.hand,
});

export default connect(mapStateToProps)(KOFromDiscardPileOrHandModal);
