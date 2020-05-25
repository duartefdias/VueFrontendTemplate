import axios from 'axios'
import 'dotenv/config'

//Connection with server
export default () => {
    var myAxios

    myAxios = axios.create({
        // Url of the backend Node.js app
        baseURL: 'http://localhost:3000'
    })
    //console.log('Backend URL: ' + 'localhost:3000')
    myAxios.interceptors.response.use(
        function(response) { return response;}, 
        function(error) {
        // handle error
        if (error.response) {
            return Promise.reject(error)
        }
    })
    return myAxios
}