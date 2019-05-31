import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";


import { EJ_REPORTVIEWER_COMPONENTS } from './ej/reportviewer.component';
import { EJ_REPORTDESIGNER_COMPONENTS } from './ej/reportdesigner.component';

import { EJTemplateDirective } from './ej/template';

export * from './ej/reportviewer.component';
export * from './ej/reportdesigner.component';
export * from './ej/core';
export { EJTemplateDirective } from './ej/template';


let EJ_COMPONENTS = [EJTemplateDirective, EJ_REPORTVIEWER_COMPONENTS, EJ_REPORTDESIGNER_COMPONENTS];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EJ_COMPONENTS
  ],
  exports: [
    EJ_COMPONENTS
  ]
})
export class ReportsAngularModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ReportsAngularModule
    };
  }
}


