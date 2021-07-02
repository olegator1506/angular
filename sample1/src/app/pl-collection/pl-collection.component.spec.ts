import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlCollectionComponent } from './pl-collection.component';

describe('PlCollectionComponent', () => {
  let component: PlCollectionComponent;
  let fixture: ComponentFixture<PlCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
