import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovietheaterCreateComponent } from './movietheater-create.component';

describe('MovietheaterCreateComponent', () => {
  let component: MovietheaterCreateComponent;
  let fixture: ComponentFixture<MovietheaterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovietheaterCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovietheaterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
