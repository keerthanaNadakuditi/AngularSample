import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloooo ';
  inputNumber1: number;
  inputNumber2: number;


  @ViewChild('el1') el1: ElementRef;
  @ViewChild('el2') el2: ElementRef;

  submit() {
    alert(Number(this.inputNumber1) + Number(this.inputNumber2));
  }

  checkInput1() {
    if (+this.el1.nativeElement.value < 0) {
      this.el1.nativeElement.className = 'error';
    }
    else {
      this.el1.nativeElement.className = '';
    }
  }

  checkInput2() {
    if (+this.el2.nativeElement.value < 0) {
      this.el2.nativeElement.className = 'error';
    }
    else {
      this.el2.nativeElement.className = '';
    }
  }

  disable() {
    if (this.inputNumber1 < 0 || !this.inputNumber1 || this.inputNumber2 < 0 || !this.inputNumber2)
      return true;
    else
      return false;
  }
}
