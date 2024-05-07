import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sub1Page } from './sub1.page';

describe('Sub1Page', () => {
  let component: Sub1Page;
  let fixture: ComponentFixture<Sub1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Sub1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
