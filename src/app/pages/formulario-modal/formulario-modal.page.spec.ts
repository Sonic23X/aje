import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormularioModalPage } from './formulario-modal.page';

describe('FormularioModalPage', () => {
  let component: FormularioModalPage;
  let fixture: ComponentFixture<FormularioModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
