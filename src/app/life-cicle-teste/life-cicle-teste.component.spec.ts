import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCicleTesteComponent } from './life-cicle-teste.component';

describe('LifeCicleTesteComponent', () => {
  let component: LifeCicleTesteComponent;
  let fixture: ComponentFixture<LifeCicleTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCicleTesteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCicleTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
