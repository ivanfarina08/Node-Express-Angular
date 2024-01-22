import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoFormularioComponent } from './avaliacao-formulario.component';

describe('AvaliacaoFormularioComponent', () => {
  let component: AvaliacaoFormularioComponent;
  let fixture: ComponentFixture<AvaliacaoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliacaoFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvaliacaoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
