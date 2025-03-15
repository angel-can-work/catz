import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { combineLatestWith, map, tap } from 'rxjs/operators';
import { CatBreedDetails, Filter } from './cats.type';

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  private http = inject(HttpClient);

  private catsUrl = 'https://api.thecatapi.com/v1/breeds/';
  private catImageUrl = 'https://cdn2.thecatapi.com/images/';
  private filters: Filter[] = [
    {name: 'hypoallergenic', class:'hypo-tag'},
    {name: 'rare', class: 'rare-tag'},
    {name: 'hairless', class: 'hair-tag'}
  ]

  getCatBreeds(): Observable<any[]> {
    return this.http.get<any[]>(this.catsUrl).pipe(
      map((data) => {
        return this.mapBreeds(data);
      })
    );
  }

  getCatBreedDetails(id: string): Observable<any> {
    return this.http.get<any>(this.catsUrl + id).pipe(
      map((details) => {
        const catDetails = this.mapBreeds([details])[0];
        return catDetails;
      })
    );
  }

  private mapBreeds(data: any): CatBreedDetails[] {
     return data.map((cat: any) => {
      return {
        id: cat.id,
        name: cat.name,
        imageUrl: `${this.catImageUrl}${cat.reference_image_id}.jpg`,
        filters: this.mapFilters(cat),
        description: cat.description,
        temperament: cat.temperament,
        wikipedia_url: cat.wikipedia_url,
        origin: cat.origin
      };
    });
  }

  private mapFilters(cat: any) {
    return this.filters.filter((filter) => !!cat[filter.name]);

  }

}
