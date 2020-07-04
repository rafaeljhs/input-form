import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import * as moment from 'moment';
// import flatpickr from "flatpickr";
declare var flatpickr

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent implements OnInit, AfterViewInit {
  @Input() label: string;
  @Input() name: string;
  @Input() mask: string = null;
  @Input() ex: string;
  @Input() formGroup: FormGroup;
  @Input() submitted: boolean;
  @Input() disabled: boolean;
  @Input() placeholder: string;
  @Input() defaultBoColor: string = '#dfdfdf';
  @Input() color: string = '#00b19d';

  @Input() type = 'string';
  @Input() rows = 1;

  @Input() items: any[];
  @Input() selectLabel = 'text';
  @Input() selectId = 'id';
  @Input() notFoundText = 'id';
  @Input() step: string = null;



  required = false;

  @Output() onfocusout = new EventEmitter();
  @Output() change = new EventEmitter();


  //html
  public Editor = ClassicEditor;

  public dateOfBirth: { year: number; month: number; day: number };

  public currentDate = moment().format("YYYY-MM-DD");

  constructor(
    private config: NgbDatepickerConfig
  ) {


    if (this.type == 'date') {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      this.config.minDate = { year: 1900, month: 1, day: 1 };
      this.config.maxDate = { year, month, day };
      this.config.outsideDays = "hidden";
    }
    if (this.type == 'date') {
    }


  }

  get f() {
    return this.formGroup.controls[this.name];
  }
  ngOnInit() {
    if (this.type == 'daterange') {
      setTimeout(() => {
        flatpickr('#' + this.name, {
          mode: "range",
          locale: "pt",
          dateFormat: "d-m-Y"
        });
      }, 200);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.required = this.f && this.f.errors && this.f.errors.required === true;
    }, 500);

    const item = document.getElementById(this.name) as HTMLInputElement;
    const thit = this;

    if (this.step) {
      item.setAttribute('step', this.step);
    }
    if (this.disabled) {
      if (this.type == 'select') {
        this.type = 'text';
        setTimeout(() => {
          const item = document.getElementById(this.name) as HTMLInputElement;
          item.setAttribute('disabled', 'true');
        }, 500);
      } else {
        item.setAttribute('disabled', 'true');
      }
    }
    if (this.onfocusout && item) {
      // tslint:disable-next-line: only-arrow-functions
      item.addEventListener('focusout', function () {
        thit.emit('onfocusout');
      });
    }
  }

  emit(item) {
    if (this[item]) {
      this[item].emit();
    }
  }
}
