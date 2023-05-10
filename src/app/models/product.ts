export interface Product {
    code: string;
    product: {
      image_ingredients_url:any;
      nova_group:number;
      ingredients_text:string;
      product_name:string;
      nutriscore_grade:string;

      nutriments:{
        fat:number;
        sugars:number;
        salt:number;
        "saturated-fat":number;
        energy_100g: number;
        energy_value: number;
        'energy-kj_serving': number;
        'energy-kcal': number;
        'energy-kcal_unit': string;
        energy_serving: number;    
        energy_unit: string;
        fat_100g: number;
        fat_serving: number;
        fat_unit: string;
        "saturated-fat_100g": number;
        "saturated-fat_serving": number;
        "saturated-fat_unit": string;       
        carbohydrates_100g: number;
        carbohydrates_serving: number;
        carbohydrates_unit: string;
        sugars_100g: number;
        sugars_serving: number;
        sugars_unit: string;
        fiber_100g: number;
        fiber_serving: number;
        fiber_unit: string;
        proteins_100g: number;
        proteins_serving: number;
        proteins_unit: string;
        salt_100g: number;
        salt_serving: number;
        salt_unit: string;
        "fruits-vegetables-nuts-estimate-from-ingredients_100g": number;
        "fruits-vegetables-nuts-estimate-from-ingredients_serving": number;
      }
      image_nutrition_url:any;
      nutrition_data_per: string;
      nutrition_data_prepared_per: string;
      generic_name_fr: string;
      selected_images:{
        nutrition:{
        display:{
fr:any;
        }
        }
      ingredients: {
        display:{
          fr:any;
        }
     
      }
    }
    
   }
  }
  export interface ShowList {
    [key: string]: boolean;
  }
  