import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Position } from '../locations.component';


@Component({
  selector: 'locations-position-hint',
  templateUrl: './position-hint.component.html',
  styleUrls: ['./position-hint.component.scss']
})
export class PositionHintComponent {
  constructor(
    private router: Router,
    private ref: MatSnackBarRef<PositionHintComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public position: Position
  ) { }

  routeToOrder(): void {
    this.router.navigate(['order'], { state: { url: this.position.form_url } });
    this.dismiss();
  }

  dismiss(): void {
    this.ref.dismiss();
  }
}
