import axios from 'axios';

export const mainInstance = axios.create({
  baseURL: <string>process.env.MAIN_HOST,
});

export const nckuInstance = axios.create({
  baseURL: <string>process.env.NCKU_HOST,
});
