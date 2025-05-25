import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:8080/posts'
  constructor(private http: HttpClient) { }

  getPosts(filters: any): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl, {params : filters})
  }

  getMyPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/my-posts`)
  }

  createPost(post: any): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}`, post)
  }

  updatePost(id: number, post: any): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${id}`, post)
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  addUpvote(postId: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${postId}/upvote`, {});
  }

  verifyPost(postId: number): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${postId}/verify`, {});
  }

  addComplaint(postId: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${postId}/complaints`, {});
  }

  addComment(postId: number, comment: { content: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/${postId}/comments`, comment);
  }

}
