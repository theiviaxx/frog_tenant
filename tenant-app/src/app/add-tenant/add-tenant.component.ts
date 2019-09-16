import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { MatProgressButtonOptions } from 'mat-progress-buttons';

import { TenantService } from '../tenant.service';

@Component({
    selector: 'add-tenant',
    templateUrl: './add-tenant.component.html',
    styleUrls: ['./add-tenant.component.css']
})
export class AddTenantComponent implements OnInit, OnDestroy {
    public form: FormGroup;
    public options: MatProgressButtonOptions = {
        active: false,
        text: 'Submit',
        spinnerSize: 19,
        raised: true,
        stroked: true,
        buttonColor: 'primary',
        spinnerColor: 'accent',
        fullWidth: false,
        disabled: false,
        mode: 'indeterminate',
    };

    private subs: Subscription[];

    constructor(private tenantservice: TenantService, private fb: FormBuilder) {
        this.subs = [];
        this.form = fb.group({
            name: ['', Validators.required],
            domain: ['', Validators.required]
        });
    }

    ngOnInit() {
        let sub = this.tenantservice.created
            .pipe(
                filter(tenant => tenant.domain === this.form.value.domain)
            )
            .subscribe(tenant => {
                this.options.active = false;
            });
        this.subs.push(sub);
    }

    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }

    create() {
        let value = this.form.value;
        this.options.active = true;
        this.tenantservice.create(value.domain);
    }
}
