import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor( private http:HttpClient) { }
  getEmployee(data:any){
    console.log("consoled in service",data);
    return this.http.post<any>('http://localhost:3000/empl',data)
  }
}
