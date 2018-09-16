import axios from 'axios';

const ROOT_URL = 'https://images-api.nasa.gov/search';
export const FETCH_MAP = 'FETCH_MAP';

export function fetchMap(city) {
    const url = `${ROOT_URL}?q=${city}`;
    const request = axios.get(url);
	
    return {
        type: FETCH_MAP,
        payload: request
    };
}