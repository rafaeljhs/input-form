import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageCropperModule } from 'ngx-image-cropper';
import { InputFormComponent } from './input-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbDatepickerModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { UiSwitchModule } from 'ngx-ui-switch';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
  imports: [
    CommonModule,
    ImageCropperModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbDatepickerModule,
    UiSwitchModule,
	    CKEditorModule,

    NgxMaskModule.forRoot()
  ],
  declarations: [InputFormComponent],
  exports: [InputFormComponent]
 
})
export class InputFormModule { }
