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

var nextId = 1;

function instantiateTemplate() {
  // Browsersupport-Check, indem die Existenz des content Attributs
  // des template Elements geprüft wird.
  if ('content' in document.createElement('template')) {

    // Tabelle mit dem existierenden HTML tbody und der Zeile (row) aus dem template Element instantiieren
    let t = document.querySelector('#device_card_template');
    console.log(t);

    let clone = t.content.cloneNode(true);

    let scaleable_wrapper_x = clone.querySelector('#scaleable-wrapper-x');
    console.log('scaleable-wrapper-x ' + scaleable_wrapper_x);
    scaleable_wrapper_x.id = 'scaleable-wrapper-' + nextId;

    let very_specific_design_x = clone.querySelector('#very-specific-design-x');
    console.log('very-specific-design-x ' + very_specific_design_x);
    very_specific_design_x.id = 'very-specific-design-' + nextId;

    document.body.appendChild(clone);

    var $el = $("#very-specific-design-" + nextId);
    var elHeight = $el.outerHeight();
    var elWidth = $el.outerWidth();

    var $wrapper = $("#scaleable-wrapper-" + nextId);

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

      nextId++;

  } else {
    // Wenn das HTML template element nicht unterstützt wird
    // muss die Tabelle auf anderem Weg erzeugt werden
    alert('Your Browser does not support HTML templates!');
  }
}
