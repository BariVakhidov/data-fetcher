import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

export const instance = applyCaseMiddleware(axios.create({
  baseURL: 'https://www.balldontlie.io/api/v1',
}));
