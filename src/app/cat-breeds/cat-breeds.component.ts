import { Component, OnInit, inject } from '@angular/core';
import { CatsService } from '../cats.service';
import { CatBreedDetails, Filter } from '../cats.type';

@Component({
  selector: 'app-cat-breeds',
  templateUrl: './cat-breeds.component.html',
  styleUrls: ['./cat-breeds.component.scss'],
})
export class CatBreedsComponent implements OnInit {
  private catService = inject(CatsService);

  private catBreeds: CatBreedDetails[] = [];

  searchTerm: string = '';
  displayBreeds: CatBreedDetails[] = [];
  catBreedsLoaded: boolean = false;
  filters: Filter[] = [
    {
      name: 'hypoallergenic',
      isSelected: false,
      class: 'hypo-tag',
    },
    {
      name: 'rare',
      isSelected: false,
      class: 'rare-tag',
    },
    {
      name: 'hairless',
      isSelected: false,
      class: 'hair-tag',
    },
  ];

  ngOnInit(): void {
    this.getCatBreeds();
  }

  getCatBreeds(filterBreeds?: boolean) {
    this.catBreedsLoaded = false;

    this.catService.getCatBreeds().subscribe((data) => {
      this.catBreeds = data;
      this.displayBreeds = this.catBreeds;
      if (filterBreeds) this.filterBreeds();
      this.catBreedsLoaded = true;
    });
  }

  filterBreeds() {
    const selectedFilters = this.filters
      .filter((filter) => filter.isSelected)
      .map((filter) => filter.name);

    this.displayBreeds = selectedFilters.length
      ? this.catBreeds.filter((breed: any) =>
          selectedFilters.every((filter) =>
            breed.filters.some((trait: any) => trait.name === filter)
          )
        )
      : this.catBreeds;
  }
}
