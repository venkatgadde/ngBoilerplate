import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services.routing';
import { SharedModule } from '../../shared/shared.module';

import { ServicesComponent } from './pages/services.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule
  ],
  declarations: [
    ServicesComponent
  ]
})
export class ServicesModule { }
