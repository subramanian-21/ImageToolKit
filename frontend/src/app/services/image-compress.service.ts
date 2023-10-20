import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ImageCompresserService {

  constructor(private http:HttpClient) { }
  uploadImage(image: File,quality:string) {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('quality',quality)

    return this.http.post('http://localhost:5001/api/compresser', formData,{ responseType: 'blob' });
  }
}
