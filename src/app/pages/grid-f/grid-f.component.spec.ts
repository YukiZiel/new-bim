import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFComponent } from './grid-f.component';

describe('GridFComponent', () => {
  let component: GridFComponent;
  let fixture: ComponentFixture<GridFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridFComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
