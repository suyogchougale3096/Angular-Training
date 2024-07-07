import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, Validator } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  
  // userForm: FormGroup;

  // constructor(private formBuilder: FormBuilder) {
  //   this.userForm = this.formBuilder.group({
  //     fname: new FormControl(''),
  //     lname: new FormControl('')
  //   });
  // }

  database_name : string = "";
  port_number : number = 0;
  database_password : string = "";
  database_url : string = "";


  signup : FormGroup;
  storedForms: any[] = [];

  constructor(private formBuilder : FormBuilder,private cookieService: CookieService){
    this.signup = this.formBuilder.group({
      dbname : new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9]+$/)]),
      portnumber : new FormControl('',[Validators.required,Validators.pattern(/^\d{1,5}$/)]),
      dbpassword : new FormControl('',[Validators.required,Validators.minLength(7)]),
      dburl : new FormControl('',[Validators.required,this.urlValidator])
    })
  }
  ngOnInit(): void {
    this.signup.reset();
    this.getAllStoredForms();
  }

  onSubmit(): void {
    // this.database_name = `${this.signup.get('dbname')?.value}`;
    // this.port_number = Number(`${this.signup.get('portnumber')?.value}`);
    // this.database_name = `${this.signup.get('dbpassword')?.value}`;
    // this.database_url = `${this.signup.get('dburl')?.value}`;
    // console.log(typeof(this.signup.value));

    // const formValues = this.signup.value;
    // const uniqueId = new Date().getTime();
    // const formValuesString = JSON.stringify(formValues);
    // this.cookieService.set(`signup_${uniqueId}`, formValuesString);
    // console.log(`Form Data: ${formValuesString}`);
    // this.signup.reset();
    // this.getAllStoredForms();


    const formValues = this.signup.value;
    const existingFormsString = this.cookieService.get('signup');
    const existingForms = existingFormsString ? JSON.parse(existingFormsString) : [];
    existingForms.push(formValues);
    this.cookieService.set('signup', JSON.stringify(existingForms));
    console.log(`Form Data: ${JSON.stringify(existingForms)}`);
    
    // Clear the form fields
    this.signup.reset();
    
    // Update stored forms
    this.getAllStoredForms();
  }

  getAllStoredForms(): void {
    const storedFormsString = this.cookieService.get('signup');
    this.storedForms = storedFormsString ? JSON.parse(storedFormsString) : [];
    console.log(this.storedForms); // Print all stored forms to the console
  }

  portNumberValidator(control: FormControl): { [key: string]: any } | null {
    const portNumber = control.value;
    if (portNumber && String(portNumber).length > 5) {
      return { 'portNumberTooLong': true };
    }
    return null;
  }

  urlValidator(control: FormControl): { [key: string]: any } | null {
    const url = control.value;
    const validUrlPattern = /^(http|https):\/\/[^\/]+$/;
    if (url && !validUrlPattern.test(url)) {
      return { 'invalidUrl': true };
    }
    return null;
  }
}
