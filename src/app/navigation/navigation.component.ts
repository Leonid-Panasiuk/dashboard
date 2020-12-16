import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('400ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
  // animations: [
  //   trigger('slideInOut', [
  //     transition(':enter', [
  //       style({width: '0px'}),
  //       animate('400ms ease-in', style({width: '230px'}))
  //     ]),
  //     transition(':leave', [
  //       animate('400ms ease-in', style({width: '0px'}))
  //     ])
  //   ])
  // ]
})


export class NavigationComponent implements OnInit {

  UserName = 'Admin'

  constructor(private router : Router, private auth: AuthService) {
    
   }

  ngOnInit(): void {
  }
  
  isMenuOpen = true;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.auth.logout();
  }

  isCompanyDropdown = false;

  toggleCompanyMenu() {
    this.isCompanyDropdown = !this.isCompanyDropdown;
    console.log('aa')
  }

}

