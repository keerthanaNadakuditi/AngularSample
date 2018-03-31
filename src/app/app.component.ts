import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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


  constructor(private http: HttpClient) { 

  }



  ngOnInit() { 
    this.http.get('http://localhost:3000/getData')
      .subscribe(data => {
        let result: any = data;
        this.inputNumber1 = result.input1;
        this.inputNumber2 = result.input2;
      });
  }

  calculate() {
    alert(Number(this.inputNumber1) + Number(this.inputNumber2));

    this.http.post('http://localhost:3000/saveData', { "input1": this.inputNumber1, "input2": this.inputNumber2 })
      .subscribe(data => { 
        console.log(data);
      });


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
    if (this.inputNumber1 < 0 || this.inputNumber1 == undefined || this.inputNumber2 < 0 || this.inputNumber2 == undefined)
      return true;
    else
      return false;
  }
}
