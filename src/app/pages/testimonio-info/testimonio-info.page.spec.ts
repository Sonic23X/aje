import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestimonioInfoPage } from './testimonio-info.page';

describe('TestimonioInfoPage', () => {
  let component: TestimonioInfoPage;
  let fixture: ComponentFixture<TestimonioInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonioInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestimonioInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
