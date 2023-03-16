var X = 30;
function AddNumbers1() {
    document.write (25 + X + "<br>");
}
function AddNumbers2() {
    document.write(X + 50);
}
AddNumbers1();
AddNumbers2();//X is outside the function therefore it could be used in both AN1 and AN2(global variable)


function AddNumbers1B() {
    var B = 35;
    document.write (25 + B + "<br>");
}
function AddNumbers2B() {
    document.write(B + 50);
}
AddNumbers1B();
AddNumbers2B();//B is inside AN1 so AN2 cannot call it

function AddNumbers1c() {
    var c = 35;
    console.log(25 + c);
}
function AddNumbers2c() {
    console.log(d + 50);
}
AddNumbers1c();
AddNumbers2c();//this is the incorrect function with d instead of c in the second function

function getDate() {
    if (new Date().getHours() < 19) {
        document.getElementById("time").innerHTML = "It's 3/16/2023";
    }
    if(new Date().getMonth() < 19) {
        document.getElementById("month").innerHTML = "It's March";
    }
}// if statement function for month and date

function checkAge() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}//function that tells if you are eligible to vote if you enter your age

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time."
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}//function that will tell you the time after clicking on a button. If else statements

