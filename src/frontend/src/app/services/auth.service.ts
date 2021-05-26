import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  private _isAuth: boolean = false;
  private password: string = "1001";

  get isAuth(): boolean {
    return this._isAuth;
  }

  login(password: string){
    if(password == this.password)
      this._isAuth = true
  }

  logout(){
    this._isAuth = false;
  }

  isAuthenticated(): Promise<boolean>{
    return new Promise<boolean>(resolve => {
      resolve(this._isAuth);
    });
  }
}
