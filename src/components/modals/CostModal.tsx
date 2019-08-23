import React, { useState } from 'react';
import ReactModal from 'react-modal';

interface ICostModal {
  totalCost: number;
  totalRecruit: number;
  totalAttack: number;
  show: boolean;
  onSubmit: (spentRecruit, spentAttack) => void;
  onCancel: () => void;
}

const CostModal: React.SFC<ICostModal> = ({ totalCost, totalRecruit, totalAttack, show, onSubmit, onCancel }) => {
  const [spentRecruit, setSpentRecruit] = useState(0);
  const [spentAttack, setSpentAttack] = useState(0);

  const hasProvidedEnoughToBuy = (): boolean => {
    console.log({ spentRecruit, spentAttack, totalCost });
    return spentRecruit + spentAttack === totalCost;
  };

  return (
    <ReactModal isOpen={show} contentLabel="Minimal Modal Example">
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
      <button disabled={!hasProvidedEnoughToBuy()} onClick={() => onSubmit(spentRecruit, spentAttack)}>
        Close Modal
      </button>
    </ReactModal>
  );
};

export default CostModal;
