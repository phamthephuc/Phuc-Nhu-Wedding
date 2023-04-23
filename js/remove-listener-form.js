const form = document.querySelector('form');
const elements = form.elements;

for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  const clone = element.cloneNode(true);
  element.parentNode.replaceChild(clone, element);
}