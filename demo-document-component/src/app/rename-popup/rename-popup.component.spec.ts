import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenamePopupComponent } from './rename-popup.component';

describe('RenamePopupComponent', () => {
  let component: RenamePopupComponent;
  let fixture: ComponentFixture<RenamePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenamePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenamePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
