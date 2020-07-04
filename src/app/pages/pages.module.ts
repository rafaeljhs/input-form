import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule, NgbProgressbarModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesRoutingModule } from './pages-routing.module';
import { ExempleComponent } from './exemple/exemple.component';
import { UIModule } from '../shared/ui/ui.module';
import { LightboxModule } from 'ngx-lightbox';
import { InputFormComponent } from '../components/input-form/input-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputFormModule } from '../components/input-form/input-form.module';

@NgModule({
  declarations: [ExempleComponent],
  exports: [InputFormComponent],
  imports: [
    CommonModule,
    NgbDropdownModule,
    UIModule,
    NgbProgressbarModule,
    NgbTabsetModule,
    LightboxModule,
    PagesRoutingModule,
    InputFormModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
