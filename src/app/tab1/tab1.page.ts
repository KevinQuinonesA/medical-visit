import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  patients = [
    {
      id:1,
      name: 'Mario',
      birth_date: "14-11-99",
      address:"Calle Saturno"
    },
    {
      id:2,
      name: 'Valery',
      birth_date: "15-03-00",
      address:"Calle Venus"

    },
    {
      id:3,
      name: 'Juan',
      birth_date: "22-08-96",
      address:"Calle Pluton"
    }
  ];

  constructor() {}

  ngOnInit() {}

  getPatientList() {}
}
