import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtorEditComponent } from './ator-edit.component';

describe('AtorEditComponent', () => {
  let component: AtorEditComponent;
  let fixture: ComponentFixture<AtorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtorEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
