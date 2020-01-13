import axios from 'axios';
import runtimeEnv from './runtimeEnv';

export const mainInstance = axios.create({
  baseURL: <string>runtimeEnv.MAIN_HOST,
});

export const nckuInstance = axios.create({
  baseURL: <string>runtimeEnv.NCKU_HOST,
});
