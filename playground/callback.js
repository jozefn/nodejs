var getUser = (id, callback) => {

	var user = {
		id: id,
		name: 'Joseph'
	};
	setTimeout(() => {
		callback(user);
	}, 3000);
};

getUser(1,(userObj) =>{
  console.log(userObj);
});
