import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Imgs2pdfService } from 'src/app/services/imgs2pdf.service';

@Component({
  selector: 'app-imgs2pdf',
  templateUrl: './imgs2pdf.component.html',
  styleUrls: ['./imgs2pdf.component.css']
})
export class Imgs2pdfComponent {
  savedImage: any[] = [];
  outImage: any;
  inpImage: any[] = [];
  loading: boolean = false;
  format: string = 'pdf';
  name: string = `${"download"}.${this.format}`;

  constructor(
    private imgs2pdfService: Imgs2pdfService,
    private sanitizer: DomSanitizer
  ) {}

  loadImage(event: any) {
    const files = event.target.files;  // Ensure you're getting all files

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      this.inpImage = [...this.inpImage, file];

      const reader = new FileReader();
      reader.onload = () => {
        this.savedImage = [...this.savedImage, reader.result];
      };
      reader.readAsDataURL(file);
    }
  }

  sendToServer() {
    this.loading = true;
    this.imgs2pdfService.uploadImage(this.inpImage).subscribe(
      (res: any) => {
        const imagetoblog = window.URL.createObjectURL(res);
        this.outImage = this.sanitizer.bypassSecurityTrustResourceUrl(imagetoblog);
        this.loading = false;
      },
      (error) => {
        console.error('Error uploading images:', error);
        this.loading = false;
      }
    );
  }

  convertNext() {
    this.savedImage = [];
    this.outImage = null;
    this.inpImage = [];
    this.format = 'pdf';
  }

  close() {
    this.savedImage = [];
  }
}
