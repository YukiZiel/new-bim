import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponentG } from './dashboardG.component';

describe('DashboardComponent', () => {
  let component: DashboardComponentG;
  let fixture: ComponentFixture<DashboardComponentG>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponentG]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardComponentG);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
