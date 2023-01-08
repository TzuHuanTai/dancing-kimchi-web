import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isMenuCollapsed: boolean = true;

  ngOnInit(): void {

  }

  switchNav(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  closeNav(): void {
    this.isMenuCollapsed = true;
  }
}
