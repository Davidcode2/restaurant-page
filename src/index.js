import './style.css';
import mountain_image from './wp-mountain-clouds.jpg';
import { loadHeader } from './page.js';
import * as mainView from './mainView.js';
import * as contactView from './contactView.js';
import * as restaurantView from './restaurantView.js';

console.log("yay");
const content = document.querySelector('#content');

let menu = mainView.menuWrapper;
let contact = contactView.contactWrapper;
let restaurant = restaurantView.loadHero();

let tabSwitcher = (event) => {
	let contentToBeAppended = event.target.dataset.site;
	console.log(contentToBeAppended);
	content.removeChild(content.lastChild);
	content.appendChild(eval(contentToBeAppended));
	colorItem(event.target);
}

let colorItem = (elem) => {
	console.log(elem);
	if (elem.previousSibling) {
		elem.previousSibling.style.color = "black";
		if (elem.previousSibling.previousSibling) {
			elem.previousSibling.previousSibling.style.color = "black";
		}
	}
	if (elem.nextSibling) {
		elem.nextSibling.style.color = "black";
		if (elem.nextSibling.nextSibling) {
			elem.nextSibling.nextSibling.style.color = "black";
		}
	}
	let parentUl = elem.parentElement;
	//for (let child in parentUl.children) {
	//	console.log(child);
	//	child.style.color = "black";
	//}
	elem.style["color"] = "darkgoldenrod";
}

let header = loadHeader(tabSwitcher)
content.appendChild(header);
content.appendChild(menu);
