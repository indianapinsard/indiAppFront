import axios from 'axios';

export function getRequest(url, callback) {
  axios.get(url)
    .then((response) => callback(response));
}

export const heyhey = 'heyhey';
