import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder,Validator,Validators } from '@angular/forms';
import { EmployeeServiceService } from './employee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeForm!: FormGroup; 
  submitted=false;
  constructor(private fb:FormBuilder,private empService:EmployeeServiceService) { }
  ngOnInit(){
    this.employeeForm=this.fb.group({
      Name:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      Position:['',[Validators.required]],
      Location:['',[Validators.required]],
    
      Salary:[null,[Validators.required,Validators.minLength(3)]]
    
      })}

  onSubmit() {
    this.submitted = true;
    console.log(this.employeeForm.value);
    this.empService.getEmployee(this.employeeForm.value).subscribe((res)=>{
      console.log(JSON.parse(JSON.stringify(res.body)));
   
    })
    if(this. employeeForm. invalid){
      alert("field empty")
      return ;
      }
      else{
        alert(" employee added successfully")
        console.log("your form value")
        }
      }
   get employeeFormControl() {  
    return this.employeeForm.controls;  
  }  
  
}
  
  


