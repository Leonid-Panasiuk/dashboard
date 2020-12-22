import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit, OnDestroy {
  
  usersSubscription: Subscription | any;

  users: any;
  

  constructor(
    public userService: UserService
    ) { }

  ngOnInit(): void {
    this.usersSubscription = this.userService.getUsers()
      .subscribe(resp => {
        let usersList = resp;
        this.users = usersList;
      })

  }

  ngOnDestroy():void{
    if(this.usersSubscription){
      this.usersSubscription.unsubscribe()
    }
  }
}