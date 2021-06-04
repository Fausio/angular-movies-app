import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovietheaterIndexComponent } from './movietheater-index.component';

describe('MovietheaterIndexComponent', () => {
  let component: MovietheaterIndexComponent;
  let fixture: ComponentFixture<MovietheaterIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovietheaterIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovietheaterIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
