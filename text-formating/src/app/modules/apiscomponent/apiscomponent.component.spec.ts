import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiscomponentComponent } from './apiscomponent.component';

describe('ApiscomponentComponent', () => {
  let component: ApiscomponentComponent;
  let fixture: ComponentFixture<ApiscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiscomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
