import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule, MatListModule, MatInputModule, MatButtonModule, MatDividerModule, MatSidenavModule, MatIconModule } from '@angular/material';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbMenuModule, NbListModule, NbCardModule, NbTabsetModule, NbDialogModule, NbActionsModule } from '@nebular/theme';


import { AppComponent } from './app.component';
import { TenantComponent } from './tenant/tenant.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { AddTenantComponent } from './add-tenant/add-tenant.component';

import { NbThemeModule } from '@nebular/theme';

@NgModule({
    declarations: [
        AppComponent,
        TenantComponent,
        TenantListComponent,
        AddTenantComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,

        RouterModule.forRoot([], { useHash: true }),

        NbThemeModule.forRoot({ name: 'cosmic' }),
        NbLayoutModule,
        NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
        NbButtonModule,
        NbMenuModule.forRoot(),
        NbListModule,
        NbCardModule,
        NbTabsetModule,
        NbDialogModule.forRoot(),
        NbActionsModule,

        MatCardModule,
        MatListModule,
        MatInputModule,
        MatButtonModule,
        MatDividerModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,

        MatProgressButtonsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [AddTenantComponent]
})
export class AppModule { }
