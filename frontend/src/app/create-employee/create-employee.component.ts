import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee('Akshith Bellare', 
                                    'Senior Manager', 
                                    'akshith@gmail.com', 
                                    8217618871, 
                                    80000, {
                                      street: '3rd a cross, Akshaya Nagar',
                                      city: 'Bengaluru',
                                      state: 'Karnataka',
                                      country: 'India',
                                    });
  submitted = false;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
  }

  save() {
    console.log(this.employee);
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
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
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}
