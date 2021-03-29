import { Component, OnInit } from '@angular/core';
import { produtos } from 'src/app/produto';

@Component({
  selector: 'app-mostruario',
  templateUrl: './mostruario.component.html',
  styleUrls: ['./mostruario.component.scss']
})
export class MostruarioComponent implements OnInit {


  produto = produtos;
  constructor() { }

  ngOnInit() {
  }

}
