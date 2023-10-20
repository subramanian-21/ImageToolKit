import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  url = window.location.href
  serverUrl:string = ''
  constructor(private http:HttpClient) { }
  uploadImage(image: File,format:string) {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('format',format)
   
    if(this.url === 'http://localhost:4200/converter'){
      this.serverUrl = 'http://localhost:5001/api/converter'
    }else{
      this.serverUrl = 'https://imagetoolkitserver.onrender.com/api/converter'
    }

    return this.http.post(this.serverUrl, formData,{ responseType: 'blob' });
  }
}
