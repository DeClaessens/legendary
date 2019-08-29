/* eslint-disable no-underscore-dangle */
import { createChangeEmitter } from 'change-emitter';

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

/**
 * showDialog = () => {
 *   const dialogRef = dialogService.open('Dialog Title', MyDialogComponent);
 *   dialogRef.then((result) => {
 *       // called when the dialog is closed
 *       console.log(result)
 *   })
 *
 *   // you can also close the dialog here (when not already closed)
 *   dialogRef.close();
 * }
 */
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

  info(title: string, text: any, options) {
    return this.open(title, { text, ...options });
  }
}

export const dialogService = new DialogService();
