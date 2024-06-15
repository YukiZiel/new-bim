import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGenericsComponent } from './homeGenerics.component';

describe('DashboardComponent', () => {
  let component: HomeGenericsComponent;
  let fixture: ComponentFixture<HomeGenericsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeGenericsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeGenericsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
