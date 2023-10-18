import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'
const materialItems:Array<any> = [
  MatButtonModule
]

@NgModule({
  imports: [materialItems],
  exports:[materialItems]
})
export class MaterialModule { }
