import axios from "axios";
const baseURL='https://randomuser.me';
export const API = axios.get(baseURL+'/api/?gender=female')