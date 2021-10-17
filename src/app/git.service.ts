import { Injectable } from '@angular/core';
import { Users } from './users';
import { HttpClient,  } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  user: Users;
  repository: Repository;
  repodata:any=[];
  userdata:any= [];


  constructor(private http: HttpClient) {
    this.user = new Users("", "", "",0,0,0,0,"","","" );
    this.repository = new Repository("", "", "", "");
  }

  userRequest(username:any) {
    this.repodata.length=0;
    interface ApiResponse {
      avatar_url: any;
      login: string;
      bio: string;
      public_repos: number;
      public_gists: number;
      followers: number;
      following: number;
      url: string;
      location: string;
      email: string;
    }


    let promise = new Promise<ApiResponse>((resolve, reject) => {
      this.http.get<ApiResponse>(environment.baseUrl+username).toPromise().then(response => {
        this.user.avatar_url=response.avatar_url
        this.user.login = response.login;
        this.user.bio = response.bio;
        this.user.public_repos=response.public_repos;
        this.user.public_gists= response.public_gists;
        this.user.followers=response.followers;
        this.user.following=response.following;
        this.user.url=response.url;
        this.user.location=response.location;
        this.user.email=response.email;

        resolve(response)
      },
        error => {
          // this.user.login = "An error!!"
          // this.user.bio = "Bills"
          reject()
        })
        this.http.get<any>(environment.baseUrl+username+'/repos').toPromise().then(response =>{
          for (let i = 0; i < response.length; i++) {
            this.repodata = new Repository(response[i].html_url, response[i].name, response[i].description, response[i].language);
            this.userdata.push(this.repodata);
          }
          resolve(response);
        },
          error => {
            reject(error);
  

        })
    })
    return promise
  }


}


