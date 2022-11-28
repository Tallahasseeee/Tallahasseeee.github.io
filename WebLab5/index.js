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
	if(document.cookie != '')
	{
	document.getElementById('task3').style.display = 'none';
	alert('Cookies: ' + document.cookie + 
		'\n\nпісля натискання кнопки «ОК» відбудеться видалення даних із cookies');
	//document.cookie = 'expires=Thu, 01 Jan 1970 00:00:00 GMT';
	alert('Cookies видалено');
	location.reload();
	}

}
