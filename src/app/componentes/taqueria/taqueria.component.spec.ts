import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaqueriaComponent } from './taqueria.component';

describe('TaqueriaComponent', () => {
  let component: TaqueriaComponent;
  let fixture: ComponentFixture<TaqueriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaqueriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaqueriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
