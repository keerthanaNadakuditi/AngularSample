import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { isNumber } from 'util';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule
      ]
    }).compileComponents();
  }));

  it('Sample title test case', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('EMC Task ');
  }));

  it('Any value -1 or less should cause the button to be disabled', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    // fixture.detectChanges();
    // const compiled = fixture.debugElement.nativeElement;
    const app = fixture.debugElement.componentInstance;
    app.inputNumber1 = 10;
    app.inputNumber2 = 5;
    expect(app).toEqual('EMC Task ');
    //set first input to < 0
    //expect button to be disabled
    let input  = fixture.debugElement.query(By.css('input[type=file]')).nativeElement;
    input.value = {name: '0'};
    input.dispatchEvent(new Event('input'));

    // check that the event handler has been called
    spyOn(app, 'fileChange');

    expect(app.fileChange).toHaveBeenCalled();
}));
    //expect(compiled.querySelector('input').textContent).toEqual("");

  // it('Any value -1 or less should cause the button to be disabled', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const app = fixture.debugElement.componentInstance;
  //   // const compiled = fixture.debugElement.nativeElement();
  //   expect(app.nativeElement.querySelector('input').textContent).toContain(Number);
  //   // const app = fixture.debugElement.componentInstance;
  //   // expect(app.title).toEqual('EMC Task ');
  //   // console.log(temp);//.toEqual(undefined);
  // }));

  it('Value => 0 should be considered a valid input', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    //expect(app.checkInput1()).toEqual(Number);
  }));
  it('Any text values should cause the field to be disabled', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    //expect(app.checkInput1()).toEqual(false);
  }));
});
