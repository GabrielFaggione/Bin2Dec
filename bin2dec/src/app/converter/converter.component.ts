import {Component} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {

  formGroup : any;
  binaryValue: string;
  decimalValue: any;

  constructor() {
    this.formGroup = new FormGroup({
      binaryValue: new FormControl("", Validators.compose([Validators.required, Validators.pattern("^[01]+$")]))
    });
    this.binaryValue = "";
    this.decimalValue = 0;
  }

  calculateDecimalValue(){
    console.log("x");
    if (this.formGroup.status == "INVALID"){
      this.decimalValue = 0;
      return;
    }

    let reverseBinaryValue = this.binaryValue.split("").reverse().join("");
    let total = 0;

    for (let i = 0; i < this.binaryValue.length; i++){
      total += Number(reverseBinaryValue[i]) * (2 ** i); 
    }

    this.decimalValue = total;
  }

}
