import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Subscription } from 'rxjs';
import * as Chartist from 'chartist';

import { Tenant, TenantService } from '../tenant.service';

@Component({
    selector: 'tenant',
    templateUrl: './tenant.component.html',
    styleUrls: ['./tenant.component.css']
})
export class TenantComponent implements OnInit, OnDestroy {
    @Input() tenant: Tenant;

    public option: any;
    private subs: Subscription[];

    constructor(private tenantservice: TenantService) {
        this.subs = [];
        this.option = {}
    }

    ngOnInit() {
        let sub = this.tenantservice.tenant.subscribe(tenant => {
            this.tenant = tenant;

            setTimeout(() => this.renderChart(), 0);
        });
        this.subs.push(sub);
    }

    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }

    renderChart() {
        const dataDailySalesChart: any = {
            labels: ['', '', '', '', '', '', ''],
            series: [
                this.tenant.history
            ]
        };

        const optionsDailySalesChart: any = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: Math.max(...this.tenant.history) + 10, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        }

        new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
    }

}
