import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeelyMovieComponent } from './weeely-movie.component';

describe('WeeelyMovieComponent', () => {
  let component: WeeelyMovieComponent;
  let fixture: ComponentFixture<WeeelyMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeelyMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeelyMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
