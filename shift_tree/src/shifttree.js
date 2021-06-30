let currentNode = undefined;

let slidesElement = undefined;

let prevNodeElement = undefined;
let currentNodeElement = undefined;
let nextNodeElement = undefined;

function initTreeStructure(testdata) {
  slidesElement = document.querySelector('.slides');

  currentNode = testdata;

  currentNodeElement = computeDivFromNode(currentNode);
  currentNodeElement.classList.add('active');

  // store the DOM Element in the tree node model
  currentNode.domElement = currentNodeElement;

  // select the slides container element
  slidesElement.appendChild(currentNodeElement);

  // back button handler
  let btnBack = document.querySelector('.btn-back');
  btnBack.addEventListener('click', () => {

    let parentNode = currentNode.parent;
    console.log('back from ', currentNode, ' to ', parentNode);

    // if there is no parent (e.g. at the root node), do nothing
    //if (parentNode == undefined || parentNode.id == 'root') {
      if (parentNode == undefined) {
      console.log('No parent, cannot navigate!');
      return;
    }

    console.log('DOM element', parentNode.domElement);

    //slideLeft(currentNodeElement, parentNode.domElement);
    slideRight(currentNodeElement, parentNode.domElement);

    // move all pointers one level up
    currentNodeElement = parentNode.domElement;
    currentNode = currentNode.parent;
    parentNode = currentNode.parent;

  });
}

/** Slides move to the right */
function slideRight(leed, follow) {

  // toggle the active classes to display the next image
  leed.classList.toggle('active');
  leed.classList.remove('slidein');
  leed.classList.remove('slideout');

  leed.classList.remove('slidein-right');
  leed.classList.add('slideout-right');

  follow.classList.toggle('active');
  follow.classList.remove('slidein');
  follow.classList.remove('slideout');

  follow.classList.add('slidein-right');
  follow.classList.remove('slideout-right');

}

/** Slides move to the left */
function slideLeft(leed, follow) {

  console.log('leed: ', leed, ' follow: ', follow);

  // toggle the active classes to display the next image
  leed.classList.toggle('active');
  leed.classList.remove('slidein-right');
  leed.classList.remove('slideout-right');

  leed.classList.remove('slidein');
  leed.classList.add('slideout');

  follow.classList.toggle('active');
  follow.classList.remove('slidein-right');
  follow.classList.remove('slideout-right');

  follow.classList.add('slidein');
  follow.classList.remove('slideout');

}

function computeDivFromNode(node) {
  let nodeElement = document.createElement("div");
  nodeElement.classList.add('slide');

  // header text
  var nodeHeaderElement = document.createTextNode('HeaderText: ' + node.id);
  nodeElement.appendChild(nodeHeaderElement);

  node.children.forEach(childNode => {
    //console.log(childNode);

    childNode.parent = node;

    // div for navigation to child
    let childDivElement = document.createElement("div");
    childDivElement.appendChild(document.createTextNode('Child: ' + childNode.id));
    nodeElement.appendChild(childDivElement);

    childDivElement.addEventListener('click', () => {
      //console.log('clicked on ', childNode.id);

      // TODO: if child exists already, do not recreate it!

      let childNodeElement = computeDivFromNode(childNode);

      // state
      nextNodeElement = childNodeElement;
      currentNode = childNode;

      // store the DOM Element in the tree node model
      childNode.domElement = childNodeElement;

      // select the slides container element
      slidesElement.appendChild(childNodeElement);

      slideLeft(currentNodeElement, nextNodeElement);
      //slideRight(currentNodeElement, nextNodeElement);

      currentNodeElement = childNodeElement;

    })
  });

  return nodeElement;
}

function transition() {

  // select the slides container element
  let slidesElement = document.querySelector('.slides');

  // select the NodeList of all slides
  let slideElementsArray = slidesElement.querySelectorAll('.slide');

  slidesElement.addEventListener('click', () => {

    // select the active slide element
    let activeSlideElement = slidesElement.querySelector('.active');

    // use the prototype as a NodeList has no indexOf() method
    let currentSlideElementIndex = Array.prototype.indexOf.call(slideElementsArray, activeSlideElement);

    // find the next index
    let nextSlideElementIndex = currentSlideElementIndex == slideElementsArray.length-1 ? 0 : currentSlideElementIndex + 1;

    // retrieve the next div element
    let nextSlideElement = slideElementsArray[nextSlideElementIndex];

    // toggle the active classes to display the next image
    activeSlideElement.classList.toggle('active');
    activeSlideElement.classList.remove('slidein');
    activeSlideElement.classList.add('slideout');

    nextSlideElement.classList.toggle('active');
    nextSlideElement.classList.add('slidein');
    nextSlideElement.classList.remove('slideout');
  })
}

//readTreeStructure();
//transition();

//export readTreeStructure;

export default initTreeStructure;