import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockRequestsComponent } from './lock-requests.component';

describe('LockRequestsComponent', () => {
  let component: LockRequestsComponent;
  let fixture: ComponentFixture<LockRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LockRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LockRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
