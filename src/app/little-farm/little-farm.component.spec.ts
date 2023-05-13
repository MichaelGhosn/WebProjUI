import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleFarmComponent } from './little-farm.component';

describe('LittleFarmComponent', () => {
  let component: LittleFarmComponent;
  let fixture: ComponentFixture<LittleFarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LittleFarmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LittleFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
