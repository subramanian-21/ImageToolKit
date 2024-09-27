import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ConverterComponent } from './converters/converter/converter.component';
import { CompresserComponent } from './converters/compresser/compresser.component';
import { ImagesComponent } from './images/images.component';
import { GrayscaleComponent } from './converters/grayscale/grayscale.component';
import { ResizeComponent } from './converters/resize/resize.component';
import { Imgs2pdfComponent } from './converters/imgs2pdf/imgs2pdf.component';
const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'converter', component: ConverterComponent },
  { path: 'compresser', component: CompresserComponent },
  { path: 'image', component: ImagesComponent },
  { path: 'grayscale', component: GrayscaleComponent },
  { path: 'resize', component: ResizeComponent },
  { path: 'imgs2pdf', component:Imgs2pdfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
