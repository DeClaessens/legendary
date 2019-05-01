import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import Card from './Card';

interface Hand {
  hand: any[];
}

const HandContainer = styled.div`
  border-top: 1px solid black;
  position: absolute;
  bottom: 0;
  height: 400px;
  width: 100%;
`;

const Hand = ({ hand }) => {
  return (
    <HandContainer>
      <h1>Hand</h1>
      {hand.map(card => (
        <Card name={card.name} />
      ))}
    </HandContainer>
  );
};

const mapStateToProps = state => ({
  hand: state.hand,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hand);
