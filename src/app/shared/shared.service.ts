import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private sidebarState = new BehaviorSubject(true);
  sidebarState$ = this.sidebarState.asObservable();

  checkSidebarState(data:boolean) {
    this.sidebarState.next(data)
  }
}
