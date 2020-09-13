import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopofpageComponent } from './topofpage.component';

describe('TopofpageComponent', () => {
  let component: TopofpageComponent;
  let fixture: ComponentFixture<TopofpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopofpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopofpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
