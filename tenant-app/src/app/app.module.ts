import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule, MatListModule, MatInputModule, MatButtonModule, MatDividerModule, MatSidenavModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TenantComponent } from './tenant/tenant.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';

@NgModule({
    declarations: [
        AppComponent,
        TenantComponent,
        TenantListComponent
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
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
