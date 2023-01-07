import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    const pushElement = document.getElementsByClassName('global-footer');
        (pushElement[0] as HTMLElement).style.display = 'none';
  }
  
  ngOnDestroy(): void {
    const pushElement = document.getElementsByClassName('global-footer');
        (pushElement[0] as HTMLElement).style.display = '';
  }
}
