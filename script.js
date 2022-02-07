const body = document.querySelector('body');
const nav = document.querySelector('nav');
const modeToggle = document.querySelector('.dark-light');
const searchToggle = document.querySelector('.searchToggle');
const searchField = document.querySelector('.search-field');
const sidebarClose = document.querySelector('.sidebar-close');
const sidebarOpen = document.querySelector('.sidebar-open');
const alertCloseBtnsList = document.querySelectorAll('.alert-close');
console.log(alertCloseBtnsList);

let getMode = localStorage.getItem('mode');

if (getMode && getMode === 'dark-mode') {
	body.classList.add('dark');
}

modeToggle.addEventListener('click', () => {
	modeToggle.classList.toggle('active');
	body.classList.toggle('dark');
	if (!body.classList.contains('dark')) {
		localStorage.setItem('mode', 'light-mode');
	} else {
		localStorage.setItem('mode', 'dark-mode');
	}
});

searchToggle.addEventListener('click', () => {
	searchToggle.classList.toggle('active');
	searchField.classList.toggle('active');
});

sidebarOpen.addEventListener('click', () => {
	nav.classList.add('active');
});

// body.addEventListener('click', (e) => {
// 	let clickedElmm = e.target;

// 	if (!clickedElmm.classList.contains('sidebar-open') && !clickedElmm.classList.contains('menu')) {
// 		nav.classList.remove('active');
// 	}
// });

alertCloseBtnsList.forEach((alertCloseButton) => {
	console.log(alertCloseButton);
	alertCloseButton.addEventListener('click', (event) => {
		console.log('clicked');
	});
});
