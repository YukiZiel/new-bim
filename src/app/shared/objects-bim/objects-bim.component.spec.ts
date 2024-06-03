import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectsBimComponent } from './objects-bim.component';

describe('ObjectsBimComponent', () => {
  let component: ObjectsBimComponent;
  let fixture: ComponentFixture<ObjectsBimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObjectsBimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjectsBimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
