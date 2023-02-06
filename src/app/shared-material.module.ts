import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  exports: [
    MatButtonModule,
    MatSnackBarModule,
    MatTabsModule
  ]
})

export class SharedMaterialModule { }
