import React, { ReactElement, Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

interface IProps {
  deckId: string;
  deck?: any;
}

const DeckContainer = styled.div`
  font-size: 10pt;
  text-align: center;
  display: inline-block;
  padding: 5px;

  p {
    font-size: 7pt;
    margin-bottom: 3px;
  }
`;

const DeckIndicator = styled.div`
  background-color: #eee;
  border: 1px solid black;
  border-radius: 5px;
  display: inline-flex;
  width: 30px;
  height: 30px;
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
