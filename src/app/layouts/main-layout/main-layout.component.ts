import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12"><router-outlet></router-outlet></div>
      </div>
    </div>
  `,
})
export class MainLayoutComponent {}
