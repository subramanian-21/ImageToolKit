import { Component, ElementRef } from '@angular/core';
import { ImageUploadService } from './services/image-upload.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // constructor(private imageUploadService: ImageUploadService,private sanitizer: DomSanitizer) {}
  // title = 'frontend';
  // outImage:any
  // inpImage:any
  // format:any
  // setFormat(val:any){
  //   this.format = val.target.value
  // }
  // setImage(val:any){
  //   this.inpImage = val.target.files[0]
  // }
  // sendFile(image:any,format:string){
  
  //   this.imageUploadService.uploadImage(image,format).subscribe(res=>{
  //     const imagetoblog = window.URL.createObjectURL(res)
  //     this.outImage = this.sanitizer.bypassSecurityTrustResourceUrl(imagetoblog)
  //   })
  // }
}
