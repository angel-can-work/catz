import { Component, OnInit } from '@angular/core';
import { CatsService } from '../cats.service';

@Component({
  selector: 'app-cat-breeds',
  templateUrl: './cat-breeds.component.html',
  styleUrls: ['./cat-breeds.component.scss']
})
export class CatBreedsComponent implements OnInit {
  private catBreeds: any[] = [];

  searchTerm: string = '';
  displayBreeds: any[] = [];
  catBreedsLoaded: boolean = false;
  filters = [
    {
      name: 'hypoallergenic', isSelected: true
    },
    {
      name: 'rare', isSelected: true
    },
    {
      name: 'hairless', isSelected: true
    }
  ];

  constructor(private catService: CatsService) { }

  ngOnInit(): void {
    this.getCatBreeds();
  }

  getCatBreeds(filterBreeds?: boolean) {
    this.catBreedsLoaded = false;
    this.catService.getCatBreeds().subscribe(
      data => {
        this.catBreeds = data;
        this.displayBreeds = data;
        if (filterBreeds) this.filterBreeds();
        this.catBreedsLoaded = true;
      });
  }

  filterBreeds() {
    this.displayBreeds = this.catBreeds;
    const selectedFilters = this.filters.filter(filter => !filter.isSelected);
    // change filter to only show ones from selected
    selectedFilters.forEach(filter => this.displayBreeds = this.displayBreeds.filter(breed => breed[filter.name] === 0));
  }
}
