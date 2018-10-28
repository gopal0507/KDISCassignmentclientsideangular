import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredteamlistComponent } from './registeredteamlist.component';

describe('RegisteredteamlistComponent', () => {
  let component: RegisteredteamlistComponent;
  let fixture: ComponentFixture<RegisteredteamlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredteamlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredteamlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
