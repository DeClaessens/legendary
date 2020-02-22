import React, { ReactElement, Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

interface IProps {
  deckId: string;
  deck?: any;
}

const DeckContainer = styled.div`
  font-size: 15pt;
  text-align: center;
  display: inline-block;
  padding: 10px;

  p {
    font-size: 13pt;
    margin-bottom: 6px;
  }
`;

const DeckIndicator = styled.div`
  background-color: #eee;
  border: 1px solid black;
  border-radius: 5px;
  display: inline-flex;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

class Deck extends Component<IProps> {
  componentDidMount() {}

  render() {
    const { deck, deckId } = this.props;
    if (!deck) return null;

    return (
      <DeckContainer>
        <p>{deckId}</p>
        <DeckIndicator>{deck.cards.length}</DeckIndicator>
      </DeckContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    deck: state.decks.find(d => d.id === ownProps.deckId),
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Deck);
