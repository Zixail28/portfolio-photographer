import i18Obj from "./translate.js";

const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".nav");
const navItem = document.querySelectorAll(".nav-link");
const pBtn = document.querySelectorAll(".portfolio-btn");
const pPic = document.querySelectorAll(".portfolio-pic");
const buttonEn = document.querySelector(".en");
const buttonRu = document.querySelector(".ru");
const words = document.querySelectorAll("[data-i18n]");




const header = document.querySelector('.header');
const main = document.querySelector('.main');
const body = document.querySelector('body');
const cont = document.querySelector('.contacts-cont');
const logo = document.querySelector('.logo');
const hName = document.querySelector('.hero-name');
const fText = document.querySelector('.footer-text');
const btn = document.querySelector('.btn');
const cTitle = document.querySelector('.contact-title');
const cBtn = document.querySelector('.contacts-btn');
const cTArea = document.querySelector('.contacts-textarea');


const sTitle = document.querySelectorAll('.section-title');
const p = document.querySelectorAll('p');
const a = document.querySelectorAll('a');
const h3 = document.querySelectorAll('h3');
const span = document.querySelectorAll('span.desc');
const sImg = document.querySelectorAll('.social-imgs');
const fDataP = document.querySelectorAll('.footer-data-p');
const sItemT = document.querySelectorAll('.skills-item-text');
const pName = document.querySelectorAll('.price-name');
const portfBtn = document.querySelectorAll('.portfolio-btn');
const cInput = document.querySelectorAll('.contacts-input');

const themeBtn = document.querySelector('.theme');
const themeSvg = document.querySelector('.theme-svg');
let i = 0;

themeBtn.addEventListener('click', () => {
	if(i == 0){
	i++;
	themeSvg.setAttribute('src', './assets/svg/carbon_moon.svg');
	header.classList.add('active')
	main.classList.add('active')
	cont.classList.add('active')
	logo.classList.add('active')
	hName.classList.add('active')
	cTitle.classList.add('active')
	cTArea.classList.add('active')
	sTitle.forEach((a, index) => sTitle[index].classList.add('active'));
	portfBtn.forEach((a, index) => portfBtn[index].classList.add('active'));
	cInput.forEach((a, index) => cInput[index].classList.add('active'));
	a.forEach((a1, index) => a[index].style.color = '#000');
	h3.forEach((a, index) => h3[index].style.color = '#000');
	span.forEach((a, index) => span[index].style.color = '#000');
	sItemT.forEach((a, index) => sItemT[index].style.color = '#000');
	sImg.forEach((a, index) => sImg[index].style.filter = 'invert(100%)');
	body.style.background = '#fff'
	fText.style.color = '#000'
	fDataP[0].style.color = '#000'
	fDataP[1].style.color = '#000'
	btn.style.background = '#fff'
	cBtn.style.background = '#fff'

	if(window.getComputedStyle(buttonEn).color === 'rgb(189, 174, 130)'){
		buttonRu.style.color = '#fff'
		buttonEn.style.color = '#000'
	} else{
		buttonEn.style.color = '#fff'
		buttonRu.style.color = '#000'
	}


	} else if(i == 1){
		i--;
		themeSvg.setAttribute('src', './assets/svg/carbon_sun.svg');
		header.classList.remove('active')
		main.classList.remove('active')
		cont.classList.remove('active')
		logo.classList.remove('active')
		hName.classList.remove('active')
		cTitle.classList.remove('active')
		cTArea.classList.remove('active')
		sTitle.forEach((a, index) => sTitle[index].classList.remove('active'));
		portfBtn.forEach((a, index) => portfBtn[index].classList.remove('active'));
		cInput.forEach((a, index) => cInput[index].classList.remove('active'));
		a.forEach((a1, index) => a[index].style.color = '#fff');
		h3.forEach((a, index) => h3[index].style.color = '#fff');
		span.forEach((a, index) => span[index].style.color = '#fff');
		sItemT.forEach((a, index) => sItemT[index].style.color = '#fff');
		sImg.forEach((a, index) => sImg[index].style.filter = 'invert(0%)');
		body.style.background ='#000'
		fText.style.color = '#fff'
		fDataP[0].style.color = '#fff'
		fDataP[1].style.color = '#fff'
		btn.style.background = '#bdae82'
		cBtn.style.background = '#bdae82'

		if(window.getComputedStyle(buttonEn).color === 'rgb(0, 0, 0)'){
			buttonEn.style.color = 'rgb(189, 174, 130)'
			buttonRu.style.color = '#fff'
		} else{
			buttonRu.style.color = 'rgb(189, 174, 130)'
			buttonEn.style.color = '#fff'
		}

	}
});





const getTranslate = (event) => {
	const lang = event.target.getAttribute('data-lang') 
	if(lang === 'ru'){
		if(i == 0){
		buttonEn.style.color = '#fff';
		buttonRu.style.color = '#bdae82';
		} else{
			buttonEn.style.color = '#fff';
			buttonRu.style.color = '#000';	
		}
		words.forEach((word) =>{
			const atr = word.getAttribute('data-i18n');
			word.textContent = i18Obj[lang][atr]
		})
		pName.forEach((a, index) => pName[index].style.fontSize = '24px');
	} else if(lang === 'en'){
		if(i == 0){
		buttonEn.style.color = '#bdae82';
		buttonRu.style.color = '#fff';
		} else{
			buttonEn.style.color = '#000';
			buttonRu.style.color = '#fff';
		}
		words.forEach((word) =>{
			const atr = word.getAttribute('data-i18n');
			word.textContent = i18Obj[lang][atr]
		})
		pName.forEach((a, index) => pName[index].style.fontSize = '28px');
	}
}

buttonEn.addEventListener('click', getTranslate);
buttonRu.addEventListener('click', getTranslate);


burger.addEventListener('click', () => {
  burger.classList.toggle("active");
	nav.classList.toggle("active");
});

navItem[0].onclick = function(){
  burger.classList.toggle("active");
	nav.classList.toggle("active");
}
navItem[1].onclick = function(){
  burger.classList.toggle("active");
	nav.classList.toggle("active");
}
navItem[2].onclick = function(){
  burger.classList.toggle("active");
	nav.classList.toggle("active");
}
navItem[3].onclick = function(){
  burger.classList.toggle("active");
	nav.classList.toggle("active");
}
navItem[4].onclick = function(){
  burger.classList.toggle("active");
	nav.classList.toggle("active");
}

pBtn[0].onclick = function(){
  pBtn[0].classList.toggle("choosed");
	pBtn[1].classList.remove("choosed");
	pBtn[2].classList.remove("choosed");
	pBtn[3].classList.remove("choosed");
	pPic[0].setAttribute("src", "./assets/img/winter/1.jpg");
	pPic[1].setAttribute("src", "./assets/img/winter/2.jpg");
	pPic[2].setAttribute("src", "./assets/img/winter/3.jpg");
	pPic[3].setAttribute("src", "./assets/img/winter/4.jpg");
	pPic[4].setAttribute("src", "./assets/img/winter/5.jpg");
	pPic[5].setAttribute("src", "./assets/img/winter/6.jpg");
}
pBtn[1].onclick = function(){
  pBtn[1].classList.toggle("choosed");
	pBtn[0].classList.remove("choosed");
	pBtn[2].classList.remove("choosed");
	pBtn[3].classList.remove("choosed");
	pPic[0].setAttribute("src", "./assets/img/spring/1.jpg");
	pPic[1].setAttribute("src", "./assets/img/spring/2.jpg");
	pPic[2].setAttribute("src", "./assets/img/spring/3.jpg");
	pPic[3].setAttribute("src", "./assets/img/spring/4.jpg");
	pPic[4].setAttribute("src", "./assets/img/spring/5.jpg");
	pPic[5].setAttribute("src", "./assets/img/spring/6.jpg");
}
pBtn[2].onclick = function(){
  pBtn[2].classList.toggle("choosed");
	pBtn[1].classList.remove("choosed");
	pBtn[0].classList.remove("choosed");
	pBtn[3].classList.remove("choosed");
	pPic[0].setAttribute("src", "./assets/img/summer/1.jpg");
	pPic[1].setAttribute("src", "./assets/img/summer/2.jpg");
	pPic[2].setAttribute("src", "./assets/img/summer/3.jpg");
	pPic[3].setAttribute("src", "./assets/img/summer/4.jpg");
	pPic[4].setAttribute("src", "./assets/img/summer/5.jpg");
	pPic[5].setAttribute("src", "./assets/img/summer/6.jpg");
}
pBtn[3].onclick = function(){
  pBtn[3].classList.toggle("choosed");
	pBtn[1].classList.remove("choosed");
	pBtn[2].classList.remove("choosed");
	pBtn[0].classList.remove("choosed");
	pPic[0].setAttribute("src", "./assets/img/autumn/1.jpg");
	pPic[1].setAttribute("src", "./assets/img/autumn/2.jpg");
	pPic[2].setAttribute("src", "./assets/img/autumn/3.jpg");
	pPic[3].setAttribute("src", "./assets/img/autumn/4.jpg");
	pPic[4].setAttribute("src", "./assets/img/autumn/5.jpg");
	pPic[5].setAttribute("src", "./assets/img/autumn/6.jpg");
}


