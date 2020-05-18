import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopSelectionPage } from './shop-selection.page';

describe('ShopSelectionPage', () => {
  let component: ShopSelectionPage;
  let fixture: ComponentFixture<ShopSelectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSelectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
