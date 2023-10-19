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
