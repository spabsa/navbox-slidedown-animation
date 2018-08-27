const navBoxBtn = document.querySelector('.nav-box');
const navUl = document.querySelector('.nav-ul');

navBoxBtn.addEventListener('click', function() {
	let value = navUl.classList.contains('nav-ul-collapse');

	if(value) {
		navUl.classList.remove('nav-ul-collapse');
		navBoxBtn.classList.remove('change');
	}
	else {
		navUl.classList.add('nav-ul-collapse');
		navBoxBtn.classList.add('change');
	}
})