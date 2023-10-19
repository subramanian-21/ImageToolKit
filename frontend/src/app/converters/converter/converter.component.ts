import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {
  savedImage:any
  close(){
    this.savedImage=null
  }
  selectOptions:Array<any> = [
    {value:null,name:'--'},
    {value:'jpeg',name:'JPEG or JPG'},
    {value:'png',name:'PNG'},
    {value:'bmp',name:'BMP'},
    {value:'gif',name:'GIF'},
    {value:'tiff',name:'TIFF or TIF'}
  ]
loadImage(img:any){
  const file = img.target.files[0]
  const reader = new FileReader()
  reader.onload=()=>{
    this.savedImage = reader.result
  }
  if(file){
    reader.readAsDataURL(file)
  }

}
}
