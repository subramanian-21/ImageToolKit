import { Component, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AllImagesService } from 'src/app/services/all-images.service';
import { ImageUploadService } from 'src/app/services/image-upload.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {
  constructor(private imageUploadservice:ImageUploadService,private sanitizer:DomSanitizer,private allImagesService: AllImagesService) { }
  savedImage:any
  outImage:any
  inpImage:any
  imageName:string = ''
  loading:boolean = false
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
  this.loading = true
  this.imageUploadservice.uploadImage(this.inpImage,this.format).subscribe(res=>{
       const imagetoblog = window.URL.createObjectURL(res)
       this.outImage = this.sanitizer.bypassSecurityTrustResourceUrl(imagetoblog)
       
       this.allImagesService.addConverts(this.outImage)
       this.loading = false
    })
      

}
convertNext(){
  this.savedImage = null
  this.outImage = null
  this.inpImage = null
  this.format = ''
}
}
