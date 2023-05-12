import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTopPageComponent } from './contact-top-page.component';

describe('ContactTopPageComponent', () => {
  let component: ContactTopPageComponent;
  let fixture: ComponentFixture<ContactTopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactTopPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactTopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
