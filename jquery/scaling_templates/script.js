let nextId = 1;
let deviceCards = [];

function instantiateTemplate() {
  // Browsersupport-Check, indem die Existenz des content Attributs
  // des template Elements geprüft wird.
  if ('content' in document.createElement('template')) {

    // Tabelle mit dem existierenden HTML tbody und der Zeile (row) aus dem template Element instantiieren
    let template = document.querySelector('#device_card_template');

    // clone the template into a concrete device card
    let clone = template.content.cloneNode(true);

    // create a device card instance to manage the template
    let deviceCard = new DeviceCard(nextId, clone);
    deviceCard.insert();

    // add the device card instance to the array of device cards
    deviceCards.push(deviceCard);

    nextId++;

  } else {
    // Wenn das HTML template element nicht unterstützt wird
    // muss die Tabelle auf anderem Weg erzeugt werden
    alert('Your Browser does not support HTML templates!');
  }
}

function executeActionOnAllTemplates() {
  deviceCards.map(function(deviceCard) {
    deviceCard.executeAction();
    return deviceCard;
  });
}

function alignAllTemplates() {

  const elementsPerRow = 10;
  const left = 10;
  const top = 40;
  const padding = 10;

  const rowHeight = 100;
  const elementWidth = 200;

  let x = left;
  let y = top;

  let rowIndex = 0;
  deviceCards.map(function(deviceCard) {

    deviceCard.position(x, y);

    rowIndex++;

    if (rowIndex === elementsPerRow) {
      rowIndex = 0;
      y += rowHeight + padding;
      x = left;
    } else {
     x += elementWidth + padding;
    }


    return deviceCard;
  });
}

function setup() {
  console.log('setup');

  for (i = 0; i < 520; i++) {
    instantiateTemplate();
  }
  alignAllTemplates();
}


