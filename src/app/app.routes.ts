import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { VideosComponent } from './componentes/videos/videos.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FotografiaComponent } from './componentes/fotografia/fotografia.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        component:NosotrosComponent,
    },
    {
        path:'videos',
        component:VideosComponent
    },
    {
        path:'fotografias',
        component:FotografiaComponent
    }
];


