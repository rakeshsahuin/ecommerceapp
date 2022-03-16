import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Web';
  constructor(private primengConfig: PrimeNGConfig){}
  ngOnInit(): void {
      this.primengConfig.ripple = true; //Ripple is an optional animation for the supported components such as buttons. It is disabled by default and needs to be enabled globally at your main component e.g. app.component.ts by injecting PrimeNGConfig.
  }
}
