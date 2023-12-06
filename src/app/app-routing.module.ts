import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ChambreComponent } from './chambre/chambre.component';


import { ReservationComponent } from './reservations/reservation/reservation.component';
import { AddReservationComponent } from './reservations/add-reservation/add-reservation.component';
import { ReportingModule } from './reservations/reporting/reporting.module';
import { ReportRoomComponent } from './reservations/report-room/report-room.component';
import { ReportListComponent } from './reservations/report-list/report-list.component';
import { UpdateReportsComponent } from './reservations/update-reports/update-reports.component';


import { BodyComponent } from './shared/body/body.component';
import { ChambreModificationComponent } from './chambre/chambre-modification/chambre-modification.component';
import { ChambreAjouterComponent } from './chambre/chambre-ajouter/chambre-ajouter.component';

import { AjouterUniversiteComponent } from './universite/ajouter-universite/ajouter-universite.component';
import { ListeUniversitesComponent } from './universite/liste-universites/liste-universites.component';
import { DetailsUniversiteComponent } from './universite/details-universite/details-universite.component';

import { ShowBlocComponent } from './manage-bloc/show-bloc/show-bloc.component';
import { EditBlocComponent } from './manage-bloc/edit-bloc/edit-bloc.component';
import { AddBlocComponent } from './manage-bloc/add-bloc/add-bloc.component';
import { UniversitesComponent } from './universite/universites/universites.component';


import { LoginRegisterComponent } from './Authentication/login-register/login-register.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth.guard';
import { HomeFoyerComponent } from './foyer/home-foyer/home-foyer.component';
import { EditFoyerComponent } from './foyer/edit-foyer/edit-foyer.component';
import { AddFoyerComponent } from './foyer/add-foyer/add-foyer.component';

import { NotfoundComponent } from './shared/notfound/notfound.component';

import { DetailsChambreComponent } from './chambre/details-chambre/details-chambre.component';


const routes: Routes = [

  {path:'auth',component:LoginRegisterComponent},


  //Manage Users
  {path:'u',loadChildren:()=>import('../app/manageUser/module/manage-user/manage-user.module').then((t)=>t.ManageUserModule)},


  {path:'chambre',component:ChambreComponent,canActivate: [authGuard]},
  { path: 'chambre-modification/:id', component: ChambreModificationComponent ,canActivate: [authGuard]},
  { path: 'chambre-ajouter', component: ChambreAjouterComponent,canActivate: [authGuard] },
  {path : 'ajouterUniversite', component : AjouterUniversiteComponent,canActivate: [authGuard]},
  {path : 'showUniversites' , component : ListeUniversitesComponent,canActivate: [authGuard]},
  {path : 'ajouterUniversite/:id', component : AjouterUniversiteComponent,canActivate: [authGuard]},
  {path : 'detailsUniversites' , component : DetailsUniversiteComponent,canActivate: [authGuard]},
  { path: 'gestionreservation', component: ReservationComponent },
  { path: 'confirmreservation', component: AddReservationComponent },
  { path: 'ajouterreservation', component: AddReservationComponent },


  { path: 'chambre-modification/:id', component: ChambreModificationComponent },
  { path: 'chambre-ajouter', component: ChambreAjouterComponent },

  {path:'bloc', component:ShowBlocComponent},
  {path:'bloc/:id',component:EditBlocComponent},
  {path:'add',component:AddBlocComponent},


 // { path: '', redirectTo: '/home', pathMatch: 'full' },

  {path : 'ajouterUniversite', component : AjouterUniversiteComponent},
  {path : 'ajouterUniversite/:id', component : AjouterUniversiteComponent},
  {path : 'detailsUniversites' , component : DetailsUniversiteComponent},
  {path : 'universites' , component : UniversitesComponent},
  { path : 'showUniversites' , component : ListeUniversitesComponent},

  { path: 'gestionreservation', component: ReservationComponent },
  { path: 'ajouterreservation', component: AddReservationComponent },
/*   { path: 'reporting', component: ReportRoomComponent },
  { path: 'listreport', component: ReportListComponent },
  { path: 'updatereport/:id', component: UpdateReportsComponent },  */

  {
    path: 'reporting',
    loadChildren: () => import('./reservations/reporting/reporting.module').then(m => m.ReportingModule)
  },



  {path : 'ajouterUniversite', component : AjouterUniversiteComponent},
  {path : 'showUniversites' , component : ListeUniversitesComponent},
  {path : 'ajouterUniversite/:id', component : AjouterUniversiteComponent},
  {path : 'detailsUniversites' , component : DetailsUniversiteComponent},
  { path:'detailsChambre', component:DetailsChambreComponent },



  // {
  //   path : 'showUniversites' , component : ListeUniversitesComponent , children : [
  //     {path : 'ajouterUniversite', component : AjouterUniversiteComponent},
  //     {path : 'ajouterUniversite/:id', component : AjouterUniversiteComponent},
  //     {path : 'detailsUniversites' , component : DetailsUniversiteComponent},
  //     {path : 'universites' , component : UniversitesComponent}
  //   ]
  // }

  {path:'bloc', component:ShowBlocComponent},
  {path:'bloc/:id',component:EditBlocComponent},
  {path:'add',component:AddBlocComponent},
  {path:'home',component:HomeComponent,canActivate: [authGuard]},

  {path:'foyer/home-foyer',component:HomeFoyerComponent,canActivate: [authGuard]},
  { path:'foyer/editFoyer/:id', component:EditFoyerComponent,canActivate: [authGuard] },
  { path:'foyer/add-foyer', component:AddFoyerComponent,canActivate: [authGuard] },



  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
