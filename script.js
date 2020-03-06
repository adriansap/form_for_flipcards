$("#submit").on("click", function () {

  event.preventDefault();
  var newQuestion = {
    category: $("#category").value,
    question: $("#question").value,
    answer: $("#answer").value
  }
  // Make sure to preventDefault on a submit event.


  // Send the POST request.
  $.ajax("/api/submit", {
    type: "POST",
    data: newQuestion
  }).then(
    function () {
      console.log("created new cat");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});
