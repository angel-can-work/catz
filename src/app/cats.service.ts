import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { combineLatestWith, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private catsUrl = 'https://api.thecatapi.com/v1/breeds/';
  private catImageUrl = 'https://cdn2.thecatapi.com/images/';

  constructor(private http: HttpClient) { }

  getCatBreeds(): Observable<any[]> {
    return this.http.get<any[]>(this.catsUrl).pipe(
      tap(data => {
        this.mapData(data);
      })
    );
  }

  getCatBreedDetails(id: string): Observable<any> {
    return this.getCatBreeds().pipe(
      combineLatestWith(this.http.get<any>(this.catsUrl + id)),
      map(([breeds, details]) => {
        const breed = breeds.find(breed => breed.id === id);
        details.privacy = breed?.privacy;
        details.image = breed?.image;
        return details;
      }
    ));
  }

  private mapData(data: any[]) {
    data.forEach((item, index) => {
      item.privacy = 'Public';
        item.image = `${this.catImageUrl}${item.reference_image_id}.jpg`;
      });
      return data;
    }

}

