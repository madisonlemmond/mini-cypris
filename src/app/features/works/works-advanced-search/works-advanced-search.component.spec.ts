import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksAdvancedSearchComponent } from './works-advanced-search.component';

describe('WorksAdvancedSearchComponent', () => {
  let component: WorksAdvancedSearchComponent;
  let fixture: ComponentFixture<WorksAdvancedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksAdvancedSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorksAdvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
