import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  exports: [
    MatButtonModule,
    MatSnackBarModule
  ]
})

export class SharedMaterialModule { }
