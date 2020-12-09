// The following line makes sure your styles are included in the project. Don't remove this.
//import "../styles/main.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

$(".close").click(function () {
  $(".modal").hide();
});

let modalTimeout = window.setTimeout(function add() {
  $(".modal").css("display", "");
  $(".modal").css("display", "block");
}, 60000);

const executionModal = Promise.resolve();
executionModal.then(modalTimeout);

const ifReject = Promise.reject();

ifReject.catch((error) =>
  console.log("Oup!!!!!you make an Error some where ", error)
);
