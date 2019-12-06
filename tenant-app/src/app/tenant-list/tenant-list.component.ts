import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Observable } from 'rxjs';

import { Tenant, TenantService } from '../tenant.service';
import { filter } from 'rxjs/operators';
import { NbDialogService } from '@nebular/theme';
import { AddTenantComponent } from '../add-tenant/add-tenant.component';

@Component({
    selector: 'tenant-list',
    templateUrl: './tenant-list.component.html',
    styleUrls: ['./tenant-list.component.css']
})
export class TenantListComponent implements OnInit {
    public tenants$: Observable<Tenant[]>;
    public activetenant$: Observable<Tenant>;

    constructor(
        private tenantservice: TenantService,
        private dialogService: NbDialogService
    ) {

    }

    ngOnInit() {
        this.tenants$ = this.tenantservice.tenants;
        this.activetenant$ = this.tenantservice.tenant;
    }

    setCurrent(tenant: Tenant) {
        if (tenant === null) {
            tenant = new Tenant();
            tenant.id = 0;
        }
        this.tenantservice.setCurrent(tenant);
        // this.activetenant = tenant;
    }

    addTenant() {
        this.dialogService.open(AddTenantComponent, {});
    }
}
