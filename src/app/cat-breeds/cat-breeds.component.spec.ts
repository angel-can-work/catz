import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CatBreedsComponent } from './cat-breeds.component';


xdescribe('CatBreedsComponent', () => {
  let component: CatBreedsComponent;
  let fixture: ComponentFixture<CatBreedsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatBreedsComponent],
      imports: [HttpClientModule]
    })
   
    fixture = TestBed.createComponent(CatBreedsComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
