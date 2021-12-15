import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomrularioComponent } from './fomrulario.component';

describe('FomrularioComponent', () => {
  let component: FomrularioComponent;
  let fixture: ComponentFixture<FomrularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FomrularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FomrularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
