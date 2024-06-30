/*-------------------------------- Constants --------------------------------*/

const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/

// variables of the calculator app

let number1 = 0;
let number2 = 0;
let operator ='';
let total = 0;
let totalHolder = 0;
display.textContent = 0;
let negativeAlert = false;

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener('click', (event) => {
   
    if (event.target.classList.contains('number') && total === 0) {
      // Do something with a number
      if (operator === ''){
        number1 = Number(number1+event.target.innerText);
        display.innerText = number1;
        console.log(number1);
      }
      if (operator !== '') {
        if (negativeAlert === true){
            number2 = Number(number2+event.target.innerText);
            number2 = -number2;
            display.textContent = (number1+" "+operator+" "+number2);
            return;
        }
        number2 = Number(number2+event.target.innerText);
        display.textContent = (number1+" "+operator+" "+number2);
        console.log(number2);
      }
    }

    if (event.target.innerText === 'C') {
        // reset the variables 
        reset();
      }

    if (event.target.classList.contains('operator') && number2 === 0) {

        // by putting number2 === 0 we will prevent the operator of adding multiple ones (advanced part)

      if (event.target.innerText === '*') {
        // this way update the operator everytime
        operator = event.target.innerText;
        display.innerText = (number1 +" "+operator);
      }
  
      if (event.target.innerText === '+') {
          // Do something with this operator
          operator = event.target.innerText;
          display.innerText = (number1 +" "+operator);
      } 
  
      if (event.target.innerText === '/') {
          // Do something with this operator
          operator = event.target.innerText;
          display.innerText = (number1 +" "+operator);
      }
  
      if (event.target.innerText === '-') {
          // Target this in the break
          if (operator === '-' || operator === '/' || operator === '*' || operator === '+' ){ 
            // the previous steps was to overwrite any operator and new one but this step and 
            // that's for the sake of adding negative numbers
            negativeAlert = true;
            console.log('reach');
            display.innerText = (number1 +" "+operator+" "+"-");
            return;
          }
          operator = event.target.innerText;
          display.innerText = (number1 +" "+operator);
      }

    }

    else if (event.target.classList.contains('operator') && total !== 0) {

        /* This part is extra and it's about using the total of the past equation for new one 
        we save the total as number1 for using for further calculatins and reset everything for the if 
        statments to work as I intended in the advanced part and because of that we will choose number2 
        becasue we already choose number1 as the total and this event.target will pick the operator for us 
        to use it and the first if statment in this event delegation will let us choose number2 without conflict */

        totalHolder = total;
        reset();
        number1 = totalHolder;
        display.innerText = number1;


        if (event.target.innerText === '*') {
            // Do something with this operator
            operator = event.target.innerText;
            display.innerText = (number1 +" "+operator);
          }
      
          if (event.target.innerText === '+') {
              // Do something with this operator
              operator = event.target.innerText;
              display.innerText = (number1 +" "+operator);
          } 
      
          if (event.target.innerText === '/') {
              // Do something with this operator
              operator = event.target.innerText;
              display.innerText = (number1 +" "+operator);
          }
      
          if (event.target.innerText === '-') {
              // Do something with this operator
              operator = event.target.innerText;
              display.innerText = (number1 +" "+operator);
          }
    }

    

    if (event.target.innerText === '=' && total === 0) {
        // Do something with this operator
        if (operator === '+'){
            total = add(number1,number2);
            display.innerText = `${display.innerText} = ${total}`;
            console.log(total);
        }

        if (operator === '/'){
            total = divide(number1,number2);
            display.innerText = `${display.innerText} = ${total}`;
        }

        if (operator === '-'){
            total = substract(number1,number2);
            display.innerText = `${display.innerText} = ${total}`;
        }

        if (operator === '*'){
            total = multiply(number1,number2);
            display.innerText = `${display.innerText} = ${total}`;
        }
        
      }
  });

/*-------------------------------- Functions --------------------------------*/


//function add for addtion of two numbers
const add = (num1 , num2) => {
    return (num1 + num2);
}

//function substract to substract two numbers
const substract = (num1 , num2) => {
    return (num1 - num2);
}

//function divide to divide two numbers
const divide = (num1 , num2) => {
    return (num1 / num2);
}

//function multiply to multiply two numbers
const multiply = (num1 , num2) => {
    return (num1 * num2);
} 

//I will reset the variables for advanced part and C button so I use put them in function instead of flooding the file 
const reset = () => {
    display.innerText = '';
    number1=0;
    number2=0;
    operator='';
    total=0;
    display.textContent = 0;
}