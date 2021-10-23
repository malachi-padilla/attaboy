import axios from 'axios';

const id = 'atta-boy-garage-door-repair-rancho-cordova';
const corsProxy = 'https://cors-anywhere.herokuapp.com';
const URL = `${corsProxy}/https://api.yelp.com/v3/${id}/reviews/`;
const token =
	'2gZZJU6SBEzgGTP9ElSAhUXA-hp0K6dYDPJOzMWuQ9MOOeFiRbWDzrfYftbQihYru2bJx8bPuwVe0lp22XrXLZaPZghkNkyybBQdIXB8_znUNt2GNLFeQnLmjpuYXYx';

export async function getReviews() {
	let options = {
		method: 'GET',
		url: URL,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	return new Promise(async (resolve, reject) => {
		axios.request(options).then((response) => {
			resolve(response);
			console.log(response);
		});
	});
}
