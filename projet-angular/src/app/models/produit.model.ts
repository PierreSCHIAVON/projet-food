export class Produit {

   constructor(
      public id: number | string = "",
      public image_url: string = "",
      public product_name: string = "",
      public code: number = 0,
      public quantity: string = "",
      public packaging: string = "",
      public brands: string = "",
      public categories: string = "",
      public labels: string = "",
      public origins_from_origins_field: string = "",
      public manufacturing_places: string = "",
      public emb_codes: string = "",
      public link: string = "",
      public stores: string = "",
      public countries: string = "",
      public nutriscore: string = "",
      public nova: string | number = 0,
      public ecoscore: string = ""
   ) { }
}