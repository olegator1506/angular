import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarckListModalComponent } from './tarck-list-modal.component';

describe('TarckListModalComponent', () => {
  let component: TarckListModalComponent;
  let fixture: ComponentFixture<TarckListModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarckListModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarckListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
