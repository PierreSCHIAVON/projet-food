import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {

  private product = new BehaviorSubject<any>({});
  currentProduct = this.product.asObservable();

  setData(product: any) {
    this.product.next(product);
  }

  constructor(private http: HttpClient) {}

  getHomeData(): Observable<any> {
    return this.http.get('https://world.openfoodfacts.org?json=true&page_size=49');
  }

  getProduitByName(produit: string): Observable<object> {
    return  this.http.get(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${produit}&search_simple=1&action=process&json=1&page_size=20`);
  }

  getProduitById(produitId: string): Observable<object> {
    return this.http.get(
      `https://world.openfoodfacts.org/api/v2/product/${produitId}`,
      { observe: 'body' }
    );
  }
}
