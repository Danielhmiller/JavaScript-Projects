function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."
}//function to determine if some meets the required height for a ride. 

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}//function using keywords with a select available keywords to put together

function Game(Title, Genre) {
    this.Game_Title = Title;
    this.Game_Genre = Genre;
}
// Creates a new variable of Game
var Skyrim = new Game("Skyrim", "RPG");
// Gives a  Game instance
function funct() {
    document.getElementById("New_and_This").innerHTML = Skyrim.Game_Title + 
    " is a open world game with " + Skyrim.Game_Genre + " elements and is known for its modding community.";
}// my version of the keyword function about Skyrim

function countFunct() {
    document.getElementById("counting").innerHTML = countfunctb();
    function countfunctb() {
        var Beginning = 58;
        function Plus_ten() {Beginning += 10;}
        Plus_ten();
        return Beginning;
    }
}// function to add 10 to 58