import React, { Component, Fragment, useState, useEffect, cloneElement } from 'react';
import ReactModal from 'react-modal';
import styled from '@emotion/styled';

import dialogService from '@/helpers/dialog';

const DialogText = styled.p`
  margin-bottom: 20px;
  padding: 0 20px;

  &:last-of-type {
    margin-bottom: 40px;
  }
`;

export const getTemplate = (Template, currentTemplate?: any) => {
  if (Template && React.isValidElement(cloneElement(Template))) {
    return Template;
  }
  return currentTemplate;
};

/**
 * showDialog = () => {
 *   const dialogRef = dialogService.open('My Title', MyDialogTemplate, {
 *      customData: '1234'
 *   })
 *   dialogRef
 *    .waitForClose()
 *    .then(result => {
 *      console.log(result)
 *    })
 * }
 * render() {
 *    return (
 *        <button onClick={this.showDialog}> Show Dialog </button>
 *        <DialogContainer />
 *    )
 * }
 */
interface IProps {
  template?: any;
}

const DialogContainer: React.FC<IProps> = ({ template }) => {
  const [dialogRef, setDialogRef] = useState(null);
  const [DialogComponent, setDialogComponent] = useState(null);
  useEffect(() => {
    const unsubscribe = dialogService.listen((cmd, dialogRef) => {
      if (cmd === 'show') {
        addDialog(dialogRef);
      }
      if (cmd === 'hide') {
        removeDialog();
      }
    });

    return () => {
      unsubscribe();
    };
  });

  const addDialog = dialogRef => {
    const newTemplate = dialogRef.templateComponent;
    setDialogRef(dialogRef);
    setDialogComponent(getTemplate(newTemplate, DialogComponent));
  };

  const removeDialog = () => {
    setDialogRef(null);
    setDialogComponent(null);
  };

  const handleSubmitModal = result => {
    dialogRef.setResult(result);
    removeDialog();
  };

  const handleCloseModal = () => {
    dialogRef.reject();
  };

  ReactModal.setAppElement('#app');

  return (
    <>
      {dialogRef && (
        <ReactModal isOpen onRequestClose={handleCloseModal} title={dialogRef.options.title}>
          {cloneElement(DialogComponent, { ...dialogRef.options, onSubmit: result => handleSubmitModal(result) })}
        </ReactModal>
      )}
    </>
  );
};

export default DialogContainer;
