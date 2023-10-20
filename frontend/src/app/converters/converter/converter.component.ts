import { Component, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageUploadService } from 'src/app/services/image-upload.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {
  constructor(private imageUploadservice:ImageUploadService,private sanitizer:DomSanitizer) { }
  savedImage:any
  outImage:any
  inpImage:any
  imageName:string = ''
  close(){
    this.savedImage=null
  }
  format:string=""
  name:string = `${this.imageName}.${this.format}`
  setFormat(e:any){
    this.format = e.target.value
  }
  selectOptions:Array<any> = [
    {value:'jpeg',name:'JPEG or JPG'},
    {value:'png',name:'PNG'},
    {value:'bmp',name:'BMP'},
    {value:'gif',name:'GIF'},
    {value:'tiff',name:'TIFF or TIF'}
  ]
loadImage(img:any){
  const file = img.target.files[0]
  this.inpImage = file
  this.imageName = file.name.split('.')[0]
  const reader = new FileReader()
  reader.onload=()=>{
    this.savedImage = reader.result
  }
  if(file){
    reader.readAsDataURL(file)
  }
  }
sendToServer(){
  this.imageUploadservice.uploadImage(this.inpImage,this.format).subscribe(res=>{
       const imagetoblog = window.URL.createObjectURL(res)
       this.outImage = this.sanitizer.bypassSecurityTrustResourceUrl(imagetoblog)
       })
}
convertNext(){
  this.savedImage = null
  this.outImage = null
  this.inpImage = null
  this.format = ''
}
}
