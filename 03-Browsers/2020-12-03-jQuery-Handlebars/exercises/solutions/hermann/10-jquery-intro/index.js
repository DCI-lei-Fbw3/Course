// Work on your tasks here

$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    $(".modal").css("display", "");
    $(".modal").css("display", "block");
  });

  $(".modal-close").click(function () {
    $(".modal").hide();
  });

  let isRoteted = false;

  $(".image").click(function () {
    if (isRoteted) {
      $(this).css("transform", "rotate(0deg)");
      isRoteted = false;
    } else {
      $(this).css("transform", "rotate(20deg)");
      isRoteted = true;
    }
  });
  let textRandom = [
    "Great for cold day",
    "This tee is very cool",
    "Soothing an tasty",
    "Very delicious",
  ];
  let random;
  $(".one").mouseover(function () {
    random = Math.floor(Math.random() * textRandom.length);
    $(this).text(textRandom[random]);
  });
  $(".two").mouseover(function () {
    random = Math.floor(Math.random() * textRandom.length);
    $(this).text(textRandom[random]);
  });
  $(".three").mouseover(function () {
    random = Math.floor(Math.random() * textRandom.length);
    $(this).text(textRandom[random]);
  });
});
