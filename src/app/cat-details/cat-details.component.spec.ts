import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { CatDetailsComponent } from './cat-details.component';


xdescribe('CatDetailsComponent', () => {
  let component: CatDetailsComponent;
  let fixture: ComponentFixture<CatDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatDetailsComponent],
      imports: [HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(CatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display breadcrumbs', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.breadcrumbs'))?.toBeTruthy();
    expect(compiled.querySelector('.breadcrumbs')?.firstChild?.firstChild?.textContent).toContain('Home');
  });
  
});
