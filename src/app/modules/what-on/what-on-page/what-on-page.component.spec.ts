import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatOnPageComponent } from './what-on-page.component';

describe('WhatOnPageComponent', () => {
  let component: WhatOnPageComponent;
  let fixture: ComponentFixture<WhatOnPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatOnPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatOnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
