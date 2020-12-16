import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCourierCompaniesComponent } from './all-courier-companies.component';

describe('AllCourierCompaniesComponent', () => {
  let component: AllCourierCompaniesComponent;
  let fixture: ComponentFixture<AllCourierCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCourierCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCourierCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
