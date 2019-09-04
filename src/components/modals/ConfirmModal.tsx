import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import playingArea from '@/reducers/playingArea';
import { ItemTypes } from '@/helpers/constants';

interface IConfirmModal {
  message: string;
  onSubmit?: (result) => void;
}

const ConfirmModal: React.SFC<IConfirmModal> = ({ message, onSubmit }) => {
  return (
    <>
      <p>{message}</p>
      <button onClick={() => onSubmit(true)}>Yes</button>
      <button onClick={() => onSubmit(false)}>No</button>
    </>
  );
};

export default ConfirmModal;
