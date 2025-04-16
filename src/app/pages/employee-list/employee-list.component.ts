import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Employee {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  basicSalary: number;
  status: string;
  group: string;
  description: string;
}

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}
  Math = Math;

  employees: Employee[] = this.generateDummyData();
  searchTerm = '';
  pageSize = 10;
  currentPage = 1;
  sortColumn: keyof Employee | null = null;
  sortAsc = true;
  notification: { message: string; type: string } | null = null;

  isDescriptionExpanded: { [key: string]: boolean } = {};

  toggleDescription(username: string) {
    this.isDescriptionExpanded[username] =
      !this.isDescriptionExpanded[username];
  }

  ngOnInit(): void {
    const savedSearch = localStorage.getItem('searchTerm');
    if (savedSearch) {
      this.searchTerm = savedSearch;
    }
  }

  ngOnDestroy(): void {
    localStorage.setItem('searchTerm', this.searchTerm);
  }

  onSearchChange(): void {
    this.currentPage = 1;
    localStorage.setItem('searchTerm', this.searchTerm);
  }

  goToAddEmployee() {
    this.router.navigate(['/employees/add']);
  }

  goToDetail(emp: any) {
    this.router.navigate(['/employees', emp.username], {
      state: { employee: emp },
    });
  }

  generateDummyData(): Employee[] {
    const groups = [
      { id: '1', name: 'Engineering' },
      { id: '2', name: 'Marketing' },
      { id: '3', name: 'Sales' },
      { id: '4', name: 'Human Resources' },
      { id: '5', name: 'Finance' },
      { id: '6', name: 'Customer Support' },
      { id: '7', name: 'Design' },
      { id: '8', name: 'Product' },
      { id: '9', name: 'Legal' },
      { id: '10', name: 'Operations' },
    ];

    const dummyData: Employee[] = [];
    for (let i = 1; i <= 100; i++) {
      const group = groups[(i - 1) % groups.length];
      const firstName = `First${i}`;
      const lastName = `Last${i}`;
      const fullName = `${firstName} ${lastName}`;
      const jobTitle = this.getJobTitleByGroup(group.name);
      const description = `${fullName} works as a ${jobTitle} in the ${
        group.name
      } department. They are responsible for ${this.getResponsibilityByGroup(
        group.name
      )}.`;

      dummyData.push({
        username: `user${i}`,
        firstName,
        lastName,
        email: `user${i}@example.com`,
        birthDate: '1990-01-01',
        basicSalary: i * 1000,
        status: i % 2 === 0 ? 'Active' : 'Inactive',
        group: group.name,
        description,
      });
    }
    return dummyData;
  }

  getJobTitleByGroup(groupName: string): string {
    switch (groupName) {
      case 'Engineering':
        return 'Software Engineer';
      case 'Marketing':
        return 'Digital Marketing Specialist';
      case 'Sales':
        return 'Account Executive';
      case 'Human Resources':
        return 'HR Generalist';
      case 'Finance':
        return 'Financial Analyst';
      case 'Customer Support':
        return 'Support Agent';
      case 'Design':
        return 'UI/UX Designer';
      case 'Product':
        return 'Product Manager';
      case 'Legal':
        return 'Legal Advisor';
      case 'Operations':
        return 'Operations Coordinator';
      default:
        return 'Employee';
    }
  }

  getResponsibilityByGroup(groupName: string): string {
    switch (groupName) {
      case 'Engineering':
        return 'developing and maintaining software applications';
      case 'Marketing':
        return 'creating and executing marketing campaigns';
      case 'Sales':
        return 'managing client relationships and closing deals';
      case 'Human Resources':
        return 'recruitment and employee welfare activities';
      case 'Finance':
        return 'budget planning and financial reporting';
      case 'Customer Support':
        return 'handling customer queries and issues';
      case 'Design':
        return 'creating intuitive and attractive designs';
      case 'Product':
        return 'defining product vision and roadmap';
      case 'Legal':
        return 'ensuring company compliance with regulations';
      case 'Operations':
        return 'streamlining internal processes';
      default:
        return 'various tasks as assigned';
    }
  }

  get filteredEmployees(): Employee[] {
    const term = this.searchTerm.toLowerCase();
    return this.employees.filter(
      (emp) =>
        emp.firstName.toLowerCase().includes(term) ||
        emp.lastName.toLowerCase().includes(term) ||
        emp.username.toLowerCase().includes(term) ||
        emp.email.toLowerCase().includes(term) ||
        emp.status.toLowerCase().includes(term) ||
        emp.group.toLowerCase().includes(term) ||
        emp.description.toLowerCase().includes(term)
    );
  }

  get pagedEmployees(): Employee[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredEmployees.slice(start, start + this.pageSize);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  changePageSize(size: string) {
    this.pageSize = parseInt(size, 10);
    this.currentPage = 1;
  }

  sortEmployees(column: keyof Employee) {
    if (this.sortColumn === column) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortColumn = column;
      this.sortAsc = true;
    }

    this.employees.sort((a, b) => {
      const valA = a[column];
      const valB = b[column];
      if (valA < valB) return this.sortAsc ? -1 : 1;
      if (valA > valB) return this.sortAsc ? 1 : -1;
      return 0;
    });
  }

  totalPages(): number {
    return Math.ceil(this.filteredEmployees.length / this.pageSize);
  }

  notify(type: string, username: string) {
    const message =
      type === 'edit'
        ? `Employee ${username} is being edited.`
        : `Employee ${username} is being deleted.`;
    this.notification = { message, type };
    setTimeout(() => {
      this.notification = null;
    }, 3000);
  }
}
