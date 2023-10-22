import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AllImagesService } from 'src/app/services/all-images.service';
import { GrayscaleService } from 'src/app/services/grayscale.service';
import { ImageUploadService } from 'src/app/services/image-upload.service';

@Component({
  selector: 'app-grayscale',
  templateUrl: './grayscale.component.html',
  styleUrls: ['./grayscale.component.css']
})
export class GrayscaleComponent {
  constructor(private imageUploadservice:GrayscaleService,private sanitizer:DomSanitizer,private allImagesService: AllImagesService) { }
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
 

loadImage(img:any){
  const file = img.target.files[0]
  this.inpImage = file
  this.imageName = file.name.split('.')[0]
  this.format = file.name.split('.')[1]

  const reader = new FileReader()
  reader.onload=()=>{
    this.savedImage = reader.result
  }
  if(file){
    reader.readAsDataURL(file)
  }
  }
sendToServer(){
  this.loading =true
  if(this.format === 'jpg'){
    this.format = 'jpeg'
  }
  
  this.imageUploadservice.uploadImage(this.inpImage).subscribe(res=>{
       const imagetoblog = window.URL.createObjectURL(res)
       this.outImage = this.sanitizer.bypassSecurityTrustResourceUrl(imagetoblog)
       this.allImagesService.addConverts(this.outImage)
       this.loading =false
       })
   
}
convertNext(){
  this.savedImage = null
  this.outImage = null
  this.inpImage = null

}
}
