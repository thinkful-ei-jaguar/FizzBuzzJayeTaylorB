'use strict';

function fizzBuzzGen(num) {
  if(num % 5 === 0 && num % 3 === 0) return 'fizzbuzz';
  if(num % 5 === 0) return 'buzz';
  if(num % 3 === 0) return 'fizz';
  return num;
}

function addResultToPage(arr) {
  let html;
  
  for(let i = 0; i < arr.length; i++) {

    if(typeof arr[i] === 'string') 
      html = `<div class="fizz-buzz-item ${arr[i]}"><span> ${arr[i]} </span></div>`;
    
    else  
      html = `<div class="fizz-buzz-item"><span> ${arr[i]} </span></div>`;

    $('.js-results').append(html);

  }
}

function fizzBuzzArr() {
  $('#number-chooser').submit(event => {
    event.preventDefault();
    let inputNum = $('#number-choice').val();
    $('#number-choice').val('');
    let resultArr = [];
    for(let i = 1; i <= inputNum; i++){
      resultArr.push(fizzBuzzGen(i));
    }
    addResultToPage(resultArr);
    console.log(inputNum);
    console.log(resultArr);
  });
}

$(fizzBuzzArr);


