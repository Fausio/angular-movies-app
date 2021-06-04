import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtorIndexComponent } from './ator-index.component';

describe('AtorIndexComponent', () => {
  let component: AtorIndexComponent;
  let fixture: ComponentFixture<AtorIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtorIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
