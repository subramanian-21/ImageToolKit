import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ResizeService {
  url = window.location.href
  serverUrl:string = ''
  constructor(private http:HttpClient) { }
  uploadImage(image: File,width:number,height:number,lock:boolean) {
    const formData:any = new FormData();
    formData.append('image', image);
    formData.append('width',width)
    formData.append('height',height)
    formData.append('lock',lock)

    if(this.url === 'http://localhost:4200/#/resize'){
      this.serverUrl = 'http://localhost:5001/api/resize'
    }else{
      this.serverUrl = 'https://imagetoolkitserver.onrender.com/api/resize'
    }
    return this.http.post(this.serverUrl, formData,{ responseType: 'blob' });
  }
}
