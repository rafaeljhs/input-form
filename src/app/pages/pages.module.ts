import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule, NgbProgressbarModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardsModule } from './dashboards/dashboards.module';
import { CRMModule } from './crm/crm.module';
import { EcommerceModule } from './ecommerce/ecommerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { EmailModule } from './email/email.module';
import { AppsModule } from './apps/apps.module';
import { UiModule } from './ui/ui.module';
import { FormModule } from './form/form.module';
import { AdminUIModule } from './adminUI/adminUI.module';
import { TablesModule } from './tables/tables.module';
import { ChartModule } from './chart/chart.module';
import { IconsModule } from './icons/icons.module';
import { MapsModule } from './maps/maps.module';
import { ExtrasModule } from './extras/extras.module';
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
    DashboardsModule,
    CRMModule,
    EcommerceModule,
    EmailModule,
    AppsModule,
    UiModule,
    FormModule,
    AdminUIModule,
    TablesModule,
    ChartModule,
    IconsModule,
    MapsModule,
    UIModule,
    NgbProgressbarModule,
    NgbTabsetModule,
    LightboxModule,
    ExtrasModule,
    PagesRoutingModule,
    InputFormModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
