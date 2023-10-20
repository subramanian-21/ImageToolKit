import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ImageCompresserService {
  url = window.location.href
  serverUrl:string = ''
  constructor(private http:HttpClient) { }
  uploadImage(image: File,quality:string) {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('quality',quality)
    if(this.url === 'http://localhost:4200/compresser'){
      this.serverUrl = 'http://localhost:5001/api/compresser'
    }else{
      this.serverUrl = 'https://imagetoolkitserver.onrender.com/api/compresser'
    }
    return this.http.post(this.serverUrl, formData,{ responseType: 'blob' });
  }
}
