import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContenidosPage } from './contenidos.page';

describe('ContenidosPage', () => {
  let component: ContenidosPage;
  let fixture: ComponentFixture<ContenidosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContenidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
