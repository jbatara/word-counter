$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();

  });
  $("#clear").click(function() {
    $("#input").trigger("reset");
    
  });
});
