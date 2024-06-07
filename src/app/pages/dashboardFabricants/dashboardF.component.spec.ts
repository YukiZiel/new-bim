import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFComponent } from './dashboardF.component';

describe('DashboardFComponent', () => {
  let component: DashboardFComponent;
  let fixture: ComponentFixture<DashboardFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardFComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
