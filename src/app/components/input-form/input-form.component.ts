import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// import * as moment from 'moment';
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


  @Input() multiple = false;
  @Input() tag = false;
  @Input() step: string = null;
  @Input() items: any[];
  @Input() selectLabel = 'name';
  @Input() selectId = 'id';
  @Input() notFoundText = 'Itens não encontrados';



  @Input() dateFormat: string = "d/m/Y";
  @Input() altFormat: string = "d/m/Y";

  @Input() minDate: string = null;
  @Input() maxDate: string = null;

  @Input() minTime: string = null;
  @Input() maxTime: string = null;
  @Input() enableDays: string[] = [];


  componentcolor = "#ffffff";

  required = false;

  @Output() onfocusout = new EventEmitter();
  @Output() change = new EventEmitter();
  @Output() keyup = new EventEmitter();


  //html
  public Editor = ClassicEditor;

  // public currentDate = moment().format("YYYY-MM-DD");

  constructor(
  ) {

  }
  colorChange() {
    this.f.setValue(this.componentcolor);
  }
  addTagFn(name) {
    return { name: name, tag: true };
  }
  addCustomUser = (term) => {
    let aux = {};
    if (this.tag) {
      aux[this.selectId] = term;
      aux[this.selectLabel] = term;
    }
    return this.tag ? aux : null
  };
  get f() {
    return this.formGroup.controls[this.name];
  }
  ngOnInit() {
    if (this.type == 'daterange') {
      setTimeout(() => {
        flatpickr('#' + this.name, {
          mode: "range",
          minDate: this.minDate,
          maxDate: this.maxDate,
          altInput: true,
          enable: this.enableDays,
          altFormat: this.altFormat,
          locale: "pt",
          dateFormat: this.dateFormat
        });
      }, 200);
    }
    if (this.type == 'date') {
      setTimeout(() => {
        flatpickr('#' + this.name, {
          locale: "pt",
          altInput: true,
          minDate: this.minDate,
          maxDate: this.maxDate,
          enable: this.enableDays,
          altFormat: this.altFormat,
          dateFormat: this.dateFormat
        });
      }, 200);
    }
    // if (this.type == 'time') {
    //   setTimeout(() => {
    //     flatpickr('#' + this.name, {
    //       locale: "pt",
    //       enableTime: true,
    //       noCalendar: true,
    //       dateFormat: "H:i",
    //       minTime: this.minTime,
    //       maxTime: this.maxTime,
    //     });
    //   }, 200);
    // }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.required = this.f && this.f.errors && this.f.errors.required === true;
      if (this.f.value) {
        this.componentcolor = this.f.value;
      }
    }, 500);

    const item = document.getElementById(this.name) as HTMLInputElement;
    const thit = this;

    if (this.step) {
      item.setAttribute('step', this.step);
    }
    if (this.disabled) {
      if (this.type == 'select') {
        this.type = 'text';
        let texts = document.getElementById(this.name).childNodes[0].childNodes[0]['innerText'] + '';
        // texts = texts.substr(0, texts.length - 2);
        setTimeout(() => {
          const item = document.getElementById(this.name) as HTMLInputElement;
          item.setAttribute('disabled', 'true');
          item.value = texts;
        }, 100);
      } else {
        item.setAttribute('disabled', 'true');
      }

      item.setAttribute('disabled', 'true');
    }
    if (this.onfocusout && item) {
      item.addEventListener('focusout', function () {
        thit.emit('onfocusout');
      });
    }
    if (this.keyup && item) {
      item.addEventListener('keyup', function () {
        thit.keyup.emit(item);
      });
    }
  }

  emit(item) {
    if (this[item]) {
      this[item].emit();
    }
  }
}
