import React, { useState } from 'react';
import ReactModal from 'react-modal';

interface ICostModal {
  totalCost: number;
  totalRecruit: number;
  totalAttack: number;
  show?: boolean;
  onSubmit?: (result) => void;
  onCancel?: () => void;
}

const CostModal: React.SFC<ICostModal> = ({ totalCost, totalRecruit, totalAttack, show, onSubmit, onCancel }) => {
  const [spentRecruit, setSpentRecruit] = useState(0);
  const [spentAttack, setSpentAttack] = useState(0);

  const hasProvidedEnoughToBuy = (): boolean => {
    return spentRecruit + spentAttack === totalCost;
  };

  const handleSubmit = () => {
    return onSubmit({ spentAttack, spentRecruit });
  };
  return (
    <>
      <p>You need: {totalCost}</p>
      <div>
        Recruiting points to spend ({totalRecruit}):{' '}
        <input
          id="spentRecruit"
          value={spentRecruit}
          type="number"
          min="0"
          max={totalRecruit}
          onChange={evt => setSpentRecruit(+evt.target.value)}
        />
      </div>
      <div>
        Attack points to spend ({totalAttack}):{' '}
        <input
          id="spentAttack"
          value={spentAttack}
          type="number"
          min="0"
          max={totalAttack}
          onChange={evt => setSpentAttack(+evt.target.value)}
        />
      </div>
      <button disabled={!hasProvidedEnoughToBuy()} onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default CostModal;
