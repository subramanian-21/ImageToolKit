import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Imgs2pdfService {
  serverUrl: string = 'http://localhost:5001/api/imgs2pdf'; // Backend URL

  constructor(private http: HttpClient) {}

  uploadImage(images: File[]) {
    const formData = new FormData();

    // Append each file to the form data
    images.forEach((file) => {
      formData.append('images', file);  // Key must match what your backend expects ('images')
    });

    // Send FormData to the backend
    return this.http.post(this.serverUrl, formData, {
      responseType: 'blob',  // Expect the response as a binary blob (PDF file)
    });
  }
}
