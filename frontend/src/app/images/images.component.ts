import { Component } from '@angular/core';
import { AllImagesService } from '../services/all-images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {
  constructor(private ImageService:AllImagesService){}
  allImages:Array<File> = []
  ngOninit(){
    this.loadImage()
  }
  loadImage(){
    this.allImages = this.ImageService.converts
  }
}
