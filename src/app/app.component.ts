import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title;
  inputNumber1: number;
  inputNumber2: number;
  result: number;

  constructor(private http: HttpClient) { 
    this.title = 'EMC Task ';
    this.inputNumber1 = 0;
    this.inputNumber2 = 0;
   }

  ngOnInit() { 
    this.getInputdata();
  }

  getInputdata = function getInput() {
    this.http.get('http://localhost:3000/getData')
      .subscribe(data => {
        let result: any = data;
        this.inputNumber1 = result.input1;
        this.inputNumber2 = result.input2;
        //this.result = Number(this.inputNumber1) * Number(this.inputNumber2);
      });;
  }

  calc = function calculate() {
    this.result = Number(this.inputNumber1) * Number(this.inputNumber2);
    this.saveInputData();
  }

  saveInputData = function saveData() {
    this.http.post('http://localhost:3000/saveData', { "input1": this.inputNumber1, "input2": this.inputNumber2 })
      .subscribe(data => { 
        console.log(data);
      });
  }

  check = function checkInput(ctrl) {
    this.inputNumber = ctrl.currentTarget.value;

    if (+ctrl.currentTarget.value < 0) {
      ctrl.currentTarget.className = 'error';
    }
    else {
      ctrl.currentTarget.className = '';
    }
  }

  buttonDisable = function disable() {
    if (this.inputNumber1 < 0 || this.inputNumber1 == undefined || this.inputNumber2 < 0 || this.inputNumber2 == undefined)
      return true;
    else
      return false;
  }
}
