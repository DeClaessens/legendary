/* eslint-disable no-underscore-dangle */
import React from 'react';
import { createChangeEmitter } from 'change-emitter';
import KOModal from '@/components/modals/KOModal';
import RevealModal from '@/components/modals/RevealModal';
import ConfirmModal from '@/components/modals/ConfirmModal';
import KOFromDiscardPile from '@/components/modals/KOFromDiscardPile';
import DefeatCityVillainModal from '@/components/modals/DefeatCityVillainModal';

class Deferred {
  promise: Promise<any>;
  reject: (err: any) => void;
  resolve: (arg: any) => void;

  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.reject = reject;
      this.resolve = resolve;
    });
  }
}

export class DialogRef<T> {
  options: any;
  templateComponent: any;
  _deferred: Deferred;
  _closeCallback: () => void;

  constructor(options: any, templateComponent: any, closeCallback) {
    this.options = options;
    this.templateComponent = templateComponent;
    this._deferred = new Deferred();
    this._closeCallback = closeCallback;
  }

  setResult(result) {
    this._deferred.resolve(result);
  }

  reject() {
    this.close();
    return this._deferred.reject('rejected');
  }

  waitForClose() {
    return this._deferred.promise;
  }

  close() {
    if (this._closeCallback) {
      this._closeCallback();
    }
  }
}

class DialogService {
  eventEmitter: any;

  constructor() {
    this.eventEmitter = createChangeEmitter();
  }

  listen(...args) {
    return this.eventEmitter.listen(...args);
  }

  open(renderTemplateComponent: any, options?: any) {
    const dialogRef = new DialogRef({ ...options }, renderTemplateComponent, () => {
      this.eventEmitter.emit('hide');
    });
    this.eventEmitter.emit('show', dialogRef);
    return dialogRef;
  }

  // Presets

  openKO() {
    return this.open(<KOModal />);
  }

  openKOFromDiscardPile(amount, cardType = undefined, isMandatory = false) {
    return this.open(<KOFromDiscardPile amount={amount} cardType={cardType} isMandatory={isMandatory} />);
  }

  openReveal() {
    return this.open(<RevealModal />);
  }

  openConfirm(message) {
    return this.open(<ConfirmModal message={message} />);
  }

  openDefeatCityVillain() {
    return this.open(<DefeatCityVillainModal />);
  }
}

export const dialogService = new DialogService();
