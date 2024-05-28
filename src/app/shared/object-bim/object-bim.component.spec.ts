import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectBimComponent } from './object-bim.component';

describe('ObjectBimComponent', () => {
  let component: ObjectBimComponent;
  let fixture: ComponentFixture<ObjectBimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObjectBimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjectBimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
