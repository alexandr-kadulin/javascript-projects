const pressed = [];
const secretCode = 'hello world';

window.addEventListener('keyup', (e) => {
	pressed.push(e.key);
	pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
	if (pressed.join('').includes(secretCode)) {
		console.log('DING! DING! DING!');
		cornify_add();
	}
});