import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopSubMenuPage } from './shop-sub-menu.page';

describe('ShopSubMenuPage', () => {
  let component: ShopSubMenuPage;
  let fixture: ComponentFixture<ShopSubMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSubMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopSubMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
