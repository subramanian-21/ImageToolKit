import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ConverterComponent } from './converters/converter/converter.component';
import { CompresserComponent } from './converters/compresser/compresser.component';

const routes: Routes = [
  {path:'',component:BodyComponent},
  {path:'converter',component:ConverterComponent},
  {path:'compresser',component:CompresserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
