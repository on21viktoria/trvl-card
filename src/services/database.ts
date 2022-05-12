import axios from 'axios';

axios.defaults.withCredentials = true;
const api = "https://trvl-card-api.herokuapp.com/"


export default {
    getAllImageGroups() {
        return axios.get(api + 'images/').then((response) => {
            console.log(response.data)
            return response.data
        })
    }
}