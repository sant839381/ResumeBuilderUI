import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { FooterComponent } from '../components/footer/footer.component';
import { UserDetailComponent } from '../components/user-detail/user-detail.component';
import { Template1Component } from '../components/templates/template1/template1.component';
import { PersonalDetailComponent } from '../components/userdetails/personal-detail/personal-detail.component';

export const routes: Routes = [ 

    {
        path:'',
        component:HomeComponent
    },
    {
        path:'app-template',
        component:Template1Component
    },
     {
        path:'app-home',
        component:HomeComponent
    }
    ,{
        path:'user-detail',
        component:UserDetailComponent
    },

    {
        path:'app-personalDetail',
        component:PersonalDetailComponent

    }
];
