import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  AllUsers;
  registrationForm: any;

  constructor(private fb:FormBuilder, public myuser:UsersService){

    this.registrationForm = this.fb.group({
      userName: ['',[Validators.required,Validators.minLength(5)]],
      password: [''],
      confirmpassword: [''],
      address:this.fb.group({
      city:[''],
      state:['']
   })
  });
  }



ngOnInit()
{
  this.AllUsers = this.myuser.GetUsers();
  console.log("Allusers-",this.AllUsers);
  this.registrationForm.userName = this.AllUsers.userName;
  this.registrationForm.password = this.AllUsers.password;
  this.registrationForm.confirmpassword = this.AllUsers.confirmpassword;
  this.registrationForm.city = this.AllUsers.city;
  this.registrationForm.state = this.AllUsers.state;
}


  
}
