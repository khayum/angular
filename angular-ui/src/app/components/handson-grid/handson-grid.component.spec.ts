import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandsonGridComponent } from './handson-grid.component';

describe('HandsonGridComponent', () => {
  let component: HandsonGridComponent;
  let fixture: ComponentFixture<HandsonGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandsonGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandsonGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
