import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'
import {MatSelectModule} from '@angular/material/select'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'
import { MatLabel } from '@angular/material/form-field';
const materialItems:Array<any> = [
  MatButtonModule,MatSelectModule,MatFormFieldModule,MatInputModule,MatCardModule
]

@NgModule({
  
  imports: [materialItems],
  exports:[materialItems]
  

})
export class MaterialModule { }
