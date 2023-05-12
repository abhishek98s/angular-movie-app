import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsHeroComponent } from './news-hero.component';

describe('NewsHeroComponent', () => {
  let component: NewsHeroComponent;
  let fixture: ComponentFixture<NewsHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
