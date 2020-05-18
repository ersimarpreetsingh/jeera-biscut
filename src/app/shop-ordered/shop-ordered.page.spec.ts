import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopOrderedPage } from './shop-ordered.page';

describe('ShopOrderedPage', () => {
  let component: ShopOrderedPage;
  let fixture: ComponentFixture<ShopOrderedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopOrderedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopOrderedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
