const information = require ('./information.js');
const cowsay = require('cowsay');

console.log(cowsay.say({
	text: `My name is ${information.name} and I'm at the ${information.campus} campus`,
	e: "><",
	T: "U "
	}));

