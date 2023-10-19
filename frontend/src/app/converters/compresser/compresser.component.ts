import { Component } from '@angular/core';

@Component({
  selector: 'app-compresser',
  templateUrl: './compresser.component.html',
  styleUrls: ['./compresser.component.css']
})
export class CompresserComponent {
  savedImage:any
  close(){
    this.savedImage=null
  }
  quality:number = 0
  inputVal(val:any){
    this.quality = val.target.value
    console.log(this.quality)
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
