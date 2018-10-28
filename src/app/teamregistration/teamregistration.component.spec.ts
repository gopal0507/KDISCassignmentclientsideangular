import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamregistrationComponent } from './teamregistration.component';

describe('TeamregistrationComponent', () => {
  let component: TeamregistrationComponent;
  let fixture: ComponentFixture<TeamregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
