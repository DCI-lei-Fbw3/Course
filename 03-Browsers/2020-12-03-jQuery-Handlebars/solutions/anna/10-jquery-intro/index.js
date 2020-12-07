// Work on your tasks here

$("input.submit").click(function (e) {
  e.stopPropagation();
  let modal = $("div.modal");
  modal.show();

  $("body").click(function (event2) {
    if ($(event2.target).is("span.modal-close")) {
      modal.hide();
    } else if (
      $(event2.target.parentNode).is(".modal-content") ||
      $(event2.target.parentNode).is(".modal")
    ) {
      modal.show();
    } else {
      modal.hide();
    }
  });
});

let teapot = $("img.teapot");
teapot.click(() => teapot.toggleClass("teapot-rotate"));

let teaDesc = $("section.selection__option .tea-desc").mouseover(function () {
  let phrases = [
    "A warm treat for a cold day",
    "Nothing warms the cockles quite like it!",
    "TEA-LICIOUS!",
    "Soothing for a sore throat",
    "Highly recommended by tea experts everywhere",
  ];

  function selectRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  $(this).text(selectRandom(phrases));
});
