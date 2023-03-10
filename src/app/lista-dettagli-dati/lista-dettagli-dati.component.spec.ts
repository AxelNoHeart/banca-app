import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDettagliDatiComponent } from './lista-dettagli-dati.component';

describe('ListaDettagliDatiComponent', () => {
  let component: ListaDettagliDatiComponent;
  let fixture: ComponentFixture<ListaDettagliDatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDettagliDatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDettagliDatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
