import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

export class Tenant {
    id: number;
    name: string;
    domain: string;
    created: Date;
    image: any;
    image_count: number;
    video_count: number;
    storage: number;
    site_config: any;
    history: number[];
    tenant_created: boolean;
}


@Injectable({
    providedIn: 'root'
})
export class TenantService {
    public tenants: Subject<Tenant[]>;
    public tenant: Subject<Tenant>;
    public created: Subject<Tenant>;

    private cache: Tenant[];

    constructor(private http: HttpClient) {
        this.tenants = new Subject<Tenant[]>();
        this.tenant = new Subject<Tenant>();
        this.created = new Subject<Tenant>();
        this.cache = [];

        http.get("/tenant/").subscribe(data => {
            this.cache = data["items"] as Tenant[];
            this.tenants.next(this.cache);
        });
    }

    create(domain: string, quota: number) {
        let url = '/tenant/';
        let options = {
            body: {
                domain: domain,
                quota: quota
            },
            withCredentials: true
        };

        this.http.post(url, options)
            .subscribe(data => {
                let tenant = data as Tenant;
                if (tenant.tenant_created) {
                    this.cache.push(tenant);
                }

                this.tenants.next(this.cache);
                this.created.next(tenant);
            });
    }

    setCurrent(tenant: Tenant) {
        this.tenant.next(tenant);
    }
}
