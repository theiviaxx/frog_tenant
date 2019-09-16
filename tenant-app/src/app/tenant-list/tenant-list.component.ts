import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { Tenant, TenantService } from '../tenant.service';

@Component({
    selector: 'tenant-list',
    templateUrl: './tenant-list.component.html',
    styleUrls: ['./tenant-list.component.css']
})
export class TenantListComponent implements OnInit {
    public tenants$: Observable<Tenant[]>;
    public activetenant: Tenant;

    // public form: FormGroup;

    constructor(private tenantservice: TenantService, private fb: FormBuilder) {

        // this.form = fb.group({
        //     name: ['', Validators.required],
        //     domain: ['', Validators.required]
        // });
    }

    ngOnInit() {
        this.tenants$ = this.tenantservice.tenants;
    }

    create() {
        // let value = this.form.value;
        // this.tenantservice.create(value.name, value.domain);
    }

    setCurrent(tenant: Tenant) {
        this.tenantservice.setCurrent(tenant);
        this.activetenant = tenant;
    }
}
