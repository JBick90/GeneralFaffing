const title = document.getElementById('main-heading');
title.style.fontSize = '50px' //This picks out the elements with Id 'main-heading' and makes them 50px high. I'm not sure if this would work for mutiple items in the same class

const listItems = document.getElementsByClassName('list-items');

for(i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '1rem'; //You need to do this, rather than the method above, as it won't apply the styling to them all. To do this we need a loop.
}

const ul = document.querySelector('ul') //Selecting unordered list in html
const li = document.createElement('li') //Create a list element, but we've not said where yet? I think?

ul.append(li) //Places a list element in the ul tag

const firstListItem = document.querySelector('.list-items');

li.innerText = 'E: Volts' //This actually puts text onto the list append above

li.classList.add('list-items');