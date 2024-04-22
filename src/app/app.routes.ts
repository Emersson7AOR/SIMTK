import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        component:HomeComponent,
        children:[
            {
                path:'',
                pathMatch:'full',
                component:NosotrosComponent
            }
        ]
    }
];


