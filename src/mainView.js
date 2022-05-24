let loadHero = () => {
	let hero = document.createElement('div');
	let hero_header = document.createElement('h1');
	let hero_text = document.createElement('p');
	hero.classList.add('hero');
	hero_text.classList.add('hero-text');
	hero_header.textContent = "Asawana Lake";
	hero_text.textContent = "The most magnificent Restaurant ever, every time wondrous. Lorem ipsum dolor sit amet, qui adipisicing sint cillum sint cupidatat.";
	hero.appendChild(hero_header);
	hero.appendChild(hero_text);
	return hero;
};

export {loadHero};
