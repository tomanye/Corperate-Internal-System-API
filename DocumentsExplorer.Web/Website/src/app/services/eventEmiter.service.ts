import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class EventEmiterService {

  constructor() { }

  private emitChangeSource = new Subject<any>();

  changeEmitted$ = this.emitChangeSource.asObservable();

  emitChange(change: any) {
    this.emitChangeSource.next();
  }
}
