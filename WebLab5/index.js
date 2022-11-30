const recomendations_content = document.getElementsByClassName('recomendations')[0].innerHTML;
const news_content = document.getElementsByClassName('news')[0].innerHTML;

document.getElementsByClassName('recomendations')[0].innerHTML = news_content;
document.getElementsByClassName('news')[0].innerHTML = recomendations_content;

let a = 5;

let S = (3*Math.sqrt(3)/2) * a * a;

document.getElementsByClassName('main-part')[0].innerHTML += 
`При довжині сторони a = ${a}, площа п'ятикутника = ${S}<br>`;

function ReverseNumber(num){
	let l = num.length;
	let res = '';
	for (var i = l - 1; i >= 0; i--) {
		res += num[i];	
	}
	return res;
}

let button = document.getElementById('task3_button');

button.addEventListener('click', Task3);
function Task3(){
	let res = ReverseNumber(document.forms["task3"]["number"].value);
	alert('Результат: ' + res);
	let kuki = `res=${res};`;
	document.cookie = `res=${res};`;
}

window.addEventListener('load', OnUpdate);

function OnUpdate(){
	UpdateBlocksStyle();
	UpdateBordersColor();
	if(document.cookie != '')
	{
	document.getElementById('task3').style.display = 'none';
	alert('Cookies: ' + document.cookie + 
		'\n\nпісля натискання кнопки «ОК» відбудеться видалення даних із cookies');
	document.cookie = 'res=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
	alert('Cookies видалено');
	location.reload();
	}

}


let button2 = document.getElementById('task4_button');

button2.addEventListener('click', Task4);

function Task4(){
	let color = document.forms["task4"]["color"].value;
	localStorage.setItem('color', color);
	document.getElementsByClassName("recomendations")[0].style = 'initial';
	UpdateBordersColor();
	
}

function UpdateBordersColor(){
	let color = localStorage.getItem('color');
	if(color != null || color != '')
	{
	document.getElementsByClassName("recomendations")[0].style.border = `3px solid ${color}`;
	document.getElementsByClassName("slogans")[0].style.border = `5px solid ${color}`;	
	document.getElementsByClassName("news")[0].style.border = `3px solid ${color}`;
	document.getElementsByClassName("last-product")[0].style.border = `3px solid ${color}`;
	}		
}

let welcome = document.getElementById('welcome');

welcome.addEventListener('click', () => {
	document.getElementById('task5_container').style.display = 'block';
})

let button3 = document.getElementById('task5_button');

button3.addEventListener('click', Task5);

function Task5(){
	let block = document.forms["task5"]["block"].value;
	//alert(block);
	let style = document.forms["task5"]["style"].value;
	localStorage.setItem(block, style);
	//alert(style);
	//alert(document.getElementById(block).style);
	document.getElementsByClassName(block)[0].style = style;
}

function UpdateBlocksStyle(){
	document.getElementsByClassName('header')[0].style = localStorage.getItem('header');
	document.getElementsByClassName('recomendations')[0].style = localStorage.getItem('recomendations');
	document.getElementsByClassName('slogans')[0].style = localStorage.getItem('slogans');
	document.getElementsByClassName('main-part')[0].style = localStorage.getItem('main-part');
	document.getElementsByClassName('news')[0].style = localStorage.getItem('news');
	document.getElementsByClassName('last-product')[0].style = localStorage.getItem('last-product');
}


let button4 = document.getElementById('task5_button2');

button4.addEventListener('click', InitBlocksStyle);

function InitBlocksStyle(){
	localStorage.removeItem('header');
	localStorage.removeItem('recomendations');
	localStorage.removeItem('slogans');
	localStorage.removeItem('main-part');
	localStorage.removeItem('news');
	localStorage.removeItem('last-product');
	document.getElementsByClassName('header')[0].style = 'initial';
	document.getElementsByClassName('recomendations')[0].style = 'initial';
	document.getElementsByClassName('slogans')[0].style = 'initial';
	document.getElementsByClassName('main-part')[0].style = 'initial';
	document.getElementsByClassName('news')[0].style = 'initial';
	document.getElementsByClassName('last-product')[0].style = 'initial';
}
