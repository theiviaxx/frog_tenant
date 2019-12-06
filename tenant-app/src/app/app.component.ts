import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';


import { Tenant, TenantService } from './tenant.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'tenant-app';

    public tenant$: Observable<Tenant>;

    constructor(private tenantservice: TenantService) {

    }

    ngOnInit() {
        this.tenant$ = this.tenantservice.tenant;
    }
}
