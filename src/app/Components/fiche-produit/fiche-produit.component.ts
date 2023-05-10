import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { ProduitService } from '../../services/produit.service';
import { Produit } from 'src/app/models/produit.model';


@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.css'],
})
export class FicheProduitComponent {

  titleFicheProduit = '';
  produit!: Produit;
  nutriScorePhrase: string = "";
  novaScorePhrase: string = "";
  ecoScorePhrase: string = "";
  bg_color_nutri!: string;
  bg_color_nova!: string;
  bg_color_ecoscore!: string;

  constructor(private produitService: ProduitService, private route: ActivatedRoute,
    private title: Title, private router: Router) {

  }

  ngOnInit() {
    const produitId = this.route.snapshot.params['id'];
    console.log(produitId);

    this.produitService.getProduitById(produitId).subscribe({
      next: (data: any) => {
        console.log(data);
        if (data.status_verbose === 'product found') {

          const dataP = data.product;

          this.produit = new Produit(
            dataP._id,
            dataP.image_url,
            dataP.product_name,
            dataP.code,
            dataP.quantity,
            dataP.packaging,
            dataP.brands,
            dataP.categories,
            dataP.labels,
            dataP.origins_from_origins_field,
            dataP.manufacturing_places,
            dataP.emb_codes,
            dataP.link,
            dataP.stores,
            dataP.countries,
            dataP.nutriscore_grade,
            dataP.nova_group,
            dataP.ecoscore_grade
          );

          if (this.produit.nutriscore) {
            switch (this.produit.nutriscore) {
              case "a":
                this.nutriScorePhrase = "Très bonne qualité nutritionnelle";
                break;
              case "b":
                this.nutriScorePhrase = "Bonne qualité nutritionnelle";
                break;
              case "c":
                this.nutriScorePhrase = "Qualité nutrionnelle moyenne";
                break;
              case "d":
                this.nutriScorePhrase = "Mauvaise qualité nutritionnelle";
                break;
              case "e":
                this.nutriScorePhrase = "Mauvaise qualité nutritionnelle";
                break;
              default:
                this.ecoScorePhrase = "Données manquantes pour calculer le nutriscore";
            }
          }

          if (this.produit.nova) {
            switch (this.produit.nova) {
              case 1:
                this.novaScorePhrase = "Aliments non transformés ou transformés minimalement";
                break;
              case 2:
                this.novaScorePhrase = "Ingrédients culinaires transformés";
                break;
              case 3:
                this.novaScorePhrase = "Aliments transformés";
                break;
              case 4:
                this.novaScorePhrase = "Produits alimentaires et boissons ultra-transformés";
                break;
              default:
                this.ecoScorePhrase = "Degré de transformation des aliments inconnu";

            }
          }

          if (this.produit.ecoscore) {
            switch (this.produit.ecoscore) {
              case "a":
                this.ecoScorePhrase = "Très faible impact environnemental";
                break;
              case "b":
                this.ecoScorePhrase = "Faible impact environnemental";
                break;
              case "c":
                this.ecoScorePhrase = "Impact modéré sur l'environnement";
                break;
              case "d":
                this.ecoScorePhrase = "Impact environnemental élevé";
                break;
              case "e":
                this.ecoScorePhrase = "Impact environnemental très élevé";
                break;
              default:
                this.ecoScorePhrase = "Impact environnemental inconnu";
            }
          }
          this.titleFicheProduit = this.produit.product_name;
          this.title.setTitle(this.titleFicheProduit);
        } else {
          alert('Aucune description à afficher')
          this.router.navigateByUrl('');
        }
      },
      error: (error) => {
        console.error(error.error.status_verbose);
        alert('Aucune description à afficher')
        this.router.navigateByUrl('');
      }
    });
  }

  ngOnDestroy() {
    // this.SubscriptionProduit.unsubscribe() // l'Observable émet la réponse et complète immédiatement ;
  }

  showProduit() {
    console.log(this.produit, 'test');
  }
}
