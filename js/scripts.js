$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var userParagraph = $("#paragraph").val();
    var paragraphArray = userParagraph.split(" ");
    var noPunctuation = paragraphArray.map(function(word) {
      return word.replace(/[^a-zA-Z']/g, "");
    });
    var noEmptyWords = [];
    noPunctuation.forEach(function(word) {
      if (word) {
        noEmptyWords.push(word);
      }
    });
    var wordTally = {};
    noEmptyWords.forEach(function(word) {
      if (Object.keys(wordTally).includes(word)) {
        wordTally[word] += 1;
      } else {
        wordTally[word] = 1;
      }
    });
    Object.keys(wordTally).forEach(function(key) {
      $("#output").append("<p>" + key + ": " + wordTally[key] +"</p>");
    });
    $("#output").show();

  });
  $("#clear").click(function() {
    $("#input").trigger("reset");
    $("#output").hide();
  });
});
