import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`<div>
              Incline Template
            </div>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
