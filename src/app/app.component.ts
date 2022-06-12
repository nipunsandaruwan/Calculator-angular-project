import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  
  input1 ='';
  result='';

  

  pressNumber(val:string){
    //avoid number 0 to begining
    if(val=="0"){
      if(this.input1==""){
        return;
      }

      let pressKey=this.input1[this.input1.length-1];
      if(pressKey==='/' || pressKey==='*' || pressKey==='-' || pressKey==='+'){
        return;
      }

    }

    this.input1=this.input1+val;
    console.log(this.input1)
    this.calculate();

  }
  
  pressOperator(val:string){

    //avoid press operator begining
    if(val=="/" || val=="*" || val=="-" || val=="+"){
      if(this.input1==""){
        return;
      }

      let pressOperator = this.input1[this.input1.length-1];
      if(pressOperator=='/' || pressOperator=='*' || pressOperator=='-' || pressOperator=='+'){
        return;
      }

    }

    
    this.input1=this.input1+val
  }
  
  calculate(){
    let formula:string = this.input1;
    console.log("formula is " +formula)

    let lastkey:string=formula[formula.length - 1]
    console.log("Last key is ",lastkey)

    if(lastkey==='/' || lastkey==='*' || lastkey==='-' || lastkey==='+'){
      formula=formula.substr(0,formula.length-1)
    }
    console.log("formula is " +formula)
    this.result=eval(formula)
    console.log(this.result)
    

  }

  clearButton(){
    this.input1='';
    this.result='';
    
  }

  finalAnswer(val:string){
    if(val==='=')
    this.input1=this.result;
  }


}
