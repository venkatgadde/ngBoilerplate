import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent } from './pages/services.component';

export const routes: Routes = [
    { path: '', component: ServicesComponent }
];

@NgModule({
    declarations: [],
    imports: [
       RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ServicesRoutingModule {

}