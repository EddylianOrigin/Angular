import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalTreeComponent } from './horizontal-tree.component';

describe('HorizontalTreeComponent', () => {
  let component: HorizontalTreeComponent;
  let fixture: ComponentFixture<HorizontalTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
