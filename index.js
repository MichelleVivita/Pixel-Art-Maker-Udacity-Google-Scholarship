$(function() {
  var myGrid = $("#pixel_canvas");
  var currentColor = "#000";

  $("#sizePicker").submit(function(e) {
    e.preventDefault();
    makeGrid();
  });

  $("#colorPicker").change(function() {
    currentColor = $(this).val();
  });

  myGrid.on("mousemove", "td", function(e) {
    if (e.buttons == 1) {
      $(this).css("background-color", currentColor);
    }
  });

  myGrid.on("click", "td", function(e) {
    $(this).css("background-color", currentColor);
  });

  //Start making Grid
  function makeGrid() {
    var heightOfGrid = $("#input_height").val();
    var widthOfGrid = $("#input_width").val();
    myGrid.empty();
    for (x = 0; x <= heightOfGrid - 1; x++) {
      myGrid.append("<tr>"); 
      for (y = 0; y <= widthOfGrid - 1; y++) {
        $("tr:eq(" + x + ")").append("<td></td>");
      }
      myGrid.append("</tr>");
    }
  }
});