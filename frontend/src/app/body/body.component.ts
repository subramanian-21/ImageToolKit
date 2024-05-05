import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  allConverters:Array<object> = [
    {
      name : 'Format Converter',
      link : '/converter',
      desc : 'Convert your Image from JPG, JPEG, PNG to JPG, JPEG, PNG'
    },
    {
      name : 'Image Compresser',
      link : '/compresser',
      desc : 'Compress your Images with High Quality'
    },
    {
      name : 'Color to Black & White',
      link : '/grayscale',
      desc : 'Transform Your Color Images to GrayScale'
    },
    {
      name : 'Resize your Image',
      link : '/resize',
      desc : 'Resize your image based on your preference'
    },
    {
      name : 'Images to PDF',
      link : '/imgs2pdf',
      desc : 'Convert array of images to PDF'
    },
    {
      name : 'PDF to Images',
      link : '/pdf2imgs',
      desc : 'Convert PDF to array of images'
    },
  ]    
}
