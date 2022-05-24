import './style.css';
import mountain_image from './wp-mountain-clouds.jpg';
import { loadHeader } from './page.js';
import * as mainView from './mainView.js';
import * as orderView from './orderView.js';
import * as restaurantView from './restaurantView.js';

console.log("yay");
const content = document.querySelector('#content');

let menu = mainView.loadHero()
let order = orderView.loadHero();
let restaurant = restaurantView.loadHero();

let tabSwitcher = (event) => {
	let contentToBeAppended = event.target.dataset.site;
	console.log(contentToBeAppended);
	content.removeChild(content.lastChild);
	content.appendChild(eval(contentToBeAppended));
	// remove content of current view
	// render content of chosen view
}

let header = loadHeader(tabSwitcher)
content.appendChild(header);
content.appendChild(menu);

