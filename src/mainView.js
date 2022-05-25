import white_plate_half from './pexels-anna-tukhfatullina-food-photographerstylist-2611817_half.png';
import white_plate_full2 from './pexels-anna-tukhfatullina-food-photographerstylist-2611817_full2.png';

let menuWrapper = document.createElement('div');
let loadHero = (() => {
	let hero = document.createElement('div');
	let hero_header = document.createElement('h1');
	let hero_text = document.createElement('p');
	hero.classList.add('hero');
	hero_text.classList.add('hero-text');
	hero_header.textContent = "Asawana Lake";
	hero_text.textContent = "The most magnificent Restaurant ever, every time an adventure. Lorem ipsum dolor sit amet, qui adipisicing sint cillum sint cupidatat.";
	hero.appendChild(hero_header);
	hero.appendChild(hero_text);
	menuWrapper.appendChild(hero);
})();

let loadMenuView = (() => {
	let menu_tiles = document.createElement('div');
	let main_content = document.createElement('div');
	main_content.classList.add('main-content-wrapper');
	menu_tiles.classList.add('tile-content');
	/*const plateImg1 = new Image();
	plateImg1.src = white_plate_half;
	plateImg1.classList.add('dishImg');
	menu_tiles.appendChild(plateImg1);
	main_content.appendChild(menu_tiles);
	menuWrapper.appendChild(main_content);*/
	let dishNameArray = ["nakita", "horishi", "sekatana", "inu", "noratami", "tikanemu"];
	for (let i = 0; i < 6; i++) {
		let dish_wrapper = document.createElement('div');
		dish_wrapper.classList.add('dishImg-wrapper');
		const plateImg3 = new Image();
		plateImg3.src = white_plate_full2;
		plateImg3.classList.add('dishImg');
		let dishName = document.createElement('span');
		dishName.classList.add('dish-title');
		dishName.textContent = dishNameArray[i];
		dish_wrapper.appendChild(plateImg3);
		dish_wrapper.appendChild(dishName);
		menu_tiles.appendChild(dish_wrapper);
	}
	main_content.appendChild(menu_tiles);
	menuWrapper.appendChild(main_content);

})();

export { menuWrapper };
