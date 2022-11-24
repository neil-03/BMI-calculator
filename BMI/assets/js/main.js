function main () {
  var height = parseFloat(document.getElementById('Height').value);
  var weight = parseFloat(document.getElementById('Weight').value);

  var imc = weight / (height/100)**2;
  imc = imc.toFixed(2);

  if (imc > 0 && imc <= 15) {
    document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>Your weight is <span>very severely underweight</span>.';
  } else if (imc > 15 && imc <= 16) {
    document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>Your weight is <span>severely underweight</span>.';
  } else if (imc > 16 && imc <= 18.5) {
    document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>Your weight is <span>Underweight</span>.';
  } else if (imc > 18.5 && imc <= 25) {
    document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>Your weight is <span>Normal (healthy weight)</span>.';
  } else if (imc > 25 && imc <= 30) {
    document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>Your weight is <span>Overweight</span>.';
  } else if (imc > 30 && imc <= 35) {
    document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>Your weight is <span>Obese Class I (Moderately obese)</span>.';
  } else if (imc > 35 && imc <= 40) {
    document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>Your weight is <span>Obese Class II (Severely obese)</span>.';
  } else if (imc > 40 && imc <= 45) {
    document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>Your weight is <span>Obese Class III (Very severely obese)</span>.';
  } else if (imc > 45 && imc <= 50) {
    document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>Your weight is <span>Obese Class IV (Morbidly Obese)</span>.';
  } else if (imc > 50 && imc <= 60) {
    document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>Your weight is <span>Obese Class V (Super Obese)</span>.';
  } else if (imc > 60) {
    document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>Your weight is <span>Obese Class VI (Hyper Obese)</span>.';
  } else {
    document.getElementById('output').innerHTML = 'Please type valid numbers.';
  }
}