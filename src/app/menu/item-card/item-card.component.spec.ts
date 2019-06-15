import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCadrComponent } from './item-card.component';

describe('ItemCadrComponent', () => {
  let component: ItemCadrComponent;
  let fixture: ComponentFixture<ItemCadrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemCadrComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCadrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
