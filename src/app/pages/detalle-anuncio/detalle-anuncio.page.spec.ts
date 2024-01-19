import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleAnuncioPage } from './detalle-anuncio.page';

describe('DetalleAnuncioPage', () => {
  let component: DetalleAnuncioPage;
  let fixture: ComponentFixture<DetalleAnuncioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleAnuncioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
