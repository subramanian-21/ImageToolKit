import { Component } from '@angular/core';
import { ImageUploadService } from './services/image-upload.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private imageUploadService: ImageUploadService,private sanitizer: DomSanitizer) {}
  title = 'frontend';
  images:any
  sendFile(event:any){
    
    const image = event.target.files[0]
       
    this.imageUploadService.uploadImage(image).subscribe(res=>{
      const imagetoblog = window.URL.createObjectURL(res)
      this.images = this.sanitizer.bypassSecurityTrustResourceUrl(imagetoblog)
      console.log("res"+res)
    })
  }
}
