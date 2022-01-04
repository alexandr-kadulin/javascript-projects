let hr = document.getElementById('hr');
let mn = document.getElementById('mn');
let sc = document.getElementById('sc');

setInterval(function () {
	let date = new Date();
	let currentHour = date.getHours();
	let currentMinute = date.getMinutes();
	let currentSecond = date.getSeconds();
	let scDegree = currentSecond * (360 / 60);
	let mnDegree = currentMinute * (360 / 60) + scDegree / 60;
	let hrDegree = currentHour * (360 / 12) + mnDegree / 12;
	sc.style.transform = `rotateZ(${scDegree}deg)`;
	mn.style.transform = `rotateZ(${mnDegree}deg)`;
	hr.style.transform = `rotateZ(${hrDegree}deg)`;
}, 1000);
