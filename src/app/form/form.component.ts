import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
import { Users } from '../users';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  users!: Users;
  gitservice: GitService;
  username:any;
  submitusername(){
    this.gitservice.userRequest(this.username)
  }

  constructor(gitservice: GitService) { 
    this.gitservice = gitservice
  }

  ngOnInit(): void {
  }

}
