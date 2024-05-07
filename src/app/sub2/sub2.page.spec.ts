import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sub2Page } from './sub2.page';

describe('Sub2Page', () => {
  let component: Sub2Page;
  let fixture: ComponentFixture<Sub2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Sub2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
