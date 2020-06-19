var colors = generateRandomcolors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colordisplay = document.getElementById("colordisplay");
var h1 = document.querySelector("h1")
var message = document.querySelector("#message");
colordisplay.textContent = pickedColor;


for (var i = 0 ; i<squares.length ; i++) {
   squares[i].style.backgroundColor = colors[i];


//add click listener to square 
squares[i].addEventListener("click" , function(){
var clickedcolor = this.style.backgroundColor;
//compare color is picked color 
if(clickedcolor === pickedColor){
message.textContent = "wohoo Thats right !!";
changecolors(clickedcolor);
h1.style.backgroundColor = pickedColor ;
}
else{
this.style.backgroundColor =" #232323" ;
message.textContent = "Try again";
}
});
}

function changecolors(color){
    for (var i=0 ; i < squares.length ; i++){
    squares[i].style.backgroundColor = color ;
}
}
function pickColor() {
  var random = Math.floor( Math.random() * colors.length);
  return colors[random];
}
function generateRandomcolors(num){
    //make an array 
    var arr = [];
    //add random color to array 
    for (var i= 0 ; i<num; i++){
        arr.push(randomcolors())

    }
    // return to color
    return arr;
}
function randomcolors (){
    var r =Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
