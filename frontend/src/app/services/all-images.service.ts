import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllImagesService {

  constructor() { }
  converts:Array<any> = []

  addConverts(image:File){
    this.converts.push(image)
  }
}
