import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { CustomerListComponent } from './customer/customer-list.component';
import { CustomerNewComponent } from './customer/customer-new.component';
import { CustomerShowComponent } from './customer/customer-show.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomepageComponent },
	{ path: 'customers', component: CustomerListComponent },
	{ path: 'customer/new', component: CustomerNewComponent },
	{ path: 'customer/:id', component: CustomerShowComponent },
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
