import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllImagesService {

  constructor() { }
  converts:Array<File> = []

  addConverts(image:File){
    this.converts.push(image)
  }
}
