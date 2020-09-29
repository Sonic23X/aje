import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContenidoInfoPage } from './contenido-info.page';

describe('ContenidoInfoPage', () => {
  let component: ContenidoInfoPage;
  let fixture: ComponentFixture<ContenidoInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContenidoInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
