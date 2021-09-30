import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  patientForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.patientForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      birth_date: [null],
      height: [''],
      address: [null],
      gps_address: [null],
    });
  }

  ngOnInit() {}
}
