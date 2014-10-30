$(function() {
  // The document is ready.

  $("form").submit(function() {
    var text = $("textarea").val();

    var data = analyze(text);

    var newTRs = Object.keys(data).map(function(word) {
      return $("<tr><td>" + word + "</td><td>" + data[word] + "</td><td>" + data[word] + "</td></tr>");
    });

    $("tbody").html(newTRs);

    $("table").tablesorter();

    return false;
  });

  // Construct the table rows form the data elements, looping over data (forEach, for, map)
  // append them to the table
  // create a tr: $("<tr><td>WORD</td><td>COUNT</td></tr>")
  // $("tbody").append(createdTRs)

  // Try to do this with forEach on your own

});
