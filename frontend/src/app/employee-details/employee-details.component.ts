import { Employee } from '../employee';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  email: string;
  employee: Employee;

  constructor(private route: ActivatedRoute, private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee('Akshith Bellare',
      'Senior Manager',
      'akshith@gmail.com',
      8217618871,
      80000, {
      street: '3rd a cross, Akshaya Nagar',
      city: 'Bengaluru',
      state: 'Karnataka',
      country: 'India',
    });

    this.email = this.route.snapshot.params['email'];

    this.employeeService.getEmployee(this.email)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['employees']);
  }

}
