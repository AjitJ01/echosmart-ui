import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators  } from "@angular/forms";
import {Category} from './category'
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://127.0.0.1:8000/api/category';
  constructor(private http: HttpClient , private _cookieService:CookieService) {}
  

  
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    details: new FormControl('', Validators.required),
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      name: '',
      details: '',
    });
  }

  getCategorysList(): Observable<any> {
    return this.http.get(environment.apis.local);    
  }

  createCategory(category: Category): Observable<object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    httpOptions.headers.append('Content-Type','application/json');
    httpOptions.headers.append('X-CSRFToken', this._cookieService.get('csrftoken'));
    return this.http.post<Category>(this.baseUrl, JSON.stringify(category), httpOptions)
  }

  deleteCategory(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    httpOptions.headers.append('Content-Type','application/json');
    httpOptions.headers.append('X-CSRFToken', this._cookieService.get('csrftoken'));
    return this.http.delete(this.baseUrl + `/${id}`,httpOptions);
  }

  updateCategory(data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    httpOptions.headers.append('Content-Type','application/json');
    httpOptions.headers.append('X-CSRFToken', this._cookieService.get('csrftoken'));
    return this.http.put(this.baseUrl + `/${data.id}`,JSON.stringify(data) ,httpOptions);
  }

  populateForm(data) {
    console.log('populateForm  - ',data)
    this.form.setValue(data);
    
    console.log("Printing values in get value:",this.form.getRawValue())
    // this.form.setValue({id: 1, name: "Accessories", details: "All accessories included."})
    // console.log(this.form.getRawValue)
    // this.form.controls.firstName.setValue('abc');
  }

}

