function addition_Function() {
    var addition = 10 + 7;
    document.getElementById("math").innerHTML = "7 + 7 = " + addition;
}// function to add the numbers above.

function subtract_Function() {
    var subtract = 10 - 7;
    document.getElementById("mathb").innerHTML = "10 - 7 = " + subtract;
}// function to subtract the numbers above

function multi_Function() {
    var multi = 10 * 7;
    document.getElementById("mathc").innerHTML = "10 * 7 = " + multi;
}// function to multiply the numbers above

function div_Function() {
    var div = 10 / 7;
    document.getElementById("mathd").innerHTML = "10 / 7 = " + div;
}// function to divide the numbers above

function all_Function() {
    var all = (10 + 7) * 5 / 4 - 6;
    document.getElementById("mathe").innerHTML = "10 plus 7 multiplied by 5, divided by 4 and then subtracted by 6 equals " + all;
}// function to solve the multiple operations above

function modulus_Operator() {
    var mod = 38 % 6;
    document.getElementById("mathf").innerHTML = "When you divide 38 by 6 you have a remainder of : "  + mod;
}// function to solve for the remainder of the percentage above

function negation_Operator() {
    var x = 6;
    document.getElementById("mathg").innerHTML = -x;
} // function to subtract from the variable of x

var X = 5;
X++;//adding 1 to the variable of X
document.write(X);

var X = 5.25;
X--;//subtracting 1 to the variable of X
document.write(X);

window.alert(Math.random()); //pop up box with a random number between 0 - 1

window.alert(Math.random()  * 100); //pop up box with a random number between 0 - 100

document.getElementById("pi").innerHTML = Math.PI; //solves for PI 3.14 etc

