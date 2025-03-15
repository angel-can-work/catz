import { Component, OnInit } from '@angular/core';
import { CatsService } from '../cats.service';
import { CatBreedDetails } from '../cats.model';

@Component({
  selector: 'app-cat-breeds',
  templateUrl: './cat-breeds.component.html',
  styleUrls: ['./cat-breeds.component.scss'],
})
export class CatBreedsComponent implements OnInit {
  private catBreeds: CatBreedDetails[] = [];

  searchTerm: string = '';
  displayBreeds: CatBreedDetails[] = [];
  catBreedsLoaded: boolean = false;
  filters = [
    {
      name: 'hypoallergenic',
      isSelected: false,
    },
    {
      name: 'rare',
      isSelected: false,
    },
    {
      name: 'hairless',
      isSelected: false,
    },
  ];

  constructor(private catService: CatsService) {}

  ngOnInit(): void {
    this.getCatBreeds();
  }

  getCatBreeds(filterBreeds?: boolean) {
    this.catBreedsLoaded = false;
    this.catService.getCatBreeds().subscribe((data) => {
      this.catBreeds = this.mapBreeds(data);
      this.displayBreeds = this.catBreeds;
      if (filterBreeds) this.filterBreeds();
      this.catBreedsLoaded = true;
    });
  }

  filterBreeds() {
    const selectedFilters = this.filters
      .filter((filter) => filter.isSelected)
      .map((filter) => filter.name);

    if(selectedFilters.length > 0) {
      selectedFilters.forEach((filter: string) => {
        this.displayBreeds = this.catBreeds.filter((breed: any) => breed[filter]);
      });
    } else {
      this.displayBreeds = this.catBreeds;
    }


  }

  private mapBreeds(data: any): CatBreedDetails[] {
    return data.map((cat: any) => {
      return {
        id: cat.id,
        name: cat.name,
        privacy: cat.privacy,
        imageUrl: cat.image,
        hypoallergenic: cat.hypoallergenic,
        rare: cat.rare,
        hairless: cat.hairless,
      };
    });
  }
}
