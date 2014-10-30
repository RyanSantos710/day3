function analyze(text) {
  var normalizedText = text.toLowerCase();
  var words = normalizedText.replace(/[^\w\s]/gi, '').split(" ");

  var counts = {};
  var grades = {};
    
  words.forEach(function(word) {
    counts[word] = counts[word] || 0;
    counts[word]++;
    if (counts[word] > 3){
        grades[word] = "high";
    } 
  });

  return counts;
}
