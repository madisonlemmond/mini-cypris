import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksSearchComponent } from './works-search.component';

describe('WorksSearchComponent', () => {
  let component: WorksSearchComponent;
  let fixture: ComponentFixture<WorksSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorksSearchComponent]
    });
    fixture = TestBed.createComponent(WorksSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
