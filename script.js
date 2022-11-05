let body = document.querySelector("body");
let div = document.querySelector("#mainDiv");
let hr = document.querySelector("#header");
let label = document.querySelector("#lblText");
let input = document.querySelector("#key");
let btn = document.querySelector("#eventActive");
body.setAttribute ('style', 'width: 100%; margin: 0;');
div.setAttribute ('style', 'display: flex; background: #c9c27d; margin: 40px auto; height: 200px; width: 600px; align-items: center; flex-direction: column;');
hr.setAttribute ('style', 'textAlign: center; color: brown; margin: 20px 0;');
label.setAttribute ('style', 'color: brown; margin: 0;');
input.setAttribute ('type', 'number');
btn.setAttribute ('type', 'button');
btn.setAttribute ('value', 'Натисни');
input.setAttribute ('style', 'margin: 20px 0; height: 20px;');
btn.setAttribute ('style', 'height: 30px; width: 100px;');
var array=Array(10);
var count=0;
while(count<array.length){
	array[count] = Math.round(Math.random()*10);
	console.log(array[count]);
	count++;
}
btn.onclick = () => {
	count=0;
	let k = document.querySelector("#key").value;
	while(count<array.length){
		if(array[count]==k){
			alert("Задане значення наявне у масиві");
			break;
		}
		else{count++;}
	}
	if(count==(array.length)){alert("Заданого значення немає у масиві");}
}

  
