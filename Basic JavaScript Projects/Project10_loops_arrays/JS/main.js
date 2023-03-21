function Call_Loop() {
    var number = "";
    var X = 1;
    while (X < 28) {
        number += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = number;
}//function to count upwards from the X variable if that number is below 28


    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var Y;
    function for_Loop() {
        for (Y = 0; Y < Instruments.length; Y++) {
            Content += Instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
    }// for function where you show all instruments after clicking the button

    function arrayFunction() {
        var DogPicture = [];
        DogPicture[0] = "sleeping";
        DogPicture[1] = "playing";
        DogPicture[2] = "eating";
        DogPicture[3] = "barking";
        document.getElementById("array").innerHTML = "In this picture the dog is " + DogPicture[3] + ".";
    }//array where u concatenate the string with the variables based on number

    function constantFunction() {
        const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
        Musical_Instrument.color = "purple";
        Musical_Instrument.price = "$1000";
        document.getElementById("constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
    }

    var D = 10;
    D = 7;
    document.write(D);//normal, results in 7

    

    var v = 87;
    document.write(v);
    {
        let v = 33;
        document.write("<br>" + v);
    }
    document.write("<br>" + v);//33 only shows up once bc of "let" 87, 33, 87

    var t = 87;
    document.write(t);
    {
        var t = 33;
        document.write("<br>" + t);
    }
    document.write("<br>" + t);//33 shows up twice bc of "var" instead of "let" 87, 33, 33

    let car = {
        make: "Dodge ",
        model: "Viper ",
        year: "2021 ",
        color: "red ",
        description : function() {
            return "The car is a " + this.year + this.color + this.make + this.model;
        }
    };
    document.getElementById("Car_Object").innerHTML = car.description();