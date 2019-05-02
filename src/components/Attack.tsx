import React, { ReactElement, Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

interface IProps {
  attack?: any;
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

class Attack extends Component<IProps> {
  componentDidMount() {}

  render() {
    const { attack } = this.props;

    return (
      <DiscardPileContainer>
        <p>Attack</p>
        <DiscardPileIndicator>{attack}</DiscardPileIndicator>
      </DiscardPileContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    attack: state.attack,
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Attack);
