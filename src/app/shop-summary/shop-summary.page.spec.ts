import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopSummaryPage } from './shop-summary.page';

describe('ShopSummaryPage', () => {
  let component: ShopSummaryPage;
  let fixture: ComponentFixture<ShopSummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSummaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
