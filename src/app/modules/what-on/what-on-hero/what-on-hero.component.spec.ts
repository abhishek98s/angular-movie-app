import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatOnHeroComponent } from './what-on-hero.component';

describe('WhatOnHeroComponent', () => {
  let component: WhatOnHeroComponent;
  let fixture: ComponentFixture<WhatOnHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatOnHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatOnHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
