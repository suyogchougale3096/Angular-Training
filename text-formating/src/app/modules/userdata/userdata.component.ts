import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  database_name: string = "";
  port_number: number = 0;
  database_password: string = "";
  database_url: string = "";

  signup: FormGroup;
  storedForms: any[] = [];

  constructor(private formBuilder: FormBuilder, private cookieService: CookieService) {
    this.signup = this.formBuilder.group({
      dbname: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
      portnumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{1,5}$/)]),
      dbpassword: new FormControl('', [Validators.required, Validators.minLength(7)]),
      dburl: new FormControl('', [Validators.required, Validators.pattern(/^(https?:\/\/.*[^\/])$/)])
    });
  }

  ngOnInit(): void {
    this.signup.reset();
    this.getAllStoredForms();
  }

  onSubmit(): void {
    const formValues = this.signup.value;
    let existingForms = [];

    const existingFormsString = this.cookieService.get('signup');
    if (existingFormsString) {
      try {
        existingForms = JSON.parse(existingFormsString);
      } catch (e) {
        console.error('Error parsing stored forms:', e);
        // Optionally reset the cookie if parsing fails
        this.cookieService.delete('signup');
      }
    }

    existingForms.push(formValues);
    this.cookieService.set('signup', JSON.stringify(existingForms));
    console.log(`Form Data: ${JSON.stringify(existingForms)}`);

    this.signup.reset();
    this.getAllStoredForms();
  }

  getAllStoredForms(): void {
    const storedFormsString = this.cookieService.get('signup');
    if (storedFormsString) {
      try {
        this.storedForms = JSON.parse(storedFormsString);
      } catch (e) {
        console.error('Error parsing stored forms:', e);
        this.storedForms = [];
      }
    } else {
      this.storedForms = [];
    }
  }
}
