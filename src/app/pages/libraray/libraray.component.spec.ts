import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarayComponent } from './libraray.component';

describe('LibrarayComponent', () => {
  let component: LibrarayComponent;
  let fixture: ComponentFixture<LibrarayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
