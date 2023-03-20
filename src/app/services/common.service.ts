import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    constructor() { }

    get getUserDetails():void {
      return localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails') || '') : {}
    }
}
