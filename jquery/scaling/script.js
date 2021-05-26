var $el = $("#very-specific-design-1");
var elHeight = $el.outerHeight();
var elWidth = $el.outerWidth();

var $wrapper = $("#scaleable-wrapper-1");

$wrapper.resizable({
  resize: doResize,
});
$wrapper.draggable();

function doResize(event, ui) {
  var scale = Math.min(ui.size.width / elWidth, ui.size.height / elHeight);

  $el.css({
    transform: "translate(-50%, -50%) scale(" + scale + ")",
  });
}

var starterData = {
  size: {
    width: $wrapper.width(),
    height: $wrapper.height(),
  },
};
doResize(null, starterData);

var $el2 = $("#very-specific-design-2");
var elHeight2 = $el2.outerHeight();
var elWidth2 = $el2.outerWidth();
var $wrapper2 = $("#scaleable-wrapper-2");

$wrapper2.resizable({
  resize: doResize2,
});
$wrapper2.draggable();

function doResize2(event, ui) {
  var scale2 = Math.min(ui.size.width / elWidth2, ui.size.height / elHeight2);

  $el2.css({
    transform: "translate(-50%, -50%) scale(" + scale2 + ")",
  });
}

var starterData2 = {
  size: {
    width: $wrapper2.width(),
    height: $wrapper2.height(),
  },
};
doResize2(null, starterData2);
