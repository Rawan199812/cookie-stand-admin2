import axios from 'axios'
import cookies from '../fixtures/cookies.json'
const base_url = 'https://cookies-stand.herokuapp.com/'

export async function fetchCookie(web = true) {
    if (web) {
        return webFetchCookie();
    } else {
        return cookies
    }
}

export async function fetchCookie(id, web=true) {
    if (web) {
        return webFetchCookie(id);
    } else {
        return cookies[0]
    }
}
async function webFetchCookie() {
    const tokenResponse = await login('rawan', '19981998!')
    const { refresh, access: token } = tokenResponse.data;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const response = await axios.get(`${base_url}api/v1/book/`, config);
    return response.data;
  }
  

export async function webFetchCookie(id) {
    const tokenResponse = await login('rawan', '19981998')
    const { refresh, access: token } = tokenResponse.data;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const response = await axios.get(`${base_url}api/v1/book/${id}`, config);
    return response.data;
  }

async function login(username, password) {
    return axios.post(`${base_url}api/token/`, {
        username,
        password
      });
}