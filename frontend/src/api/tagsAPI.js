import axios from 'axios';
import { BASEURL } from '../constants'; 

//Tag Search
export const searchByTag = (cookie,tag) => axios.get(`${BASEURL}/tag/search/?cookie=${cookie}&tag=${tag}`);