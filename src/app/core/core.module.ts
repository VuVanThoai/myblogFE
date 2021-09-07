import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HighLightPipe} from './pipe/high-light.pipe';
import { DragDropDirective } from './directives/drag-drop.directive';

@NgModule({
  declarations: [
    HighLightPipe,
    DragDropDirective
  ],
  exports: [
    HighLightPipe,
    DragDropDirective
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
