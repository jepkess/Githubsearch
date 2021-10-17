import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
import { Users } from '../users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users!: Users;
  gitservice: GitService;
 
  constructor(gitservice: GitService) {
    this.gitservice= gitservice
   }

  ngOnInit(): void {
    this.users=this.gitservice.user
  }

}
