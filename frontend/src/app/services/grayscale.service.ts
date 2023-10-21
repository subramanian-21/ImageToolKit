import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrayscaleService {
  url = window.location.href
  serverUrl:string = ''
  constructor(private http:HttpClient) { }
  uploadImage(image: File) {
    const formData = new FormData();
    formData.append('image', image);
    if(this.url === 'http://localhost:4200/#/grayscale'){
      this.serverUrl = 'http://localhost:5001/api/grayscale'
    }else{
      this.serverUrl = 'https://imagetoolkitserver.onrender.com/api/grayscale'
    }
    return this.http.post(this.serverUrl, formData,{ responseType: 'blob' });
  }
}
