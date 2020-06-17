import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  email: string;
  employee: Employee;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee(
      'Akshith Bellare', 
      'Senior Manager', 
      'akshith@gmail.com', 
      8217618871, 
      80000, {
        street: '3rd a cross, Akshaya Nagar',
        city: 'Bengaluru',
        state: 'Karnataka',
        country: 'India',
      } 
    );

    this.email = this.route.snapshot.params['email'];
    
    this.employeeService.getEmployee(this.email)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.email, this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee(
                                    'Akshith Bellare', 
                                    'Senior Manager', 
                                    'akshith@gmail.com', 
                                    8217618871, 
                                    80000, {
                                      street: '3rd a cross, Akshaya Nagar',
                                      city: 'Bengaluru',
                                      state: 'Karnataka',
                                      country: 'India',
                                    }
    );
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

}
