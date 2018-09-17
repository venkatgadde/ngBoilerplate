import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    {
        path: '', children: [
            { path: '', loadChildren: './modules/home/home.module#HomeModule'},
            { path: 'services', loadChildren: './modules/services/services.module#ServicesModule'},
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [
       RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
