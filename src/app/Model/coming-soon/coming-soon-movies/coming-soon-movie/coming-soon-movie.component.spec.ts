import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSoonMovieComponent } from './coming-soon-movie.component';

describe('ComingSoonMovieComponent', () => {
  let component: ComingSoonMovieComponent;
  let fixture: ComponentFixture<ComingSoonMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComingSoonMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComingSoonMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
