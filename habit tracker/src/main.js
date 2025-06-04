'use strict'

let habbits = [];
let globalActiveHabbitId;
const HABBIT_KEY = 'HABBIT_KEY'

/* page */
const page = {
	menu: document.querySelector('.menu_buttons'),
	headerInfo: {
		h1: document.querySelector('.main_h1'),
		progressPercent: document.querySelector('.header_progress_count'),
		progressSidebar: document.querySelector('.header_progress_sidebar_active')
	},
	bodyInfo: {
		allHabbits: document.querySelector('.all_habbits'),
		nextDay: document.querySelector('.habbit_day'),
	},
	popup: {
		index: document.querySelector('.cover'),
		iconField: document.querySelector('.popup_form input[name="input_icon"]'),
	}
}

/* utils */
function loadData() {
	const habbitsString = localStorage.getItem(HABBIT_KEY);
	const habbitArray = JSON.parse(habbitsString);
	if (Array.isArray(habbitArray)) {
		habbits = habbitArray;
	}
}

function saveData() {
	localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}

function validateAndGetFormData(form, fields){
	const formData = new FormData (form);
	const res = {};
	for (const field of fields){
		const fieldValue = formData.get(field);
		form[field].classList.remove('error');
	
		if(!fieldValue){
			form[field].classList.add('error');
		}

		res[field] = fieldValue;
	}

	let isValid = true;
	for(const field of fields){
		if(!res[field]){
			isValid = false;
		}
	}

	if(!isValid){
		return;
	}

	return res;

}

function resetForm(form, fields){
	for(const field of fields){
		form[field].value = '';
	}
}

/* render */
function rerenderMenu(activeHabbit) {
	for (const habbit of habbits) {
		const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);

		if (!existed) {
			const element = document.createElement('button');
			element.setAttribute('menu-habbit-id', habbit.id);
			element.classList.add('button_menu');
			element.addEventListener('click', () => rerender(habbit.id));
			element.innerHTML = `<img src="./src/images/${habbit.icon}.svg" alt="${habbit.name}">`

			if (habbit.id === activeHabbit.id) {
				element.classList.add('button_active');
			}

			page.menu.appendChild(element);
			continue;
		}

		if (habbit.id === activeHabbit.id) {
			existed.classList.add('button_active');
		} else {
			existed.classList.remove('button_active');
		}
	}

}

function rerenderHead(activeHabbit) {
	page.headerInfo.h1.innerText = activeHabbit.name;
	const progress = activeHabbit.days.length / activeHabbit.target > 1
		? 100
		: activeHabbit.days.length / activeHabbit.target * 100;
	page.headerInfo.progressPercent.innerText = progress.toFixed(0) + '%';
	page.headerInfo.progressSidebar.setAttribute('style', `width:${progress}%`)
}

function rerenderDays(activeHabbit) {
	page.bodyInfo.allHabbits.innerHTML = '';

	for (const index in activeHabbit.days) {
					const element = document.createElement('div');
					element.classList.add('habbit');
					element.innerHTML = `
						<div class="habbit_day">День ${Number(index) + 1}</div>
							<div class="habbit_comment">${activeHabbit.days[index].comment}</div>
							<button type="button" onclick='deleteDays(${index})' class="habbit_delete">
								<img src="./src/images/delete.svg" alt="Удалить день ${index + 1}">
							</button>
					`;
					page.bodyInfo.allHabbits.appendChild(element);
	}
	page.bodyInfo.nextDay.innerHTML = `День ${activeHabbit.days.length + 1}`
}

function rerender(activeHabbitId) {
	globalActiveHabbitId = activeHabbitId;

	const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId);
	if (!activeHabbit) {
		return;
	}

	document.location.replace(document.location.pathname + '#' + activeHabbitId);
	rerenderMenu(activeHabbit);
	rerenderHead(activeHabbit);
	rerenderDays(activeHabbit);
}

/* work with days */
function addDays(event){
	event.preventDefault();

	const data = validateAndGetFormData(event.target, ['input_comment']);

	if(!data){
		return;
	}

	habbits = habbits.map(habbit => {
		if(habbit.id === globalActiveHabbitId){
			return {
				...habbit,
				days: habbit.days.concat([{ comment: data.input_comment }])
			}
		}
		return habbit
	})

	resetForm(event.target, ['input_comment']);
	saveData();
	rerender(globalActiveHabbitId);
}

function deleteDays(dateId){
	habbits = habbits.map(habbit => {
		if(habbit.id === globalActiveHabbitId){
			habbit.days.splice(dateId, 1);
			return({ 
				...habbit,
				days: habbit.days
			})
		}
		return habbit
	})
	rerender(globalActiveHabbitId);
	saveData();
}

/* topup */
function togglePopup(){
	if(page.popup.index.classList.contains('cover_hidden')){
		page.popup.index.classList.remove('cover_hidden')
	}else{
		page.popup.index.classList.add('cover_hidden')
	}
}

/* working with habbits */
function setIcon(context, icon){
	page.popup.iconField.value = icon;
	const activeIcon = document.querySelector('.icon.icon_active');
	activeIcon.classList.remove('icon_active')
	context.classList.add('icon_active');
}

function addHabit(event){
	event.preventDefault();

	const data = validateAndGetFormData(event.target, ['input_name', 'input_purpose', 'input_icon']);

	if(!data){
		return;
	}

	const maxId = habbits.reduce((acc, habbit) => acc > habbit.id ? acc : habbit.id, 0)
	habbits = [
    ...habbits,
    {
        "id": maxId + 1,
        "icon": data.input_icon,
        "name": data.input_name,
        "target": data.input_purpose,
        "days": []
    }
];

	resetForm(event.target, ['input_name', 'input_purpose'])
	togglePopup();
	saveData();
	rerender(maxId + 1);
}


/* init */
(() => {
	loadData();
	const hashId = Number(document.location.hash.replace('#', ''));
	const urlHabbitId = habbits.find(habbit => habbit.id == hashId);
	if(urlHabbitId){
		rerender(urlHabbitId.id)
	} else {
		rerender(habbits[0].id)
	}
})()