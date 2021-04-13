import { Component, OnInit } from '@angular/core';
import { produtos } from 'src/app/produto';
import { CarrosService } from 'src/app/services/carros.service';

@Component({
  selector: 'app-mostruario',
  templateUrl: './mostruario.component.html',
  styleUrls: ['./mostruario.component.scss']
})
export class MostruarioComponent implements OnInit {

  public produtos: any = [];
  constructor(private carrosService: CarrosService) { }

  ngOnInit() {
    this.carrosService.getCars().subscribe(res => {
      this.produtos = res;
    })
  }

}
