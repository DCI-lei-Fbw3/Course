// Work on your tasks here

$(document).ready(function () {
  $(".submit").click(function () {
    $(".modal").show();

    $("div.modal").click(function () {
      $(this).hide();
    });
  });
});

$("img.teapot").click(function (){
    $(this).toggleClass("teapot-rotate");
});

let randomPhrases = [
    "The tea will do you good.",
    "Would you like to have a nice cuppa?",
    "Put you kettle on, go make some tea.",
    "Keep calm and make a cuppa.", 
    "Great for a cold night.",
    "Warm and soothing.",
    "It is time for some tea!"
    ];
    
let phraseLocation = $("section.selection__option .tea-desc");

function toSelectPhrase(newArr) {
    let outcome = newArr[Math.floor(Math.random()*newArr.length)];
    return outcome;
    }

phraseLocation.mouseenter(function(){ 
    $(this).text(toSelectPhrase(randomPhrases));
});