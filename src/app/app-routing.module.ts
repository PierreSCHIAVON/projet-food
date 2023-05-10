import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FicheProduitComponent } from './Components/fiche-produit/fiche-produit.component';
import { QuickcomponentComponent } from './Components/quickcomponent/quickcomponent.component';
import { MoteurRechercheComponent } from './Components/moteur-recherche/moteur-recherche.component';

const routes: Routes = [
  { path: '', component: QuickcomponentComponent },
  { path: 'search/:name', component: MoteurRechercheComponent },
  { path: 'produit/:id', component: FicheProduitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
