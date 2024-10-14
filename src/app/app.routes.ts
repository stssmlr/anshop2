import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutComponent } from './about/about.component';
<<<<<<< HEAD
import { ProductFormComponent } from './product-form/';

export const routes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'create', component: ProductFormComponent },
    { path: 'about', component: AboutComponent },
];
=======
import { ProductFormComponent } from './product-form/product-form.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'edit/:id', component: ProductFormComponent },
    { path: 'create', component: ProductFormComponent },
    { path: 'about', component: AboutComponent },
];
>>>>>>> f8de1d4221b2a5bebf4e2ba9c4b0cfad19fbde14
