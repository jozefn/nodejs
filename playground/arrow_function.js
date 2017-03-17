
var square = (x) => {
 
	var result = x * x;
	return result;

}

// console.log(square(9));

var user = {
	name: 'Joseph',
	sayHi () {
		var args = Array.prototype.slice.call(arguments); 
		console.log(args[1]);
		console.log(`Hi ${this.name}`);
	}
};

user.sayHi('jack','joe','jim');

