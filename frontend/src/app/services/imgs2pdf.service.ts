import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Imgs2pdfService {
  url = window.location.href
  serverUrl:string = ''
  constructor(private http:HttpClient) { }
  uploadImage(image: File[]) {
    if(this.url === 'http://localhost:4200/#/imgs2pdf'){
      this.serverUrl = 'http://localhost:5001/api/imgs2pdf'
    }else{
      this.serverUrl = 'https://imagetoolkitserver.onrender.com/api/imgs2pdf'
    }
    return this.http.post(this.serverUrl, {image:image} ,{ responseType: 'blob' });
  }
}