import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-exemple',
  templateUrl: './exemple.component.html',
  styleUrls: ['./exemple.component.scss']
})
export class ExempleComponent implements OnInit {
  formSimple: FormGroup;
  submittedSimple = false;
  submittingSimple = false;
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.formSimple = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }
  onSubmit1() {
    this.submittedSimple = true;
    if (this.formSimple.invalid) {
      return;
    }
    this.submittingSimple = true;
  }
  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
