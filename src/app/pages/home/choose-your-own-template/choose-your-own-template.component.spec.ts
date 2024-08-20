import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseYourOwnTemplateComponent } from './choose-your-own-template.component';

describe('ChooseYourOwnTemplateComponent', () => {
  let component: ChooseYourOwnTemplateComponent;
  let fixture: ComponentFixture<ChooseYourOwnTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooseYourOwnTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseYourOwnTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
