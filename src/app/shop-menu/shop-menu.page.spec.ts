import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopMenuPage } from './shop-menu.page';

describe('ShopMenuPage', () => {
  let component: ShopMenuPage;
  let fixture: ComponentFixture<ShopMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
