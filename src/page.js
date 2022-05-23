let pageLoad = () => {

	let content = document.querySelector('#content');

	let renderHeader = (() => {
		let header = document.createElement('header');
		let nav = document.createElement('nav');
		let ul = document.createElement('ul');
		let li1 = document.createElement('li');
		let li2 = document.createElement('li');
		let li3 = document.createElement('li');
		li1.textContent = "Menu";
		li2.textContent = "Order";
		li3.textContent = "Restaurant";
		ul.appendChild(li1);
		ul.appendChild(li2);
		ul.appendChild(li3);
		nav.appendChild(ul);
		header.appendChild(nav);
		content.appendChild(header);
	})();

	let renderHero = (() => {
		let hero = document.createElement('div');
		let hero_header = document.createElement('h1');
		let hero_text = document.createElement('p');
		hero.classList.add('hero');
		hero_text.classList.add('hero-text');
		hero_header.textContent = "Asawana Lake";
		hero_text.textContent = "The most magnificent Restaurant ever, every time wondrous. Lorem ipsum dolor sit amet, qui adipisicing sint cillum sint cupidatat.";
		hero.appendChild(hero_header);
		hero.appendChild(hero_text);
		content.appendChild(hero);
	})();
};

export { pageLoad };
