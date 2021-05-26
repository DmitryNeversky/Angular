import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  private isAuth: boolean = false;
  private password: string = "1001";

  login(password: string){
    if(password == this.password)
      this.isAuth = true
  }

  logout(){
    this.isAuth = false;
  }

  isAuthenticated(): boolean{
    return this.isAuth;
  }
}
