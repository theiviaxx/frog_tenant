import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

export class Tenant {
    id: number;
    name: string;
    created: Date;
    image: any;
    image_count: number;
    video_count: number;
    storage: number;
    site_config: any;
    history: number[];
}


@Injectable({
    providedIn: 'root'
})
export class TenantService {
    public tenants: Subject<Tenant[]>;
    public tenant: Subject<Tenant>;

    constructor(private http: HttpClient) {
        this.tenants = new Subject<Tenant[]>();
        this.tenant = new Subject<Tenant>();

        http.get("/tenant/").subscribe(data => {
            this.tenants.next(data["items"] as Tenant[]);
        });
    }

    create(name: string, domain: string) {
        let url = '/tenant/';
        let options = {
            body: {
                name: name,
                domain: domain,
            },
            withCredentials: true
        };

        this.http.post(url, options)
            .subscribe(data => {
                this.tenants.next(data["items"] as Tenant[]);
            });
    }

    setCurrent(tenant: Tenant) {
        this.tenant.next(tenant);
    }
}
