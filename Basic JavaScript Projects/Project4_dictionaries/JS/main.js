function myDictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Color;
    document.getElementById("Dictionary").innerHTML = Animal.Color;
}//dictionary where kvp that is being referenced has been deleted otherwise function would return "Black"

document.write(typeof "Word");

document.write (typeof 3);