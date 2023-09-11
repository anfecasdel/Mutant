import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutantDetectorComponent } from './mutant-detector.component';

describe('MutantDetectorComponent', () => {
  let component: MutantDetectorComponent;
  let fixture: ComponentFixture<MutantDetectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MutantDetectorComponent]
    });
    fixture = TestBed.createComponent(MutantDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
