import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

export const instance = applyCaseMiddleware(axios.create({
  baseURL: 'https://www.balldontlie.io/api/v1',
  headers: {
    'Cross-Origin-Embedder-Policy': 'require-corp',
    'Cross-Origin-Opener-Policy': 'same-origin',
  },
}));
