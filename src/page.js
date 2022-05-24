let loadHeader = (tabSwitcherFunc) => {
	let header = document.createElement('header');
	let nav = document.createElement('nav');
	let ul = document.createElement('ul');
	let li1 = document.createElement('li');
	let li2 = document.createElement('li');
	let li3 = document.createElement('li');
	li1.dataset.site = "menu";
	li2.dataset.site = "order";
	li3.dataset.site = "restaurant";
	li1.textContent = "Menu";
	li2.textContent = "Order";
	li3.textContent = "Restaurant";
	li1.addEventListener('click', tabSwitcherFunc);
	li2.addEventListener('click', tabSwitcherFunc);
	li3.addEventListener('click', tabSwitcherFunc);
	ul.appendChild(li1);
	ul.appendChild(li2);
	ul.appendChild(li3);
	nav.appendChild(ul);
	header.appendChild(nav);
	return header;
};

export { loadHeader };
