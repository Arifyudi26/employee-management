import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Group {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getGroups(): Observable<Group[]> {
    return of([
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
    ]);
  }
}
