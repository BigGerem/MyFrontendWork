let body = document.querySelector('body');
let content = document.createElement('div');
body.prepend(content);
content.innerHTML = '<h3>Магічний шар</h3><input>';
let header = document.querySelector('h3');
let question = document.querySelector('input');
let ball = document.createElement('div');
content.append(ball);
let caption = document.createElement('p');
content.append(caption);
caption.innerHTML ='Натисніть на шар для отримання відповіді';
let result = document.createElement('p');
body.setAttribute('style', ' display: flex; width: 100%; margin: 0; background: black; vertical-align: middle;');
ball.append(result);
content.setAttribute('style', 'display: flex; width: 60%; height: 660px; margin: auto; align-items: center; flex-direction: column;');
header.setAttribute('style', 'font-size: 50px; color: #DDA0DD; margin: 0;');
question.setAttribute('type', 'text');
question.setAttribute('style', 'height: 40px;border-radius: 25px; width: 400px; margin: 20px 0; paddingRight: 30px; padding: 0 20px; font-size: 20px; font-family: Times New Roman;');
question.placeholder = "Ваше питання:";
ball.setAttribute('style', 'display: flex; align-items: center; width: 600px; height: 600px; margin: 20px 0 0px 0; background: url(3.gif) no-repeat center;');
caption.setAttribute('style', 'color: white;');
result.setAttribute('style', 'color: #E0FFFF; margin: 0 auto; font-size: 30px; align-text: center;');
var answers = new Array("Беззаперечно", "Безсумнівно", "Однозначно", "Безумовно так", "Можеш бути впевнений у цьому", "Мені здається - так", "Скоріш за все", "Гарні перспективи", "Знаки кажуть - так", "Так", "Поки не зрозуміло, спробуй знову", "Запитай пізніше", "Краще не розповідати", "Зараз не можна передбачити", "Сконцентруйся і спитай знову", "Навіть не думай", "Моя відповідь - ні", "За моїми даними – ні", "Перспективи не дуже гарні", "Дуже сумнівно");
var index = 0;
ball.onclick = () => {
	if(question.value!=0){
	index = Math.floor(Math.random()*20);
	result.innerHTML = answers[index];}
	else {result.innerHTML="Ви не ввели питання"}
}
