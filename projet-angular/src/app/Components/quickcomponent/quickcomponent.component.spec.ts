import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickcomponentComponent } from './quickcomponent.component';

describe('QuickcomponentComponent', () => {
  let component: QuickcomponentComponent;
  let fixture: ComponentFixture<QuickcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
