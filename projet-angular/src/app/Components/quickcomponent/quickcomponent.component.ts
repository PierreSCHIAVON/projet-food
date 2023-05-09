import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';


@Component({
  selector: 'app-quickcomponent',
  templateUrl: './quickcomponent.component.html',
  styleUrls: ['./quickcomponent.component.css']
})
export class QuickcomponentComponent implements OnInit{
  
     products : any[] | undefined;
     data: any;

    constructor(private produitService: ProduitService) { }
  
    
  
    ngOnInit(): void {
        this.produitService.getHomeData().subscribe(data => {
          console.log(data.products);
          this.products = data.products});
       
    }
}    
       
  
  
  


