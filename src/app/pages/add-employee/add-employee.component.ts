import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, Group } from './data.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, NgSelectModule, AsyncPipe],
  templateUrl: './add-employee.component.html',
})
export class AddEmployeeComponent implements OnInit {
  employee = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    basicSalary: null as number | null,
    status: '',
    group: '',
    description: '',
  };

  groups$!: Observable<Group[]>;
  selectedGroup: string = '';
  groupSearch: string = '';
  maxDate: string = new Date().toISOString().split('T')[0];

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.groups$ = this.dataService.getGroups();
  }

  onSubmit() {
    console.log('Form submitted!', this.employee);
    alert('Employee saved successfully!');
    this.router.navigate(['/employees']);
  }

  onCancel() {
    this.router.navigate(['/employees']);
  }
}
