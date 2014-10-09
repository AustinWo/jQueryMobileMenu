// Problem: doesnt look good in smaller browser width and small devices
// SolutionL: Hide the text links and swap them out with a more appropriate navigation

// Create a select and append to #menu
var $select = $('<select></select>')
$('#menu').append($select);

// Cycle over menu links
$('#menu a').each(function () {
  var $anchor = $(this);
  // Create an option
  var $option =$('<option></option>')


  // Deal with selected options class depending on current page
  if ($anchor.parent().hasClass('selected')) {
    //only conincidence that class is selected and property is selected
    $option.prop('selected', true);
  }

  // option's value is the href of the link
  $option.val($anchor.attr('href'));
  // option's text is the text of the link
    // var anchorText = $anchor.text()
    // $option.text(anchorText)
    // or shorter
  $option.text($anchor.text());
  // append option to select
  $select.append($option);
});


// Create button
var $button = $('<button>Go</button>');
$('#menu').append($button);
// Blind click to button
$button.click(function(){
  // go to select's location -> change location of the browser using window.location = something
  window.location = $select.val();
});



// ----------------------------------------
// Lessons learned:
  // New methods:
    // .each()
    // .var()
    // .parent()
    // .hasClass()
    // .prop()
