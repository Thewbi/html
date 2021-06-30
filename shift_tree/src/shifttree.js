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

transition();