import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovertorComponent } from './covertor.component';

describe('CovertorComponent', () => {
  let component: CovertorComponent;
  let fixture: ComponentFixture<CovertorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovertorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CovertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
