
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
/*import {MatIconModule} from '@angular/material/icon';*/


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
/*import { HeaderComponent } from './header/header.component';*/
import { HeaderComponent } from './Components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProduitService } from './services/produit.service';
import { FicheProduitComponent } from './Components/fiche-produit/fiche-produit.component';
import { QuickcomponentComponent } from './Components/quickcomponent/quickcomponent.component';
import { SanteComponent } from './Components/sante/sante.component';
import { MoteurRechercheComponent } from './Components/moteur-recherche/moteur-recherche.component';

@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent, 
    FooterComponent,
    FicheProduitComponent,
    QuickcomponentComponent,
    SanteComponent,
    MoteurRechercheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
   /* MatIconModule,*/
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
