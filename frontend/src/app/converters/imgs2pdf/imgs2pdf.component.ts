import { Component, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AllImagesService } from 'src/app/services/all-images.service';
import { Imgs2pdfService } from 'src/app/services/imgs2pdf.service';

@Component({
  selector: 'app-imgs2pdf',
  templateUrl: './imgs2pdf.component.html',
  styleUrls: ['./imgs2pdf.component.css']
})
export class Imgs2pdfComponent {
  constructor(
    private imgs2pdfService:Imgs2pdfService,
    private sanitizer: DomSanitizer,
    private allImagesService: AllImagesService
  ) {}
  savedImage: any[] = [];
  outImage: any;
  inpImage: any[] = [];
  loading: boolean = false;
  close() {
    this.savedImage = [];
  }
  format: string = 'pdf';
  name: string = `${"download"}.${this.format}`;
  
  loadImage(img: any) {
    const file = img.target.files[0];
    this.inpImage = [...this.inpImage,file];
    const reader = new FileReader();
    reader.onload = () => {
      this.savedImage = [...this.savedImage,reader.result];
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  sendToServer() {
    this.loading = true;
    this.imgs2pdfService
   
      .uploadImage(this.inpImage)
      .subscribe((res:any) => {
        console.log(res);
        const imagetoblog = window.URL.createObjectURL(res);
        this.outImage =
          this.sanitizer.bypassSecurityTrustResourceUrl(imagetoblog);

        this.allImagesService.addConverts(this.outImage);
        this.loading = false;
      });
  }
  convertNext() {
    this.savedImage = [];
    this.outImage = [];
    this.inpImage = [];
    this.format = '';
  }
}



