import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeFabricantsComponent } from './homeFabricants.component';

describe('HomeFabricantsComponent', () => {
  let component: HomeFabricantsComponent;
  let fixture: ComponentFixture<HomeFabricantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeFabricantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeFabricantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
