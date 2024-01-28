import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models/employe';

@Component({
  selector: 'emp-card',
  templateUrl: './emp-card.component.html',
  styleUrls: ['./emp-card.component.scss']
})
export class EmpCardComponent implements OnInit {
    
  @Input() empDetail?:Employee 

  constructor() { }

  ngOnInit() {
  }

}
