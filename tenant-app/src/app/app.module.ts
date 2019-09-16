import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule, MatListModule, MatInputModule, MatButtonModule, MatDividerModule, MatSidenavModule, MatIconModule } from '@angular/material';
import { MatProgressButtonsModule } from 'mat-progress-buttons';

import { AppComponent } from './app.component';
import { TenantComponent } from './tenant/tenant.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { AddTenantComponent } from './add-tenant/add-tenant.component';

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
    bootstrap: [AppComponent]
})
export class AppModule { }
