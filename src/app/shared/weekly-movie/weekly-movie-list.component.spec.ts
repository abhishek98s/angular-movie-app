import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyMovieListComponent } from './weekly-movie-list.component';

describe('WeeklyMovieListComponent', () => {
  let component: WeeklyMovieListComponent;
  let fixture: ComponentFixture<WeeklyMovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyMovieListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
