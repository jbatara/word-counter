$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    $("#output").text("");
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
    var array = [];
    Object.keys(wordTally).forEach(function(word){
      array.push([word, wordTally[word]]);
    });
    var comparison = function(a,b){
      return a[1]-b[1];
    }
    var sortedArray = array.sort(comparison);
    sortedArray.reverse();
    sortedArray.forEach(function(array) {
      $("#output").append("<p>" + array[0] + ": " + array[1] +"</p>");
    });
    $("#output").show();
  });
  $("#clear").click(function() {
    $("#input").trigger("reset");
    $("#output").text("");
  });
});
