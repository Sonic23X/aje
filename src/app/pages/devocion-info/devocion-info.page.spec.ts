import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DevocionInfoPage } from './devocion-info.page';

describe('DevocionInfoPage', () => {
  let component: DevocionInfoPage;
  let fixture: ComponentFixture<DevocionInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevocionInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DevocionInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
