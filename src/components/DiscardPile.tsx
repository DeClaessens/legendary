import React, { ReactElement, Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

interface IProps {
  discardPile?: any;
}

const DiscardPileContainer = styled.div`
  font-size: 10pt;
  text-align: center;
  display: inline-block;
  padding: 5px;

  p {
    font-size: 7pt;
    margin-bottom: 3px;
  }
`;

const DiscardPileIndicator = styled.div`
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
    const { discardPile } = this.props;
    if (!discardPile) return null;

    return (
      <DiscardPileContainer>
        <p>Discard</p>
        <DiscardPileIndicator>{discardPile.length}</DiscardPileIndicator>
      </DiscardPileContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    discardPile: state.discardPile,
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Deck);
