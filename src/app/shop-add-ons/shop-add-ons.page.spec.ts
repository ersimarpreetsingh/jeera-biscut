import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopAddOnsPage } from './shop-add-ons.page';

describe('ShopAddOnsPage', () => {
  let component: ShopAddOnsPage;
  let fixture: ComponentFixture<ShopAddOnsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopAddOnsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopAddOnsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
