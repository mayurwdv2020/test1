import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }


  usersdata = {userName:"John",password:"1234",confirmpassword:"231",city:"Nagpur",state:"Maharashtra"};

  GetUsers()
  {
    return this.usersdata;
  }
}
