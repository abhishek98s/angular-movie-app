import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatOnFilterComponent } from './what-on-filter.component';

describe('WhatOnFilterComponent', () => {
  let component: WhatOnFilterComponent;
  let fixture: ComponentFixture<WhatOnFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatOnFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatOnFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
