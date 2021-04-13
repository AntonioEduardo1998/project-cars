import { Component, OnInit } from '@angular/core';
import { CarrosService } from 'src/app/services/carros.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public carros: any = [];

  constructor(private carrosService: CarrosService) { }

  ngOnInit() {
    this.getCarros()
  }

  public getCarros(): void {
    this.carrosService.getCars().subscribe(res => {
      this.carros = res;
    })
  }

}
