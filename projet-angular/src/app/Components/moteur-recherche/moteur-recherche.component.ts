import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-moteur-recherche',
  templateUrl: './moteur-recherche.component.html',
  styleUrls: ['./moteur-recherche.component.css']
})
export class MoteurRechercheComponent implements OnInit {

  products : any[] | undefined;
  inputRecherche: string | null = null;

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produitService.currentProduct.subscribe(product => {
      this.inputRecherche = product;
      if (this.inputRecherche !== null) {
        this.produitService.getProduitByName(this.inputRecherche).subscribe((data: any) => {
        this.products = data.products;
        console.log(this.products);
        });
      }
    });
  }

}
