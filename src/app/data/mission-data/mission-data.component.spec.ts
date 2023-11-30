import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionDataComponent } from './mission-data.component';

describe('MissionDataComponent', () => {
  let component: MissionDataComponent;
  let fixture: ComponentFixture<MissionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MissionDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MissionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
