import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaqueriasComponent } from './taquerias.component';

describe('TaqueriasComponent', () => {
  let component: TaqueriasComponent;
  let fixture: ComponentFixture<TaqueriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaqueriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaqueriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
