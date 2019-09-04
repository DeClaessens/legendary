import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

interface IRevealModal {
  hand: any[];
  onSubmit?: (result) => void;
}

const StyledHandDiv = styled.div``;

const RevealModal: React.SFC<IRevealModal> = ({ hand, onSubmit }) => {
  return (
    <>
      <p>REVEAL A CARD</p>
      <StyledHandDiv>
        <h2>Hand</h2>
        <ul>
          {hand.map(card => (
            <li key={card.id} onClick={() => onSubmit({ card })}>
              {card.name}
            </li>
          ))}
        </ul>
      </StyledHandDiv>
    </>
  );
};

const mapStateToProps = state => ({
  hand: state.hand,
});

export default connect(mapStateToProps)(RevealModal);
