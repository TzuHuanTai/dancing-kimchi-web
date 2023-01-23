import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  url: string = "https://docs.google.com/forms/d/e/1FAIpQLSeEtzXIYPsjWsRnM5RGJ3qyQ1aqj1py7IJLL0Lrba_hrFvrNg/viewform?embedded=true";
  safeSrc: SafeResourceUrl;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation!.extras.state as { url: string };
    if (state?.url) {
      this.url = state.url;
    }
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  ngOnInit(): void {
    const pushElement = document.getElementsByClassName('global-footer');
    (pushElement[0] as HTMLElement).style.display = 'none';
  }

  ngOnDestroy(): void {
    const pushElement = document.getElementsByClassName('global-footer');
    (pushElement[0] as HTMLElement).style.display = '';
  }
}
