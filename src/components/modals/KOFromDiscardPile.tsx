import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import playingArea from '@/reducers/playingArea';
import { ItemTypes } from '@/helpers/constants';

interface IKOFromDiscardPileModal {
  discardPile: any[];
  amount: number;
  cardType: string;
  isMandatory: string;
  onSubmit?: (result) => void;
}

const StyledDiscardPileDiv = styled.div``;
const StyledListItem = styled.li`
  ${(props: any) => (props.selected ? `background-color: green` : ``)};
`;

const KOFromDiscardPileModal: React.SFC<IKOFromDiscardPileModal> = ({
  discardPile,
  amount,
  cardType,
  isMandatory,
  onSubmit,
}) => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let cards = discardPile;

    if (cardType) {
      cards = cards.filter(card => card.type === cardType);
    }

    setCards(cards);
  }, [discardPile]);

  const handleSelectCard = card => {
    if (selectedCards.find(c => c.id === card.id)) return setSelectedCards(selectedCards.filter(c => c.id !== card.id));
    if (selectedCards.length === amount) return;
    return setSelectedCards([...selectedCards, card]);
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
          {cards.map(card => (
            <StyledListItem key={card.id} selected={isCardSelected(card)} onClick={() => handleSelectCard(card)}>
              {card.name}
            </StyledListItem>
          ))}
        </ul>
        <button
          type="button"
          disabled={isButtonDisabled()}
          onClick={() => onSubmit({ cards: selectedCards, from: ItemTypes.CARDS.FROM_DISCARD_PILE })}
        >
          SUBMIT
        </button>
      </StyledDiscardPileDiv>
    </>
  );
};

const mapStateToProps = state => ({
  discardPile: state.discardPile,
});

export default connect(mapStateToProps)(KOFromDiscardPileModal);
