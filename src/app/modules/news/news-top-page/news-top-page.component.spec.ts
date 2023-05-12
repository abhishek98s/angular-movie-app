import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTopPageComponent } from './news-top-page.component';

describe('NewsTopPageComponent', () => {
  let component: NewsTopPageComponent;
  let fixture: ComponentFixture<NewsTopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsTopPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsTopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
