import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovietheaterEditComponent } from './movietheater-edit.component';

describe('MovietheaterEditComponent', () => {
  let component: MovietheaterEditComponent;
  let fixture: ComponentFixture<MovietheaterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovietheaterEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovietheaterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
