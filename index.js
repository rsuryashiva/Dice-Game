var randomNumber1=Math.floor(Math.random()*6)+1;
var text1="images/dice"+randomNumber1+".png";
document.querySelector("img.img1").setAttribute("src",text1);
var randomNumber2=Math.floor(Math.random()*6)+1;
var text2="images/dice"+randomNumber2+".png";
document.querySelector("img.img2").setAttribute("src",text2);

if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="DRAW";
}
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}