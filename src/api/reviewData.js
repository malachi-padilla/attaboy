import axios from 'axios';
const ID = 'ChIJ6QK6YKvFmoARoUI--dAFiVs';
const API_KEY = 'AIzaSyCgfje80TV3DOqJKKZ9_nZCeK8NiLtccIY';
const corsProxy = 'https://cors-anywhere.herokuapp.com/';
const URL = `${corsProxy}https://maps.googleapis.com/maps/api/place/details/json?placeid=${ID}&key=${API_KEY} `;

export const getReviews = () => {
	const options = {
		method: 'GET',
		url: URL,
		headers: { 'Access-Control-Allow-Origin': '*', accept: 'application/json' },
	};
	return new Promise(async (resolve, reject) => {
		axios.request(options).then((response) => resolve(response.data));
	});
};
