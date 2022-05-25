let contactWrapper = document.createElement('div');

let loadHero = (() => {
	let hero = document.createElement('div');
	let hero_header = document.createElement('h1');
	let hero_text = document.createElement('p');
	hero.classList.add('hero');
	hero_text.classList.add('hero-text');
	hero_header.textContent = "Asawana Lake";
	hero_text.textContent = "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.";
	hero.appendChild(hero_header);
	hero.appendChild(hero_text);
	contactWrapper.appendChild(hero);
})();

let loadMainContent = (() => {
	let mainContentWrapper = document.createElement('div');
	mainContentWrapper.classList.add('main-content-wrapper');
	let addressTextArray = ["9538 Suroku", "454 Lakeview Lane", "Asawana Restaurant"]
	let contactP = document.createElement('div');
	contactP.classList.add('contactInfo');
	for (let elem of addressTextArray) {
		let addressText = document.createElement('span');
		let lnBreak = document.createElement('div');
		lnBreak.classList.add('lnBreak');
		addressText.textContent = elem;
		contactP.appendChild(addressText);
		contactP.appendChild(lnBreak);
	}
	mainContentWrapper.appendChild(contactP);
	contactWrapper.appendChild(mainContentWrapper);
})();

export { contactWrapper };
