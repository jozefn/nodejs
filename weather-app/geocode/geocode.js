
const request = require('request');


var geocodeAddress = (address) => {

    var a_address = encodeURIComponent(address);

	request({
 		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${a_address}`,
		json: true
	},(error,response,body)=>{
		if (error){
			console.log('unable to connect to google server');
		} else if ( body.status === 'ZERO_RESULTS'){
			console.log('unable to find address');
		} else if ( body.status === 'OK'){
			console.log(`Address: ${body.results[0].formatted_address}`);
			console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
			console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
		}
	});
}

module.exports = {
	geocodeAddress
};
