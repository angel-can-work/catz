import { Component, OnInit } from '@angular/core';
import { CatsService } from '../cats.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.scss']
})
export class CatDetailsComponent implements OnInit {
  catDetailsLoaded: boolean = false;
  catDetails: any = [];
  searchUrl: string = 'https://gokitty.com/kitten/listing/breed/';

  constructor(private catService: CatsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.getCatBreedDetails(id);
  }

  getCatBreedDetails(id: string) {
    this.catService.getCatBreedDetails(id).subscribe(
      data => {
        if (data?.name) {
          this.catDetails = data;
          this.catDetailsLoaded = true;
          this.searchUrl += this.catDetails.name.replace(/\s+/g, '-').toLowerCase();
        } else {
          this.router.navigateByUrl('/');
        }
      });
  }

}
