import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { Grid } from './grid/grid.component';
import { ReadonlyDataColumnsComponent } from './grid/columns/readonlyDataColumns.component';
import { EditableActivityComponent } from './grid/columns/editableActivity.component';
import { TotalsComponent } from './grid/columns/totalsColumn.component';


import { MatTableModule } from '@angular/material';

@NgModule({
  imports: [BrowserModule, FormsModule, MatTableModule],
  declarations: [AppComponent, Grid, HeaderComponent, NavComponent, ReadonlyDataColumnsComponent, EditableActivityComponent, TotalsComponent],
  bootstrap: [AppComponent],
  entryComponents: [ReadonlyDataColumnsComponent, EditableActivityComponent,TotalsComponent]

})
export class AppModule { }


