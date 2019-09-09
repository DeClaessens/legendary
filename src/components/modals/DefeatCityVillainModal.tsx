import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

interface IDefeatCityVillainModal {
  city: any[];
  onSubmit?: (result) => void;
}

const StyledDiscardPileDiv = styled.div``;
const StyledListItem = styled.li`
  ${(props: any) => (props.selected ? `background-color: green` : ``)};
`;

const DefeatCityVillainModal: React.SFC<IDefeatCityVillainModal> = ({ city, onSubmit }) => {
  return (
    <>
      <p>DEFEAT A VILLAIN IN THE CITY FOR FREE</p>
      <StyledDiscardPileDiv>
        <h2>City</h2>
        <ul>
          {city.map(card => (
            <StyledListItem key={card.id} onClick={() => onSubmit({ card })}>
              {card.name}
            </StyledListItem>
          ))}
        </ul>
      </StyledDiscardPileDiv>
    </>
  );
};

const mapStateToProps = state => ({
  city: state.city,
});

export default connect(mapStateToProps)(DefeatCityVillainModal);
