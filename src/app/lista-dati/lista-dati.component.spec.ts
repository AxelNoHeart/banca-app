import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDatiComponent } from './lista-dati.component';

describe('ListaDatiComponent', () => {
  let component: ListaDatiComponent;
  let fixture: ComponentFixture<ListaDatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
