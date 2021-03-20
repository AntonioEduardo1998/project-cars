import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-section',
  templateUrl: './model-section.component.html',
  styleUrls: ['./model-section.component.scss']
})
export class ModelSectionComponent implements OnInit {

  @Input() public color = '#fff';
  @Input() public img = '';

  constructor() { }

  ngOnInit(): void {
  }

}
