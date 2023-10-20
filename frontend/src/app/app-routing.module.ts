import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ConverterComponent } from './converters/converter/converter.component';
import { CompresserComponent } from './converters/compresser/compresser.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  {path:'',component:BodyComponent},
  {path:'converter',component:ConverterComponent},
  {path:'compresser',component:CompresserComponent},
  {path:'image',component:ImagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
