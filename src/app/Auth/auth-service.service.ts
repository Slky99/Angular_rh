import { Injectable } from '@angular/core'; 
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  /*private _isAuthenticated: boolean = false;*/
  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();
  public redirectUrl: string | null = null;

  setAuthenticationStatus(status: boolean): void {
     this.isAuthenticatedSubject.next(status) ;
  }

  isAuthenticated(): boolean {
   /* console.log('Authentication Status:', this._isAuthenticated);
    return this._isAuthenticated;*/
    return this.isAuthenticatedSubject.value
  }

  getAuthenticationStatus(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }


}
