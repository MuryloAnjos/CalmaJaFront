import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(!!localStorage.getItem('token')); // !! é para transformaro valor em boolean, e behavior é um observable,  que pega o ultimo valor
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  login(credentials: {username: string; password: string}): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token)
        this.isAuthenticatedSubject.next(true)
      })
    )
  }

  register(user: {username: string; telephone: string; email: string; password: string; role: string}): Observable<any>{
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  logout() {
    localStorage.removeItem('token')
    this.isAuthenticatedSubject.next(false)
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }
}
