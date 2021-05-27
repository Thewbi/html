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