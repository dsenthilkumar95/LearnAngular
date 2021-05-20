import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAngularComponent } from './basic-angular.component';

describe('BasicAngularComponent', () => {
  let component: BasicAngularComponent;
  let fixture: ComponentFixture<BasicAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
