import { Injectable } from '@angular/core';
import { Users } from './users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
// import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  user: Users;
  // repository: Repository;
  // userRep: ApiResponse;

  constructor(private http: HttpClient) {
    this.user = new Users("", "", "",0,0,0,0,"","","" );
    // this.repository = new Repository("", "", "", "")
  }

  userRequest(username:any) {
    interface ApiResponse {
      // avatar_url: any;
      login: string;
      bio: string;
      // public_repos: number;
      // public_gists: number;
      // followers: number;
      // following: number;
      // url: string;
      // location: string;
      // email: string;
    }


    let promise = new Promise<ApiResponse>((resolve, reject) => {
      this.http.get<ApiResponse>(environment.baseUrl+username).toPromise().then(response => {
        this.user.login = response.login;
        this.user.bio = response.bio;

        resolve(response)
      },
        error => {
          this.user.login = "An error!!"
          this.user.bio = "Bills"
          reject(error)
        })
    })
    return promise
  }


}


