$(document).ready(function(e){
  console.log('Loaded');
});
var numb1;
var numb2;
var operand;

$('.number').click(function(e) {
$('#display').text($('#display').text() + $(this).text())

});

$('.operator').click(function(e) {
  var oper = $(this).text();

  // console.log(numb1);
  // console.log(operand);
  

  if(oper !== '='){
     numb1 = $('#display').text();
     console.log(numb1);
     cleared();
   }

   else if(oper === '='){
     numb2 = $('#display').text();
     console.log(numb2);
   }


switch (oper) {
  case '-':
    cleared();
    operand = oper;
    break;
  case '+':
    cleared();
    operand = oper;
    break;
  case '/':
    cleared();
    operand = oper;
    break;
  case 'X':
    cleared();
    operand = oper;
    break;
  case '=':
    cleared();
    calculate();
    break;
  }

});

function calculate(){
    switch (operand) {
    case '+':
      $('#display').text(parseInt(numb1) + parseInt(numb2));
      break;
    case '-':
      $('#display').text(numb1 - numb2);
      break;
    case '/':
      $('#display').text(numb1 / numb2);
      break;
    case 'X':
      $('#display').text(numb1 * numb2);
      break;

  }



};





$('#clear').click(function(e) {
  $('#display').text("");
});

function cleared() {
    $('#display').text("");
}
