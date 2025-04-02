import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksAggregateDataComponent } from './works-aggregate-data.component';

describe('WorksAggregateDataComponent', () => {
  let component: WorksAggregateDataComponent;
  let fixture: ComponentFixture<WorksAggregateDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksAggregateDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorksAggregateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
