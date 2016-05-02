// ! ! !
// Three Bugs

var arrayAtticus = ['Atticus', '2405', '47000', 3];
var arrayJem = ['Jem', '62347', '63500', 4];
var arrayBoo = ['Boo', '11435', '54000', 3];
var arrayScout = ['Scout', '6243', '74750', 5];

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//Create variables used to write to the DOM
var newEl;
var newText;
var position;

//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for (var i = 0; i < array.length; i++) {
  array[i] = calculateSTI(array);
  newEl = document.createElement('li');
  newText = document.createTextNode(array[i]);
  newEl.appendChild(newText);
  position.appendChild(newEl);
}

function calculateSTI(array) {
  var newArray = [];

  //Made Adjustment to below statement to point to unique sub-index of array.
  newArray[0] = array[i][0];

  var employeeNumber = array[i][1];
  var baseSalary = (array[i][2]);
  var reviewScore = array[i][3];

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if (bonus > 0.13) {
    bonus = 0.13;
  }

//Rounded NewArray[2] output
  newArray[1] = Number(bonus);
  newArray[2] = Math.round(baseSalary * (1.0 + bonus));
  newArray[3] = baseSalary * bonus;
  console.log(newArray[0] + ' ' + newArray[1] + ' ' + newArray[2] + ' ' + newArray[3]);
  return newArray;
}

function getBaseSTI(reviewScore) {
  var basePercent;
  switch (reviewScore) {
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
	// Removed - 1 to ensure output is positive.
  return basePercent;
}

function getYearAdjustment(employeeNumber) {
  var yearAdjustment = 0;
  if (employeeNumber.length == 4) {
    yearAdjustment = 0.05;
  }

  return yearAdjustment;
}

function getIncomeAdjustment(salary) {
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if (salary > 65000) {
    incomeAdjustment = 0.01;
  }

  return incomeAdjustment;
}
