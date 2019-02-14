const togglelist = document.getElementById('togglelist');
const listDiv = document.querySelector('.list');
const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');

togglelist.addEventListener('click', () => {
 if(listDiv.style.display == 'none'){
  togglelist.textContent= 'Hide list';
  listDiv.style.display = 'block';
} else {
  togglelist.textContent = 'Show list';
 listDiv.stlye.display = 'none';
 });
          
                           

button.addEventListener('click', () => {
  p.innerHTML = input.value + ':';
});

let ul = document.getElementByTagName('ul')[0]; //returns a collection
ul.appendChild(li); //adds li element to ul in html
addItemInput.value = ' '; //clears input box text 

let li = document.querySelector('li:last-child'); //returns the last element in li
ul.removeChild(li); // removes the last element in li

var contentDiv = document.getElementById('content');
var newParagraph = document.createElement('p');
//This created the new paragraph element
var pClassName = newParagraph.setAttribute('class', 'panel'); // This added the class name, panel, to the new paragraph element saved into the newParagraph variable
