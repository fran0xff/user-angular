import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private _newUserEventEmitter: EventEmitter<User> = new EventEmitter();
  private _idUserEventEmitter: EventEmitter<number> = new EventEmitter();
  private _findUserByIdEventEmitter = new EventEmitter();
  private _selectUserEventEmitter = new EventEmitter();
  private _errorUserFormEventEmitter = new EventEmitter();
  private _pageUsersEventEmitter = new EventEmitter();
  private _handlerLoginEventEmitter = new EventEmitter();

  constructor() { }

  get selectUserEventEmitter() {
    return this._selectUserEventEmitter;
  }

  get findUserByIdEventEmitter(){
    return this._findUserByIdEventEmitter;
  }

  get newUserEventEmitter(): EventEmitter<User> {
    return this._newUserEventEmitter;
  }
  get idUserEventEmitter(): EventEmitter<number> {
    return this._idUserEventEmitter;
  }

  get errorUserFormEventEmitter(): EventEmitter<any> {
    return this._errorUserFormEventEmitter;
  }

  get pageUsersEventEmitter(): EventEmitter<any> {
    return this._pageUsersEventEmitter;
  }

  get handlerLoginEventEmitter(): EventEmitter<any> {
    return this._handlerLoginEventEmitter;
  }
  
}
