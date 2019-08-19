$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var userParagraph = $("#paragraph").val();

    


    $("#output").text(userParagraph);
    $("#output").show();

  });
  $("#clear").click(function() {
    $("#input").trigger("reset");
    $("#output").hide();
  });
});
