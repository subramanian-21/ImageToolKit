import { Component, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AllImagesService } from 'src/app/services/all-images.service';
import { ResizeService } from 'src/app/services/resize.service';
@Component({
  selector: 'app-resize',
  templateUrl: './resize.component.html',
  styleUrls: ['./resize.component.css']
})




export class ResizeComponent {

  constructor(
    private resizeService: ResizeService,
    private sanitizer: DomSanitizer,
    private allImagesService: AllImagesService
  ) {}
  savedImage: any;
  outImage: any;
  inpImage: any;
  imageName: string = '';
  loading: boolean = false;
  width:number = 0
  height:number = 0
  lock:boolean = false
  close() {
    this.savedImage = null;
  }
  format: string = '';
  name: string = `${this.imageName}.${this.format}`;
  setFormat(e: any) {
    this.format = e.target.value;
    this.width = 0;
    this.height = 0;
    if(this.format !=='custom'){
      this.width = Number(this.format.split('x')[0])
      this.height = Number(this.format.split('x')[1])
    }
  }
  setWidth(e:any){
    this.width  = Number(e.target.value)
  }
  setHeight(e:any){
    this.height  = Number(e.target.value)
  }
  setLock(){
    this.lock = !this.lock
    console.log(this.lock)
  }
  selectOptions: Array<any> = [
    { value: '2048x1080', name: '2048 x 1080(2K)' },
    { value: '1024x768', name: '1024 x 768' },
    { value: '800x800', name: '800 x 800' },
    { value: '400x400', name: '400 x 400' },
    { value: 'custom', name: 'Custom' },
  ];
  loadImage(img: any) {
    const file = img.target.files[0];
    this.inpImage = file;
    this.imageName = file.name.split('.')[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.savedImage = reader.result;
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  sendToServer() {
    this.loading = true;
    console.log(this.inpImage, this.width,this.height,this.lock)
    this.resizeService
   
      .uploadImage(this.inpImage, this.width,this.height,this.lock)
      .subscribe((res) => {
        console.log(res);
        const imagetoblog = window.URL.createObjectURL(res);
        this.outImage =
          this.sanitizer.bypassSecurityTrustResourceUrl(imagetoblog);

        this.allImagesService.addConverts(this.outImage);
        this.loading = false;
      });
  }
  convertNext() {
    this.savedImage = null;
    this.outImage = null;
    this.inpImage = null;
    this.format = '';
    this.lock = false;
    this.width = 0;
    this.height = 0;
  }
}
