import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  fb_group_url: string = 'https://www.facebook.com/plugins/group.php?href=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F2276769182490436&show_metadata=true&appId=101902853178509&heigh=500';
  safeSrc: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.resizeFbGroup();

    window.onresize = () => this.resizeFbGroup();
  }

  resizeFbGroup(): void {
    let width = Math.ceil(document.body.clientWidth * 0.8);

    let iframe: HTMLElement = document.getElementById('fb-group-iframe') as HTMLElement;
    iframe.style.width = width < 500 ? `${width}px` : "500px";
    iframe.style.height = "500px";

    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.fb_group_url}&width=${width}`);
  }
}
