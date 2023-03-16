document.write("10" + 5);//comparing a string and a number

document.write(typeof 3);//comparing the datatype

document.write(4E570);//making a number to be more than Infinity resulting in Infinity

document.write(-2E620);//making a number to be more than Infinity resulting in  negative Infinity

document.write(69 > 57);//comparing number to equal true

document.write(69 < 57);//comparing number to equal false

console.log(88 + 8);//math operation to be viewed in console.log

document.write(10 == 10);//comparing each side of the double equals sign regardless of datatype this equals true

document.write(10 == 1);//comparing each side of the double equals sign regardless of datatype this equals false

X = 15;
Y = 15;
document.write(X === Y); //comparing each side of the triple equals sign and its datatype this one is true because the datatypes are both numbers

X = 15;
Y = "15";
document.write(X === Y);//comparing each side of the triple equals sign and its datatype this one is false because the datatypes are different

X = 17;
Y = 15;
document.write(X === Y); //comparing each side of the triple equals sign and its datatype this one is false because the datatypes are both numbers but they are different

X = 15;
Y = "19";
document.write(X === Y);//comparing each side of the triple equals sign and its datatype this one is false because the datatypes are different as well as the values

document.write( 7 > 3 && 78 > 9);// AND = BOTH HAVE TO BE CORRECT = TRUE //result: true

document.write( 2 > 3 || 78 > 9);// OR = ONLY ONE HAS TO BE CORRECT = TRUE result: true

document.write( 2 > 3 && 78 > 9);// result: false one of them are less than not greater than

document.write( 2 > 3 || 8 > 9);//result: false both are less than not greater than

function not_Function() {
    document.getElementById("Not").innerHTML = !(50 > 25);
} //opposite day function would normally be true but results in false because of the not function

function notb_Function() {
    document.getElementById("Notb").innerHTML = !(20 > 25);
}//opposite day function would normally be false but results in true because of the not function