
var user = {
	name: 'Joseph',
	getUser () {
		return this.name;
	},
	setUser (n) {
		this.name = n;
	}

};

var n = user.getUser();
console.log(`Name of user is ${n}`);

user.setUser('Jim');

var n1 = user.getUser();
console.log(`Name of user is ${n1}`);



