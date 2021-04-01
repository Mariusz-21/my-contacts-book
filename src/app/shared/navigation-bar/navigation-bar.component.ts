import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MegaMenuItem} from 'primeng/api';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  items: MegaMenuItem[];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Contacts List', icon: 'pi pi-fw pi-book', command: () => this.router.navigate(['list'])}
    ]
  }
}
