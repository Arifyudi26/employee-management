import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-detail.component.html',
})
export class EmployeeDetailComponent {
  employee: any;
  id: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');

    const nav = this.router.getCurrentNavigation();
    this.employee = nav?.extras?.state?.['employee'];

    if (!this.employee) {
      console.error('Employee data not found in state');
    }
  }
}
