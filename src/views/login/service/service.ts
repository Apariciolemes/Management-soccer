import axios from 'axios';
const baseUrl = "http://localhost:3000/access-login"

const loginUser = (user: any) => axios.post(baseUrl, user).then((resp: any) => resp.data);

export { loginUser };