import React, { useState } from 'react';

interface ICostModal {
  onSubmit?: (result) => void;
}

const KOModal: React.SFC<ICostModal> = ({ onSubmit }) => {
  const handleSubmit = () => {
    return onSubmit([1, 2, 3, 4]);
  };

  return (
    <>
      <p>KO SOME CARDS</p>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default KOModal;
