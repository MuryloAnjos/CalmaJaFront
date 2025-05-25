import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl= 'http://localhost:8080/users'

  constructor(private http: HttpClient) { }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/current`)
  }

  updateUser(formData: FormData): Observable<any> {
    return this.http.put<User>(`${this.apiUrl}/update`, formData)
  }

  updatePassword(data: { oldPassword: string; newPassword: string }): Observable<any> {
    return this.http.put(`${this.apiUrl}/update`, data);
  }

  followUser(followedId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${followedId}/follow`, {});
  }

  unfollowUser(followedId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${followedId}/unfollow`);
  }
}
