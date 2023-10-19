import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-converter-box',
  templateUrl: './converter-box.component.html',
  styleUrls: ['./converter-box.component.css']
})
export class ConverterBoxComponent {
@Input() allConverters:any

}
