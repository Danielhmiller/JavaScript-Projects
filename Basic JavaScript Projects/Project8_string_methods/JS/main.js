function full_sentences() {
    var part_1 = "I am ";
    var part_2 = " the greatest ";
    var part_3 = "rocket league ";
    var part_4 = "player in the world.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence; 
}//puts all the sentences(strings) together once the button from the html is clicked

function slice_function() {
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27, 33);
    document.getElementById("slice").innerHTML = section;
}// pulls out "johnny of the sentence bc that is the characters that johnny is referenced"
let words = "This is rocket league!";
let result = words.toUpperCase();
document.getElementById("uppercase").innerHTML = result;// makes result uppercase


let text = "Mr. James likes to watch anime.";
let position = text.search("likes");
document.getElementById("search").innerHTML = position;// shows what character number the search likes is

function number_method() {
    var X = 279;
    document.getElementById("numbers_to_string").innerHTML = X.toString();
}//changes the number to a string and shows that on the webpage

function precision_method() {
    var X = 15641561615416.456145616461;
    document.getElementById("precision").innerHTML = X.toPrecision(15);
}//collapses the numbers down to whatever number characters is in the precision box