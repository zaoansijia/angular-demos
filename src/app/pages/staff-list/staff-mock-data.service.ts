import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const staffs = {
      username: 'phoebe',
      staffs: [
        { id: 1, staffNo: 11, name: 'Dr Nice', salary: 1000 },
        { id: 2,  staffNo: 12, name: 'Narco', salary: 2000  },
        { id: 3,  staffNo: 13, name: 'Bombasto', salary: 3000  },
        { id: 4,  staffNo: 14, name: 'Celeritas', salary: 4000  },
        { id: 5,  staffNo: 15, name: 'Magneta', salary: 5000  },
        { id: 6,  staffNo: 16, name: 'RubberMan', salary: 6000  },
      ]
    };
    return {staffs};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the staffs array is empty,
  // the method below returns the initial number (11).
  // if the staffs array is not empty, the method below returns the highest
  // hero id + 1.
  genId(staffs: any[]): number {
    return staffs.length > 0 ? Math.max(...staffs.map(staff => staff.id)) + 1 : 11;
  }
}
