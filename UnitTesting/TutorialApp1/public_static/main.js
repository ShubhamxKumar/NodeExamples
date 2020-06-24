$(function () {
  let km = $("#km");
  let min = $("#min");
  let farbtn = $("#calculateFare");
  let fare = $("#fare");

  farbtn.click(function () {
    $.post("/calcfare", {
      km: km.val(),
      min: min.val(),
    }, function(data) {
        console.log(data);
        fare.append(`<h1> Fare: ${data.fare} </h1>`)
    })
  });
});
