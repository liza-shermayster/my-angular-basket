import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  imports: [MatButtonModule,
    MatCheckboxModule, MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule],
  exports: [MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule],
})
export class MaterialModule { }

